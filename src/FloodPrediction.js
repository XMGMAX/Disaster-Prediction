import './FloodPrediction.css';

function FloodPrediction() {
    return (
        <div>
            <div className="headingContainer">
                <h2>Earthquake Prediction</h2>
            </div>
            <div className="manualCoordinatesContainer">
                <h3 className="manualCoordinatesHeading">Enter coordinates manually</h3>
                <div className="manualCoordinatesForm">
                    <label htmlFor='rainfall'>Rainfall:</label>
                    <input type='text' id='rainfall' name='rainfall' />

                    <button onClick={() => { console.log('working') }}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default FloodPrediction;