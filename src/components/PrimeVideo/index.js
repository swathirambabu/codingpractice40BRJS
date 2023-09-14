// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const actionMovies = 'ACTION'
const comedyMovies = 'COMEDY'
const horrorMovies = 'HORROR'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    each => each.categoryId === actionMovies,
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === comedyMovies,
  )
  const horrorMoviesList = moviesList.filter(
    each => each.categoryId === horrorMovies,
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="image"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
        <h1 className="heading">Horror Movies</h1>
        <MoviesSlider moviesList={horrorMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
