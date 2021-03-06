import React, {useState, useEffect} from 'react';
import MapGL, {Source, Layer, Popup} from 'react-map-gl';
import {heatmapLayer} from './map-style';
import {pointsLayer} from './map-style';

import { PopupInfoContainer, HeatPointsMapContainer } from './heat-points-map-styles';
import { CATEGORIES } from '../../utils/constants';

import moment from 'moment';


const HeatPointsMap = ({className, data}) => {
  const {REACT_APP_MAPBOX_TOKEN} = process.env;
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 2,
    bearing: 0,
    pitch: 0
  });
  const [popupInfo, setPopupInfo] = useState(null);
  const [alerts, setAlerts] = useState(data);

  useEffect(() => {
    setAlerts(data);
  }, [data])

  const _renderPopup = () => {
    if (!popupInfo) return;
    return (
      <Popup
        tipSize={5}
        anchor="top"
        longitude={popupInfo.lngLat[0]}
        latitude={popupInfo.lngLat[1]}
        closeOnClick={false}
        onClose={() => setPopupInfo(null)}
      >
        <PopupInfoContainer>
          <span className="category">{CATEGORIES[popupInfo.category] || popupInfo.category}</span>
          <p className="msg">{popupInfo.message}</p>
          <div className="bottom">
            <span className="time">{moment(popupInfo.created_at).fromNow()}</span>
            <span className="source">{popupInfo.source}</span>
          </div>
        </PopupInfoContainer>
      </Popup>
    );
  };

  const handleOnClickMap = (event) => {
    const feature = event.features.find(f => f.layer.id === 'alerts-point');
    if (!feature) return true;
    setPopupInfo({
      lngLat: event.lngLat,
      ...feature.properties
    });
  };

  return (
    <HeatPointsMapContainer {...{className}}>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={viewport => setViewport(viewport)}
        mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
        onClick={e => handleOnClickMap(e)}
      >
        {(alerts && alerts.features) && (
          <Source type="geojson" data={alerts}>
            <Layer {...heatmapLayer} />
            <Layer {...pointsLayer} />
          </Source>
        )}
        {_renderPopup()}
      </MapGL>
    </HeatPointsMapContainer>
  );
};

export default HeatPointsMap;