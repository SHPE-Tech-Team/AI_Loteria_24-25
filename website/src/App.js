import React,{ useState, useEffect }from "react";
import ObjectDetection from './camera';
import RealtimePrediction from './data_predi';

function App() {
  return (
    <div>
      <h1>AI LOTERIA - LA FLAME🔥</h1>
      <h1>Alonso is a better programmer than Kevin</h1>

      <ObjectDetection />
      <RealtimePrediction /> 
    </div>
  );
}

export default App;