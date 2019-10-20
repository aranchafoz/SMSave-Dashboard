import React, {useState, useEffect} from 'react';
import './App.css';
import HeatPointsMap from './components/heat-points-map/heat-points-map';
import Topbar from './components/topbar/topbar';
import CountryChart from './components/country-chart/country-chart';
import SourceChart from './components/source-chart/source-chart';

import {json as requestJson} from 'd3-request';

import dataJson from './data/points.json';

function App() {
  const {REACT_APP_API_URL} = process.env;

  const [data, setData] = useState(dataJson);

  useEffect(() => {
    const getData = async () => {
      requestJson(
        REACT_APP_API_URL,
        (error, response) => {
          if (!error) {
            setData(response);
          }
        }
      );
    };

    getData();
    const timer = setInterval(() => {
      getData();
    }, 8000);
    return () => clearInterval(timer);
  }, [REACT_APP_API_URL]);


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
