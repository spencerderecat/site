"use client";
import React, { useEffect, useState, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css'

interface Pin {
  lat: number;
  lng: number;
  note: string;
}

const STORAGE_KEY = "surf-map-pins";

const svgString = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" width="36" height="36" style="display:block;"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg>`;

const customIcon = new L.DivIcon({
  html: `<div style="display: flex; align-items: center; justify-content: center;">${svgString}</div>`,
  className: "custom-svg-pin",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
});

function PinsLayer({ pins, addPin, deletePin, openAddModal }: { pins: Pin[]; addPin: (pin: Pin) => void; deletePin: (idx: number) => void; openAddModal: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      openAddModal(e.latlng.lat, e.latlng.lng);
    },
  });
  return (
    <>
      {pins.map((pin, idx) => (
        <Marker key={idx} position={[pin.lat, pin.lng]} icon={customIcon}>
          <Popup>
            <div>{pin.note}</div>
            <button
              className="mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={() => deletePin(idx)}
            >
              Delete Pin
            </button>
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
  const [noteInput, setNoteInput] = useState("");

  // Load pins from localStorage on mount (client only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setPins(parsed);
            console.log("Loaded pins from localStorage:", parsed);
          }
        } catch (e) {
          console.warn("Failed to parse pins from localStorage");
        }
      }
      setLoaded(true);
    }
  }, []);

  // Save pins to localStorage whenever they change (after initial load)
  useEffect(() => {
    if (loaded && typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pins));
      if (onPinCountChange) onPinCountChange(pins.length);
      console.log("Saved pins to localStorage:", pins);
    }
  }, [pins, loaded, onPinCountChange]);

  const addPin = useCallback((pin: Pin) => {
    setPins((prev) => [...prev, pin]);
  }, []);

  const deletePin = useCallback((idx: number) => {
    setPins((prev) => prev.filter((_, i) => i !== idx));
  }, []);

  const openAddModal = (lat: number, lng: number) => {
    setModalLatLng({ lat, lng });
    setNoteInput("");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalLatLng(null);
    setNoteInput("");
  };

  const handleAddPin = () => {
    if (modalLatLng && noteInput.trim()) {
      setPins((prev) => [...prev, { lat: modalLatLng.lat, lng: modalLatLng.lng, note: noteInput.trim() }]);
      closeModal();
    }
  };

  return (
    <div className="relative w-full h-full">
      <MapContainer center={[20, 0]} zoom={2} style={{ width: "100%", height: "100%" }} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <PinsLayer pins={pins} addPin={() => {}} deletePin={deletePin} openAddModal={openAddModal} />
      </MapContainer>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[1000] bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4 text-black">Add a Surf Spot Note</h2>
            <textarea
              className="w-full h-24 p-2 border border-gray-300 rounded mb-4 text-black"
              placeholder="Describe this surf spot..."
              value={noteInput}
              onChange={e => setNoteInput(e.target.value)}
              autoFocus
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
                disabled={!noteInput.trim()}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 