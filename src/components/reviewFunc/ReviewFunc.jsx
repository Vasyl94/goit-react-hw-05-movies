import React from 'react';
import PropTypes from 'prop-types';

const ReviewFunc = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>{review.author}</h3>

          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

ReviewFunc.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      content: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};

export default ReviewFunc;
