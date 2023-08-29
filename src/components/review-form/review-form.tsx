import { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import { MAX_CHARACTERS_COUNT, MIN_CHARACTERS_COUNT, Status, RATING_TITLES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router';
import { postCommentOfferAction } from '../../store/api-action';
import { getCommentStatus } from '../../store/comments-data/comments-data.selectors';

function ReviewForm() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({ rating: '0', comment: '' });

  const postCommentStatus = useAppSelector(getCommentStatus);

  const handleFormChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const buttonDisabled =
    formData.comment.length < MIN_CHARACTERS_COUNT
    || formData.comment.length > MAX_CHARACTERS_COUNT
    || !+formData.rating
    || postCommentStatus === Status.Loading;

  const resetData = (evt: FormEvent<HTMLFormElement>) => {
    setFormData({ ...formData, comment: '', rating: '0' });
    evt.currentTarget.reset();
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (id) {
      dispatch(postCommentOfferAction({
        comment: formData.comment,
        rating: +formData.rating,
        offerId: id
      }));
      if (postCommentStatus === Status.Loading || !(postCommentStatus === Status.Error)) {
        setFormData({ ...formData, comment: '', rating: '0' });
      }
    }
    resetData(evt);
  };


  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING_TITLES.map((title, i) => {
          const index = RATING_TITLES.length - i;

          return (
            <Fragment key={title}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={index}
                id={`${index}-stars`}
                type="radio"
                checked={+formData.rating === index}
                onChange={handleFormChange}
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
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={handleFormChange}
        maxLength={MAX_CHARACTERS_COUNT}
        disabled={postCommentStatus === Status.Loading}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay with
          at least {' '}
          <b className="reviews__text-amount">
            {MIN_CHARACTERS_COUNT} characters
          </b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={buttonDisabled}
        >{postCommentStatus === Status.Loading ? 'In process...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
