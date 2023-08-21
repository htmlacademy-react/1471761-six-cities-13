import { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import { MAX_CHARACTERS_COUNT, MIN_CHARACTERS_COUNT, TITLE_RATING } from '../../const';
import { useAppDispatch } from '../../hooks';
import { useParams } from 'react-router';
import { fetchCommentsOfferAction, postCommentOfferAction } from '../../store/api-action';

function ReviewForm() {
  const { offerId } = useParams();
  const [formData, setFormData] = useState({ rating: '0', comment: '' });

  function onHandlerFormChange(evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  const buttonDisable =
    formData.comment.length < MIN_CHARACTERS_COUNT
    || !+formData.rating;

  const dispatch = useAppDispatch();


  //const [comment, setComment] = useState('');
  //const [rating, setRaiting] = useState('');

  //const isValid =
  // comment.length >= MIN_CHARACTERS_COUNT &&
  // comment.length <= MAX_CHARACTERS_COUNT &&
  //rating !== '';

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (offerId) {
      dispatch(postCommentOfferAction({
        comment: formData.comment,
        rating: +formData.rating,
        offerId: offerId
      }));
      setFormData({ ...formData, comment: '', rating: '0' });
      dispatch(fetchCommentsOfferAction(offerId));
    }
  };

  //function handleTextareaChange(evt: ChangeEvent<HTMLTextAreaElement>) {
  //setComment(evt.target.value);
  //}

  //function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
  // setRaiting(evt.target.value);
  //}

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={submitHandler}
    >
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {TITLE_RATING.map((title, i) => {
          const index = TITLE_RATING.length - i;

          return (
            <Fragment key={title}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={index}
                id={`${index}-stars`}
                type="radio"
                checked={+formData.rating === index}
                onChange={onHandlerFormChange}
              />
              <label
                htmlFor={`${index}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={onHandlerFormChange}
        maxLength={MAX_CHARACTERS_COUNT}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{''}
          <span className="reviews__star">rating</span> and describe your stay with
          at least {' '}
          <b className="reviews__text-amount">
            {MIN_CHARACTERS_COUNT} characters
          </b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={buttonDisable}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
