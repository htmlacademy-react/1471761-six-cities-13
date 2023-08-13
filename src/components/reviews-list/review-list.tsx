import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
//import { TComment } from '../../types/comments';
import {  TOffer } from '../../types/offers';
import ReviewItem from '../reviews-item/review-item';
import { fetchComments } from '../../store/action';
//import ReviewForm from '../review-form/review-form';
//import { MAX_COMMENT_COUNT } from '../../const';

type TReviewsProps = {
  offerId: TOffer['id'];
};

function ReviewList({ offerId }: TReviewsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments)

  /*const commentsToRender = [...comments]
.sort((a, b) => new Date(b.date).getTime() - new Date(a.date)getTimeMeasureUtils())
.slice(0, MAX_COMMENT_COUNT);  */

  useEffect(() => {
    dispatch(fetchComments(offerId));
  }, [offerId, dispatch]);

  return (

      <ul className="reviews__list">
        {comments.map((comment) => (
          <ReviewItem key={comment.id} commentItem={comment} />
        ))}
      </ul>

  );
        


export default ReviewList;
