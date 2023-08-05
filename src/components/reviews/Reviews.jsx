import { useParams } from 'react-router-dom';
import { ReviewsById } from 'services/getMovies';
import { useEffect, useState } from 'react';
import ReviewFunc from 'components/reviewFunc/ReviewFunc';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moveid } = useParams();

  useEffect(() => {
    ReviewsById(moveid)
      .then(response => response.json())
      .then(data => setReviews(data.results));
  }, [moveid]);

  return (
    <>
     {reviews.length === 0 ? <p>We don't have ant reviews for this movie.</p> : <ReviewFunc reviews={reviews} />}
    </>
  );
};

export default Reviews;
