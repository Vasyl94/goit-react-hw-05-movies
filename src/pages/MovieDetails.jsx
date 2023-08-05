import { useLocation, useParams } from 'react-router-dom';
import { SearchById } from 'services/getMovies';
import { useEffect,  useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  CastWord,
  ReviewWord,
  UlAdd,
  AddInd,
  Popular,
  Overw,
  UnderOver,
  Container,
  Status,
  OriginName,
  Img,
  Div,
} from './movieDetails.styled';

const MovieDetails = () => {
  const [info, setInfo] = useState('');
  const { moveid } = useParams();
  const location = useLocation();
  const cameBack = location.state?.from ?? '/movies';
  // const backLocationRef = useRef(cameBack)

  useEffect(() => {
    SearchById(moveid)
      .then(response => response.json())
      .then(data => setInfo(data));
  }, [moveid]);

  const { popularity, original_title, overview, status } = info;

  return (
    <Div>
      <div>
        <Link to={cameBack}>Go Back</Link>
      </div>

      <Img
        src={
          info.poster_path
            ? `https://www.themoviedb.org/t/p/original/${info.poster_path}`
            : 'https://i.ibb.co/FB037FW/image.jpg'
        }
        alt={info.tagline}
        width="1000"
        height="1000"
      />
      <OriginName>{original_title}</OriginName>
      <Popular>Popularity:{popularity}</Popular>
      <Container>
        <Overw>Overview</Overw>
        {overview === '' ? (
          <UnderOver>sorry,but overview empty </UnderOver>
        ) : (
          <UnderOver>{overview}</UnderOver>
        )}
      </Container>

      <Status>
        <span>Status</span>:{status}
      </Status>

      <AddInd>Adittional information</AddInd>

      <UlAdd>
        <li>
          <Link to="cast" state={{ from: cameBack }}>
            <CastWord>Cast</CastWord>
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: cameBack }}>
            <ReviewWord>Reviews</ReviewWord>
          </Link>
        </li>
      </UlAdd>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Div>
  );
};

export default MovieDetails;
