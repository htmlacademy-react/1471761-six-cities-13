import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TOffer } from '../../types/offers';
import ReviewItem from '../reviews-item/review-item';
import { fetchComments } from '../../store/action';
import { MAX_COMMENT_COUNT } from '../../const';

type TReviewsProps = {
  offerId: TOffer['id'];
};

function ReviewList({ offerId }: TReviewsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments);

  const commentsToRender = [...comments]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_COMMENT_COUNT);

  useEffect(() => {
    dispatch(fetchComments(offerId));
  }, [offerId, dispatch]);

  return (

    <ul className="reviews__list">
      {commentsToRender.map((comment) => (
        <ReviewItem
          key={comment.id}
          commentItem={comment}
        />
      ))}
    </ul>

  );
}

export default ReviewList;
