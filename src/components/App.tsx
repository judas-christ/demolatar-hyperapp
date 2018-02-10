import { h } from 'hyperapp'
import Nav from './Nav'
import Home from './Home'
import { Link, Route, location } from '@hyperapp/router'
import Search from './Search'

export default (state, actions) => (
  <div class="app">
    <Nav />
    <main class="main-content">
      <Route path="/" render={Home} />
      <Route path="/search" render={Search} />
    </main>
  </div>
)
