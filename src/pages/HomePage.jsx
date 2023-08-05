import { useEffect, useState } from 'react';
import { getMovies } from 'services/getMovies';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [film, setFilm] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getMovies()
      .then(response => response.json())
      .then(data => setFilm(data.results))
      .catch(error => console.log(error));
  }, [film]);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {film.map(movie => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <p>{movie.title}</p>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
