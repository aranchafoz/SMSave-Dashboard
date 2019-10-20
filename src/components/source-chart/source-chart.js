import React, {useState, useEffect} from 'react';
import Chart from "react-apexcharts";
import { SourceChartContainer } from './source-chart-styles';

const SourceChart = ({data}) => {
  const [alertsBySource, setAlertsBySource] = useState({});

  useEffect(() => {
    if (data.features) {
      const newData = getAlertsBySource(data.features);
      setAlertsBySource(newData);
    }
  }, [data.features])


  const getAlertsBySource = (items) => {
    const alerts = items.reduce((result, point) => {
      const pointIndex = point.properties.source;
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
    <SourceChartContainer>
      <Chart
        options={{
          labels: Object.keys(alertsBySource),
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }} 
        series={Object.values(alertsBySource)} 
        type="pie" 
        width="380"
      />
    </SourceChartContainer>
  );
};

export default SourceChart;