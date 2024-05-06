import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'

import MovieCard from '../MovieCard'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
}

class PopularMovies extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    popularMovies: [],
  }

  componentDidMount() {
    this.getMovieDet()
  }

  getMovieDet = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const url =
      'https://api.themoviedb.org/3/movie/popular?api_key=be9adf218adca3b3e4b849f9afe285c3&language=en-US&page=1'
    const option = {
      method: 'GET',
    }
    const response = await fetch(url, option)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.results.map(each => ({
        adult: each.adult,
        backdropPath: each.backdrop_path,
        genreIds: each.genre_ids,
        id: each.id,
        originalLanguage: each.original_language,
        originalTitle: each.original_title,
        overview: each.overview,
        popularity: each.popularity,
        posterPath: each.poster_path,
        releaseDate: each.release_date,
        title: each.title,
        video: each.video,
        voteAverage: each.vote_average,
        voteCount: each.vote_count,
      }))
      this.setState({
        popularMovies: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="all-products-error"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderProductsListView = () => {
    const {popularMovies} = this.state
    return (
      <>
        <ul className="popularUn">
          {popularMovies.map(each => (
            <MovieCard key={each.id} each={each} />
          ))}
        </ul>
      </>
    )
  }

  rendermovies = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="popularCont">
        <Header />
        {this.rendermovies()}
      </div>
    )
  }
}
export default PopularMovies
