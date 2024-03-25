import React from "react";
import SpeedInsights from "@vercel/speed-insights"

import './global.css';

import RoutesApp from "./Routes";

function App() {
  return (
    <div>      
      <RoutesApp />
      <SpeedInsights />
    </div>    
  );
}

export default App;
