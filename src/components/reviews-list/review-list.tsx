import { TComment } from '../../types/comments';
import ReviewItem from '../reviews-item/review-item';

type ReviewListProps = {
  comments: TComment[];
};

function ReviewList({ comments }: ReviewListProps): JSX.Element {

  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <ReviewItem key={comment.id} commentItem={comment} />
      ))}
    </ul>
  );
}


export default ReviewList;
