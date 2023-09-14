// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 4,
  }
  const {MoviesList} = props
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {MoviesList.map(each => (
          <MovieItem key={each.id} movieDetails={each} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
