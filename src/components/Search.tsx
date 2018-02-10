import { h } from 'hyperapp'

export default (state, actions) => (
  <form>
    <label>
      Search for artist name or song title
      <input type="search" />
    </label>
    <button type="submit">Search</button>
  </form>
)
