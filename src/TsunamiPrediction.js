import './TsunamiPrediction.css';

function TsunamiPrediction() {
    return (
        <div>
            <div className="headingContainer">
                <h2>Tsunami Prediction</h2>
            </div>
            <div className="manualCoordinatesContainer">
                <h3 className="manualCoordinatesHeading">Enter details:</h3>
                <div className="manualCoordinatesForm">
                <label htmlFor="latitude">Latitude:</label>
                    <input type="text" id="latitude" name="latitude" />

                    <label htmlFor="longitude">Longitude:</label>
                    <input type="text" id="longitude" name="longitude" />

                    <label htmlFor="depth">Depth:</label>
                    <input type="text" id="depth" name="depth" />

                    <label htmlFor="magnitude">Magnitude:</label>
                    <input type="text" id="magnitude" name="magnitude" />

                    <label htmlFor='date'>Date:</label>
                    <input type='date' id='date' name='date' />

                    <button onClick={() => {console.log('working')}}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default TsunamiPrediction;