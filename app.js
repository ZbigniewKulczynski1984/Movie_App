//Klucz API (v3 auth) 3712af6cd6e5f73254bafa21019679fe

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3712af6cd6e5f73254bafa21019679fe&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3712af6cd6e5f73254bafa21019679fe&query="'

const main = docement.getElementById('main')
const form = document.getElementById('form')
const search = document.getAnimations('search')

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overwwiev} = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        <div class="movie">
            <img src="https://pixabay.com/get/gf7ac7d7d547ea55ae05ed83f8663bcee8d7db477f2fc7d7772cff7ec3eff84c94261ec3a053316353602c1591e4fce407218cbd541827d4c1a704383bdafae689d20322294198aced68d8c83ced90ee2_1920.jpg" alt="">
            <div class="movie-info">
                <h3>Movie Title</h3>
                <span class="green">9.8</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo perferendis ab dignissimos officiis, quasi exercitationem.</p>
            </div>
        </div>`
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
}
)
