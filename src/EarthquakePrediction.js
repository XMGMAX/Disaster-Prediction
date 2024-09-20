import './EarthquakePrediction.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [51.505, -0.09];

function EarthquakePrediction() {
    return (
        <div>
            <div className="headingContainer">
                <h2>Earthquake Prediction</h2>
            </div>
            <div className="manualCoordinatesContainer">
                <h3 className="manualCoordinatesHeading">Enter coordinates manually</h3>
                <div className="manualCoordinatesForm">
                    <label htmlFor="latitude">Latitude:</label>
                    <input type="text" id="latitude" name="latitude" />

                    <label htmlFor="longitude">Longitude:</label>
                    <input type="text" id="longitude" name="longitude" />

                    <label htmlFor="depth">Depth:</label>
                    <input type="text" id="depth" name="depth" />

                    <label htmlFor='date'>Date:</label>
                    <input type='date' id='date' name='date' />

                    <button onClick={() => { fetch() }}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default EarthquakePrediction;