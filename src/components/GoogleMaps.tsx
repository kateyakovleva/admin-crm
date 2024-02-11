import React from 'react';
// @ts-ignore  разобраться с типизацией этого никчемного недоработанного модуля
import GoogleMapReact from 'google-map-react';
import '../styles/googleMaps.scss';


const GoogleMaps = () => {

  const defaultProps = {
    center: {
      lat: 48.511228,
      lng: 2.205568
    },
    zoom: 5
  };

  return (
    <div className='googleMaps'>
      <GoogleMapReact
        bootstrapURLKeys={ {
          key: 'AIzaSyAv-5fliXeZpqJvKwGbEpr5K6BS2rX0aMI',
          language: 'en'
        } }
        defaultCenter={ defaultProps.center }
        defaultZoom={ defaultProps.zoom }
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;