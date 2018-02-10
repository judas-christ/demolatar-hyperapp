import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export default _ => (
  <nav class="main-nav">
    <Link to="/">Home</Link>
    <Link to="/search">Search</Link>
  </nav>
)
