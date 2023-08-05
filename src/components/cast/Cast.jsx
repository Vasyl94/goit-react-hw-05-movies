import React from 'react';
import { CastById } from 'services/getMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastFunc from 'components/castFunc/CastFunc';


const Cast = () => {
  const [cast, setCast] = useState([]);
  const { moveid } = useParams();

  useEffect(() => {
    CastById(moveid)
      .then(response => response.json())
      .then(data => setCast(data.cast));
  }, [moveid]);

  return ( <>
  {cast.length === 0 ? <p>Sorry but we don't have actors for unknown reasons</p> : <CastFunc cast={cast} />}
  </>
    
  )
 
};

export default Cast;
