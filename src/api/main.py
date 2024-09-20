import flask
from flask import request, jsonify
import joblib
import pandas as pd
from pathlib import Path

app = flask.Flask(__name__)

earthquake_model = joblib.load(Path(__file__).parent / 'models' / 'earthquake_model.joblib')
flood_model = joblib.load(Path(__file__).parent / 'models' / 'flood_model.joblib')
forestfire_model = joblib.load(Path(__file__).parent / 'models' / 'forestfiremodel.pkl')
tsunami_model = joblib.load(Path(__file__).parent / 'models' / 'tsunami_model.joblib')

# Earthquake Prediction
@app.route('/earthquake', methods=['POST'])
def earthquake():
    data = request.get_json()
    prediction = earthquake_model.predict(pd.DataFrame(data))

    return jsonify({'prediction': prediction[0]})

# Flood Prediction
@app.route('/flood', methods=['POST'])
def flood():
    data = request.get_json()
    prediction = flood_model.predict(pd.DataFrame(data))

    return jsonify({'prediction': prediction[0]})

# Fire Prediction
@app.route('/forestfire', methods=['POST'])
def fire():
    data = request.get_json()
    prediction = forestfire_model.predict(pd.DataFrame(data))

    return jsonify({'prediction': prediction[0]})

@app.route('/tsunami', methods=['POST'])
def tsunami():
    data = request.get_json()
    prediction = tsunami_model.predict(pd.DataFrame(data))

    return jsonify({'prediction': prediction[0]})

# Main
if __name__ == '__main__':
    app.run(debug=True)


    