import React, { useEffect, useState } from 'react';
import { SearchM } from 'services/getMovies';
import Notiflix from 'notiflix';
import TitleGallery from 'components/titleGallery/TitleGallery';
import { useSearchParams } from 'react-router-dom';
import { Form,ButtonS,InputS } from './movies.styled';


const Movies = () => {
  const [value, setValue] = useState('');
  const [searchText, setSearchText] = useState('');
  const [title, setTitle] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();


  const query = searchParams.get('query') || "";


  useEffect(() => {
    if (!query) {
      return;
    }
    SearchM(query)
      .then(response => response.json())
      .then(data => {
        if (data.results.length === 0) {
          Notiflix.Notify.failure('Sorry,but nothing was found');
        }

        return setTitle(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [query]);

  const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
};


 

  const handleSearch = searchTextе => {
    if (searchText.trim() === searchTextе) {
      return;
    }
    setSearchText(searchTextе);
  };

  const handleChange = e => {
    setValue(e.currentTarget.value);

  };

  const reset = () => {
    setValue('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(value);
    updateQueryString(value)
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <ButtonS type="submit">
          <span>Search</span>
        </ButtonS>
        <InputS
          type="text"
          value={value}
          name="search"
          onChange={handleChange}
          placeholder="Search images and photos"
        />
      </Form>

      {title  && <TitleGallery data={title} />}
    </>
  );
};

export default Movies;
