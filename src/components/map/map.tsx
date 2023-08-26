import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Icon, Marker, layerGroup } from 'leaflet';
import { TCity, TFullOffer, TOffer } from '../../types/offers';
import classNames from 'classnames';
//import { HousingTypes } from '../../const';

type MapProps = {
  city: TCity;
  offers?: TOffer[] | TFullOffer[];
  selectedOffer?: string | null;
  currentOffer?: TFullOffer;
  cardType: 'cities' | 'offer';
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


function Map({ city, offers, cardType, selectedOffer, currentOffer }: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);


  useEffect(() => {
    if (map) {
      const { latitude, longitude, zoom } = city.location;
      map.setView([latitude, longitude], zoom);

      const markerLayer = layerGroup().addTo(map);

      offers?.forEach((offer) => {
        const { location, title, type, id, price, previewImage } = offer;
        //const typeOfAllocation = HousingTypes[type];

        const marker = new Marker([
          location.latitude,
          location.longitude,
        ], {
          title: title
        });

        marker
          .setIcon(
            selectedOffer === id || currentOffer?.id === id
              ? activeCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer)
          .bindPopup(`<img src=${previewImage}> <h3>${title}</h3> <h1>&euro; ${price}</h1> <p>${type}</p>`);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer, city, currentOffer]);

  return (
    <section
      className={classNames(
        `${cardType}__map`,
        'map'
      )}
      style={{height: '100%', minHeight: '600px' }}
      ref={mapRef}
    >

    </section>
  );
}

export default Map;
