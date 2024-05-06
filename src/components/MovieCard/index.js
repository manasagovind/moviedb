import {Link} from 'react-router-dom'

import './index.css'

const MovieCard = props => {
  const {each} = props
  const {id, posterPath, releaseDate, title, voteAverage, voteCount} = each
  const imageurl = `https://image.tmdb.org/t/p/w500${posterPath}`
  const linki = `/movie/${id}`
  return (
    <li className="movieCardList">
      <img src={imageurl} alt={title} className="posterImg" />
      <h1 className="posterTitle">{title}</h1>
      <div className="moveidet">
        <p className="detQue">Release Date: </p>
        <p className="detAns">{releaseDate}</p>
      </div>
      <div className="moveidet">
        <p className="detQue">Vote Average: </p>
        <p className="detAns">{voteAverage}</p>
      </div>
      <div className="moveidet">
        <p className="detQue">Vote Count: </p>
        <p className="detAns">{voteCount}</p>
      </div>
      <Link to={linki}>
        <button type="button" className="viewDet">
          View Details
        </button>
      </Link>
    </li>
  )
}
export default MovieCard
