import Card from '../../card/card';
import { TOffer } from '../../types/offers';


type OffersListProps = {
  offers: TOffer[];
  onCardMouseEnter: (id: string) => void;
  onCardMouseLeave: () => void;
}


function OffersList({ offers, onCardMouseEnter, onCardMouseLeave }: OffersListProps) {

  return (
    offers.map((offer) => (
      <Card
        key={offer.id}
        item={offer}
        className={'cities'}
        onMouseEnter={onCardMouseEnter}
        onMouseLeave={onCardMouseLeave}
      />
    )
    ));
}

export default OffersList;
