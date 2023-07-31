import React, { useRef, useEffect } from 'react';
//import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Icon, Marker, layerGroup } from 'leaflet';
//import { TCity } from '../../types/offers';
import { TOffer } from '../../types/offers';

type MapProps = {
  offers: TOffer[] | undefined;
  selectedCard: TOffer | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


function Map({ offers, selectedCard }): MapProps {
  const { city } = offers[0];
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);


  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedCard !== undefined && offer.id === selectedCard.id
              ? currentCustomIcon
              : defaultCustomIcon
          ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedCard]);

  return (
    <section className="cities__map map" style={{ height: '500px' }} ref={mapRef}></section>
  );
}

export default Map;
