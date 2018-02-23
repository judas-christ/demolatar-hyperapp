import { h } from 'hyperapp'
import Song from './Song'
import SearchIcon from './SearchIcon'

export default (
  searchResult,
  setSearchQuery: Function,
  search: Function,
  play: Function,
  getBandTracks: Function
) => (
  <div>
    <form class="search-form" onsubmit={e => search() && e.preventDefault()}>
      <button type="submit" class="search-form__button" tabIndex="-1">
        <SearchIcon />
      </button>
      <input
        type="search"
        class="search-form__input"
        oninput={e => setSearchQuery(e.target.value)}
      />
    </form>
    {searchResult ? (
      <ul class="song-list">
        {searchResult.map(song => (
          <li class="song-list__item">
            <Song song={song} play={play} getBandTracks={getBandTracks} />
          </li>
        ))}
      </ul>
    ) : null}
  </div>
)
