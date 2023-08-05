import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';


const TitleGallery = ({ data }) => {

  
  const location = useLocation();
  
  return (
    <ul>
      {data
      .map((query) => (
        <Link key={query.id} to={`${query.id}`}    state={{ from: location }}>
          <p>{query.original_title}</p>
        </Link>
      ))}
    </ul>
  );
};


export default TitleGallery;

TitleGallery.propTypes = {
  query:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    original_title:  PropTypes.string,
  }))
}