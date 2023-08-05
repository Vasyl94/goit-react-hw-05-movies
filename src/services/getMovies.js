const API_KEY = "450e11a88d577b3ba488dedff52e79a6"
const BASE_URL = "https://api.themoviedb.org/3/"

export const getMovies  = () => {
    return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
}

export const SearchM = (searchText) => {
    return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${searchText}`)
}

export const SearchById = (moveid) => {
    return fetch(`${BASE_URL}movie/${moveid}?api_key=${API_KEY}&language=en-US`)
}

export const ReviewsById = (moveid) => {
    return fetch(`${BASE_URL}movie/${moveid}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
}

export const CastById = (moveid) => {
    return fetch(`${BASE_URL}movie/${moveid}/credits?api_key=${API_KEY}&language=en-US`)
}