import { useState, KeyboardEvent, memo } from 'react';
import classNames from 'classnames';
import { TSorting } from '../../types/sorting';
import { SortOffersType } from '../../const';

type SortingProps = {
  activeSorting: TSorting;
  onChange: (newSorting: TSorting) => void;

};

function Sorting({ activeSorting, onChange }: SortingProps) {
  const [isOpened, setIsOpened] = useState(false);

  const iconStyle = {
    transform: `translateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}`
  };

  const handleKeydown = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  };

  const handleTypeClick = () => {
    setIsOpened((prevIsOpen) => !prevIsOpen);
  };

  const handleSortItemClick = (type: TSorting) => {
    onChange(type);
    setIsOpened(false);
  };


  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onKeyDown={handleKeydown}
    >
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleTypeClick}
      >
        {activeSorting}
        <svg
          className="places__sorting-arrow"
          width={7}
          height={4}
          style={iconStyle}
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames({ 'places__options--opened': isOpened }, 'places__options', 'places__options--custom')}>
        {Object.values(SortOffersType).map((type) => (
          <li
            key={type}
            className={classNames({ 'places__option--active': type === activeSorting }, 'places__option')}
            tabIndex={0}
            onClick={() => handleSortItemClick(type as TSorting)}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

const SortingMemo = memo(Sorting);

export default SortingMemo;

