import {Route, Switch} from 'react-router-dom'

import PopularMovies from './components/PopularMovies'
import Toprated from './components/Toprated'
import Upcoming from './components/Upcoming'
import MovieDetails from './components/MovieDetails'
import SearchedMovies from './components/SearchedMovies'

import './App.css'

// write your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={PopularMovies} />
    <Route exact path="/top-rated" component={Toprated} />
    <Route exact path="/upcoming" component={Upcoming} />
    <Route exact path="/movie/:id" component={MovieDetails} />
    <Route exact path="/search/:movieName" component={SearchedMovies} />
  </Switch>
)
export default App
