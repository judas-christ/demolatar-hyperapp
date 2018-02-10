import { h } from 'hyperapp'
import Nav from './Nav'
import Home from './Home'
import { Switch, Route, location } from '@hyperapp/router'
import Search from './Search'
import AudioPlayer from './AudioPlayer'

export default (state, actions) => (
  <div class="app">
    <Nav />
    <main class="main-content">
      <Route
        path="/"
        render={() => Home(state.latest, actions.play, actions.getBandTracks)}
      />
      <Route
        path="/search"
        render={() =>
          Search(
            state.searchResult,
            actions.setSearchQuery,
            actions.search,
            actions.play,
            actions.getBandTracks
          )
        }
      />
      <AudioPlayer song={state.nowPlaying} />
    </main>
  </div>
)
