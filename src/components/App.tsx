import { h } from 'hyperapp'
import Nav from './Nav'
import Home from './Home'
import { Switch, Route } from '@hyperapp/router'
import Search from './Search'
import AudioPlayer from './AudioPlayer'
import About from './About'

export default (state, actions) => (
  <div class="app">
    <Nav path={state.location.pathname} />
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
      <Route path="/about" render={About} />
      <AudioPlayer
        song={state.nowPlaying}
        isPlaying={state.isPlaying}
        play={actions.play}
        pause={actions.pause}
      />
    </main>
  </div>
)
