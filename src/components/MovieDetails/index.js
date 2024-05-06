import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
}

class MovieDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    popularMovies: [],
  }

  componentDidMount() {
    this.getMovieDet()
  }

  getMovieDet = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=be9adf218adca3b3e4b849f9afe285c3&language=en-US`
    const option = {
      method: 'GET',
    }
    const response = await fetch(url, option)
    if (response.ok) {
      const fetchedData = await response.json()

      this.setState({
        popularMovies: fetchedData,
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

  renderProductsListView = () => (
    <>
      <div className="detailsView">
        <h1 className="detHEad">movieDB</h1>
        <h1 className="detHEad">Popular</h1>
        <h1 className="detHEad">Top Rated</h1>
        <h1 className="detHEad">Upcoming</h1>
      </div>
    </>
  )

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
export default MovieDetails
