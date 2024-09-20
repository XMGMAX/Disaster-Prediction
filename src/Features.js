import './Features.css';

function Features() {
    return (
        <div className="featuresContainer">
            {/* Redirect to new page when clicking on these feature cards */}
            <div className="feature feature1" onClick={() => window.location.href = '/earthquake'}>
                <h3 className="featureName">Earthquake Prediction</h3>
            </div>
            <div className="feature feature2" onClick={() => window.location.href = '/forestfire'}>
                <h3 className="featureName">Forest Fire Prediction</h3>
            </div>
            <div className="feature feature3" onClick={() => window.location.href = '/tsunami'}>
                <h3 className="featureName">Tsunami Prediction</h3>
            </div>
            <div className="feature feature4" onClick={() => window.location.href = '/flood'}>
                <h3 className="featureName">Flood Prediction</h3>
            </div>
        </div>
    );
}

export default Features;