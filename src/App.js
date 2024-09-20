import './App.css';
import Front from './Front';
import EarthquakePrediction from './EarthquakePrediction';
import ForestFirePrediction from './ForestFirePrediction';
import TsunamiPrediction from './TsunamiPrediction';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Front />} />
          <Route path="/earthquake" element={<EarthquakePrediction />} />
          <Route path="/forestfire" element={<ForestFirePrediction />} />
          <Route path="/tsunami" element={<TsunamiPrediction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
