import Card from '../../card/card';
import { TOffer } from '../../types/offers';


type OffersListProps = {
  offers: TOffer[];
}


function OffersList({ offers }: OffersListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          option={'city'}
        />
      ))}
    </div>
  );
}

export default OffersList;
