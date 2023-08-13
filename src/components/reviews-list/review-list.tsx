import ReviewItem from '../reviews-item/review-item';
import { TComment } from '../../types/comments';

type TReviewsProps = {
  comments: TComment[];
};

function ReviewList({ comments }: TReviewsProps): JSX.Element {

  return (

    <ul className="reviews__list">
      {comments.map((comment) => (
        <ReviewItem
          key={comment.id}
          commentItem={comment}
        />
      ))}
    </ul>

  );
}

export default ReviewList;
