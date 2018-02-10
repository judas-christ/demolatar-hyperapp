import { h } from 'hyperapp'
import Song from './Song'

export default (
  searchResult,
  setSearchQuery: Function,
  search: Function,
  play: Function,
  getBandTracks: Function
) => (
  <div>
    <form onsubmit={e => search() && e.preventDefault()}>
      <label>
        Search for artist name or song title
        <input type="search" oninput={e => setSearchQuery(e.target.value)} />
      </label>
      <button type="submit">Search</button>
    </form>
    {searchResult ? (
      <ul>
        {searchResult.map(song => (
          <li>
            <Song song={song} play={play} getBandTracks={getBandTracks} />
          </li>
        ))}
      </ul>
    ) : null}
  </div>
)
