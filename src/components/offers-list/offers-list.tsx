import Card from '../../card/card';
import { TOffer } from '../../types/offers';
//import classNames from 'classnames';

type OffersListProps = {
  offers: TOffer[];
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
 // cardType: string;
}


function OffersList({ offers, onMouseEnter, onMouseLeave}: OffersListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers?.map((item) => (
        <Card
          key={item.id}
          offer={item}
          cardType={'cities'}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </div>
  );
}

export default OffersList;
