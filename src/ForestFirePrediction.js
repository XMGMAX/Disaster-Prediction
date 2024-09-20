import './ForestFirePrediction.css';

function ForestFirePrediction() {
    return (
        <div>
            <div className="headingContainer">
                <h2>Forest Fire Prediction</h2>
            </div>
            <div className="manualCoordinatesContainer">
                <h3 className="manualCoordinatesHeading">Enter details:</h3>
                <div className="manualCoordinatesForm">
                    <label htmlFor='date'>Date:</label>
                    <input type='date' id='date' name='date' />

                    <label htmlFor="temperature">Temperature:</label>
                    <input type="text" id="temperature" name="temperature" />

                    <label htmlFor="humidity">Humidity:</label>
                    <input type="text" id="humidity" name="humidity" />

                    <label htmlFor="wind">Wind:</label>
                    <input type="text" id="wind" name="wind" />

                    <label htmlFor="rain">Rain:</label>
                    <input type="text" id="rain" name="rain" />

                    <button onClick={() => {console.log('working')}}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default ForestFirePrediction;