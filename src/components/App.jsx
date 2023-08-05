import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { lazy } from 'react';
// import { Suspense } from 'react';
// import { lazy } from 'react';

// import HomePage from 'pages/HomePage';
// import Movies from './pages/Movies';
// import MovieDetails from './pages/MovieDetails';
// import Reviews from './reviews/Reviews';
// import Cast from './cast/Cast';

const HomePage = lazy(() => import('pages/HomePage'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Reviews = lazy(() => import('./reviews/Reviews'));
const Cast = lazy(() => import('./cast/Cast'));
const NotFound = lazy(() => import('pages/NotFound'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moveid" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
