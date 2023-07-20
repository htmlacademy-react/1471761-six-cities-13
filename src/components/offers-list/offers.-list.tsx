import Card from '../../card/card';
import { Offer } from '../../types/offers';

type OffersListProps = {
  offers: Offer[];
}


function OffersList({ offers }: OffersListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          option={'cities'}
        />
      ))}
    </div>
  );
}

export default OffersList;
