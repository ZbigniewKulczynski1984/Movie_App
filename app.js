//Klucz API (v3 auth) 3712af6cd6e5f73254bafa21019679fe

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3712af6cd6e5f73254bafa21019679fe&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=3712af6cd6e5f73254bafa21019679fe&query="'

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results)
}
