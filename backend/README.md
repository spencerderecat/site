# SPENCER Backend

A Flask-based backend API for the SPENCER website.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the server:
```bash
python app.py
```

The server will start on `http://localhost:5000`

## API Endpoints

- `GET /` - API information
- `GET /api/music` - Music section data
- `GET /api/surf` - Surf section data  
- `GET /api/sport` - Sport section data
- `GET /api/life` - Life section data
- `GET /health` - Health check

## Example Response

```json
{
  "section": "music",
  "status": "work_in_progress",
  "message": "Something groovy is coming soon! 🎶",
  "icon": "🎸",
  "description": "Music section - work in progress"
}
``` 