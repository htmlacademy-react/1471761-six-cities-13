import { TComment } from '../../types/comments';
import { getRating } from '../../utils/utils';

type ReviewItemProps = {
  comment: TComment;
};

function ReviewItem({comment}: ReviewItemProps): JSX.Element {

  const commentDate = new Date(comment.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <li className="reviews__item" key={comment.id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={comment.user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getRating(comment.rating) }}>
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={comment.date.split('T')[0]}>{commentDate}
        </time>

      </div>
    </li>
  );
}

export default ReviewItem;
