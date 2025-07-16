"use client";
import React, { useEffect, useState, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { FlagTriangleRight } from 'lucide-react';
import 'leaflet/dist/leaflet.css'

interface Pin {
  id?: number;
  lat: number;
  lng: number;
  name: string;
  spot: string;
  note: string;
}

const API_URL = "/api";
const REQUIRED_PASSWORD = "shootsbrah";

// Create a custom icon using the provided SVG for FlagTriangleRight
const createCustomIcon = () => {
  const iconElement = document.createElement('div');
  iconElement.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; color: #000000;">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flag-triangle-right-icon lucide-flag-triangle-right"><path d="M7 22V2l10 5-10 5"/></svg>
    </div>
  `;
  
  return new L.DivIcon({
    html: iconElement.innerHTML,
    className: "custom-svg-pin",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
};

const customIcon = createCustomIcon();

function PinsLayer({ pins, deletePin, openAddModal, isAuthenticated }: { 
  pins: Pin[]; 
  deletePin: (idx: number) => void; 
  openAddModal: (lat: number, lng: number) => void;
  isAuthenticated: boolean;
}) {
  useMapEvents({
    click(e) {
      openAddModal(e.latlng.lat, e.latlng.lng);
    },
  });
  return (
    <>
      {pins
        .filter(pin => typeof pin.lat === 'number' && typeof pin.lng === 'number' && !isNaN(pin.lat) && !isNaN(pin.lng))
        .map((pin, idx) => (
          <Marker key={idx} position={[pin.lat, pin.lng]} icon={customIcon}>
            <Popup>
              <div className="text-sm">
                <div className="font-bold text-black">{pin.spot}</div>
                <div className="text-gray-600 mb-2">{pin.name}</div>
                <div className="text-black">{pin.note}</div>
              </div>
              {isAuthenticated && (
                <button
                  className="mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                  onClick={() => deletePin(idx)}
                >
                  Delete Pin
                </button>
              )}
            </Popup>
          </Marker>
        ))}
    </>
  );
}

export default function SurfMap({ onPinCountChange }: { onPinCountChange?: (count: number) => void }) {
  const [pins, setPins] = useState<Pin[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLatLng, setModalLatLng] = useState<{ lat: number; lng: number } | null>(null);
  const [nameInput, setNameInput] = useState("");
  const [spotInput, setSpotInput] = useState("");
  const [noteInput, setNoteInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Fetch pins from backend on mount
  useEffect(() => {
    fetch(`${API_URL}/pins`)
      .then(res => res.json())
      .then(data => {
        setPins(Array.isArray(data) ? data : []);
        setLoaded(true);
        if (onPinCountChange) onPinCountChange(Array.isArray(data) ? data.length : 0);
      })
      .catch(() => setLoaded(true));
  }, [onPinCountChange]);

  // Add pin via backend
  const handleAddPin = () => {
    if (!isAuthenticated) {
      setPasswordModalOpen(true);
      return;
    }
    
    if (modalLatLng && nameInput.trim() && spotInput.trim() && noteInput.trim()) {
      fetch(`${API_URL}/pins`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lat: modalLatLng.lat,
          lng: modalLatLng.lng,
          name: nameInput.trim(),
          spot: spotInput.trim(),
          note: noteInput.trim(),
        })
      })
        .then(res => res.json())
        .then(newPin => {
          setPins(prev => [...prev, newPin]);
          if (onPinCountChange) onPinCountChange(pins.length + 1);
        });
      closeModal();
    }
  };

  // Delete pin via backend
  const deletePin = useCallback((idx: number) => {
    if (!isAuthenticated) {
      setPasswordModalOpen(true);
      return;
    }
    
    const pinToDelete = pins[idx];
    if (!pinToDelete) return;
    fetch(`${API_URL}/pins/${pinToDelete.id}`, { method: 'DELETE' })
      .then(() => {
        setPins(prev => prev.filter((_, i) => i !== idx));
        if (onPinCountChange) onPinCountChange(pins.length - 1);
      });
  }, [pins, onPinCountChange, isAuthenticated]);

  const openAddModal = (lat: number, lng: number) => {
    if (!isAuthenticated) {
      setPasswordModalOpen(true);
      return;
    }
    
    setModalLatLng({ lat, lng });
    setNameInput("");
    setSpotInput("");
    setNoteInput("");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalLatLng(null);
    setNameInput("");
    setSpotInput("");
    setNoteInput("");
  };

  const handlePasswordSubmit = () => {
    if (passwordInput === REQUIRED_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordModalOpen(false);
      setPasswordInput("");
      setPasswordError("");
    } else {
      setPasswordError("Incorrect password");
      setPasswordInput("");
    }
  };

  const closePasswordModal = () => {
    setPasswordModalOpen(false);
    setPasswordInput("");
    setPasswordError("");
  };

  return (
    <div className="relative w-full h-full">
      <MapContainer center={[20, 0]} zoom={2} style={{ width: "100%", height: "100%" }} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <PinsLayer pins={pins} deletePin={deletePin} openAddModal={openAddModal} isAuthenticated={isAuthenticated} />
      </MapContainer>
      
      {/* Add Pin Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[1000] bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4 text-black">Add a Surf Spot</h2>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mb-3 text-black"
              placeholder="Spot"
              value={spotInput}
              onChange={e => setSpotInput(e.target.value)}
              autoFocus
            />
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mb-3 text-black"
              placeholder="Added By"
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
            />
            <textarea
              className="w-full h-24 p-2 border border-gray-300 rounded mb-4 text-black"
              placeholder="Notes..."
              value={noteInput}
              onChange={e => setNoteInput(e.target.value)}
            />
            <div className="flex gap-4 w-full justify-end">
              <button
                className="px-4 py-2 rounded bg-gray-200 text-black hover:bg-gray-300"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 disabled:bg-blue-200"
                onClick={handleAddPin}
                disabled={!nameInput.trim() || !spotInput.trim() || !noteInput.trim()}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Password Modal */}
      {passwordModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[1000] bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4 text-black">Enter Password</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Password required to add or delete pins
            </p>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mb-3 text-black"
              placeholder="Password"
              value={passwordInput}
              onChange={e => setPasswordInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handlePasswordSubmit()}
              autoFocus
            />
            {passwordError && (
              <p className="text-red-500 text-sm mb-3">{passwordError}</p>
            )}
            <div className="flex gap-4 w-full justify-end">
              <button
                className="px-4 py-2 rounded bg-gray-200 text-black hover:bg-gray-300"
                onClick={closePasswordModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700"
                onClick={handlePasswordSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 