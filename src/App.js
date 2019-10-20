import React from 'react';
import './App.css';
import HeatPointsMap from './components/heat-points-map/heat-points-map';
import Topbar from './components/topbar/topbar';
import CountryChart from './components/country-chart/country-chart';
import SourceChart from './components/source-chart/source-chart';

import data from './data/points.json';

function App() {
  return (
    <div className="App">
      <Topbar id="topbar"/>
      <div id="charts-body">
        <HeatPointsMap 
          className="alerts-heatmap" 
          {...{data}} />

        <div className="bottom-charts">
          <CountryChart {...{data}} />
          <SourceChart {...{data}} />
        </div>
      </div>
    </div>
  );
}

export default App;
