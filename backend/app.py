from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def home():
    return jsonify({
        "message": "SPENCER Backend API",
        "status": "running",
        "endpoints": {
            "music": "/api/music",
            "surf": "/api/surf", 
            "sport": "/api/sport",
            "life": "/api/life"
        }
    })

@app.route('/api/music')
def music():
    return jsonify({
        "section": "music",
        "status": "work_in_progress",
        "message": "Something groovy is coming soon! 🎶",
        "icon": "🎸",
        "description": "Music section - work in progress"
    })

@app.route('/api/surf')
def surf():
    return jsonify({
        "section": "surf",
        "status": "work_in_progress", 
        "message": "Catching some waves soon! 🏄‍♂️",
        "icon": "🏄‍♂️",
        "description": "Surf section - work in progress"
    })

@app.route('/api/sport')
def sport():
    return jsonify({
        "section": "sport",
        "status": "work_in_progress",
        "message": "Game on coming soon! 🏆",
        "icon": "⚽",
        "description": "Sport section - work in progress"
    })

@app.route('/api/life')
def life():
    return jsonify({
        "section": "life",
        "status": "work_in_progress",
        "message": "Living the dream coming soon! 🌟",
        "icon": "✨",
        "description": "Life section - work in progress"
    })

@app.route('/health')
def health():
    return jsonify({
        "status": "healthy",
        "message": "SPENCER backend is running smoothly"
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000) 