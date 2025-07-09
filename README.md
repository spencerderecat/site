# SPENCER

A groovy pastel-themed website with a colorful tie-dye background featuring "SPENCER" in massive bubble letters and four interactive sections.

## Project Structure

```
spencerd/
├── frontend/          # Next.js frontend application
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   └── package.json  # Frontend dependencies
├── backend/          # Flask backend API
│   ├── app.py        # Main Flask application
│   ├── requirements.txt # Python dependencies
│   └── README.md     # Backend documentation
└── README.md         # This file
```

## Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Visit: http://localhost:3000

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
API: http://localhost:5000

## Features

- **🎨 Groovy Pastel Theme** - Dynamic tie-dye background with animated gradients
- **💫 Bubble Letter Typography** - "SPENCER" in massive colorful bubble letters
- **🎵 Music Section** - Work in progress
- **🌊 Surf Section** - Work in progress  
- **⚽ Sport Section** - Work in progress
- **✨ Life Section** - Work in progress
- **🚀 Backend API** - Flask endpoints for each section

## Tech Stack

**Frontend:**
- Next.js 15.3.5
- React 19
- TypeScript 5
- Tailwind CSS 4
- Geist Fonts

**Backend:**
- Flask 3.0.0
- Flask-CORS
- Python 3.x
