import React, {useState, useEffect} from 'react';
import Chart from "react-apexcharts";
import {CountryChartContainer} from './country-chart-styles';

const CountryChart = ({data}) => {
  const [alertsByCountry, setAlertsByCountry] = useState({});

  useEffect(() => {
    const newData = getAlertsByCountries(data.features);
    setAlertsByCountry(newData);
  }, [data.features])


  const getAlertsByCountries = (items) => {
    const alerts = items.reduce((result, point) => {
      const pointIndex = point.properties.country.toLowerCase();
      const indexFound = Object.keys(result).find(t => t === pointIndex);
      if (!!indexFound) {
        result[pointIndex] = result[pointIndex] + 1;
        return result;
      } else {
        result[pointIndex] = 1;
        return result;
      }
    }, {});
    return alerts;
  };

  return (
    <CountryChartContainer>
      <Chart
        options={{
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: alertsByCountry ? Object.keys(alertsByCountry) : []
          }  
        }}
        series={[
          {
            name: "Alerts",
            data: alertsByCountry ? Object.values(alertsByCountry) : []
          }
        ]}
        type="bar"
        width="500"
      />
    </CountryChartContainer>
  );
};

export default CountryChart;