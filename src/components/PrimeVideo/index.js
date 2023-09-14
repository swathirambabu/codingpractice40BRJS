// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'
const horrorMovie = 'HORROR'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    each => each.categoryId === actionMovie,
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === comedyMovie,
  )
  const horrorMoviesList = moviesList.filter(
    each => each.categoryId === horrorMovie,
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
