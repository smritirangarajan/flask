from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # Enables CORS for all routes

quotes = [
    "Believe in yourself.",
    "Stay hungry, stay foolish.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Simplicity is the soul of efficiency.",
    "Experience is the name everyone gives to their mistakes."
]

@app.route('/api/quote', methods=['GET'])
def get_quote():
    return jsonify({'quote': random.choice(quotes)})

if __name__ == '__main__':
    app.run(debug=True)