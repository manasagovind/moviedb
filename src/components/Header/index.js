import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {
    username: '',
  }

  changeusername = event => {
    this.setState({username: event.target.value})
  }

  clickSearch = () => {
    const {username} = this.state
    const {history} = this.props
    history.replace(`/search/${username}`)
  }

  render() {
    const {username} = this.state
    return (
      <div className="headerCont">
        <Link to="/">
          <h1 className="websitelog">movieDB</h1>
        </Link>
        <div className="inputCont">
          <input
            className="headerinput"
            type="text"
            value={username}
            onChange={this.changeusername}
            placeholder="Search"
          />

          <button
            type="button"
            className="searchDet"
            onClick={this.clickSearch}
          >
            Search
          </button>
        </div>
        <div className="linkCont">
          <Link to="/">
            <h1 className="websiteDet">Popular</h1>
          </Link>
          <Link to="/top-rated">
            <h1 className="websiteDet">Top Rated</h1>
          </Link>
          <Link to="/upcoming">
            <h1 className="websiteDet">Upcoming</h1>
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
