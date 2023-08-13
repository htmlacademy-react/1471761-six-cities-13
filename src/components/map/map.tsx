/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Icon, Marker, layerGroup } from 'leaflet';
import { TCity, TFullOffer, TOffer } from '../../types/offers';
import classNames from 'classnames';

type MapProps = {
  city: TCity;
  offers?: TOffer[] | TFullOffer[];
  selectedOffer: string | null;
  cardType: 'cities' | 'offer';
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


function Map({ city, offers, cardType, selectedOffer }: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);


  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers?.forEach((offer) => {

        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer
              ? currentCustomIcon
              : defaultCustomIcon
          ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      className={classNames(
        `${cardType}__map`,
        'map'
      )}
      style={{ height: '500px' }}
      ref={mapRef}
    >

    </section>
  );
}

export default Map;
