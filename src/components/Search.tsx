import { h } from 'hyperapp'
import Song from './Song'
import SearchIcon from './SearchIcon'
import Loading from './Loading'

export default (
  isSearching,
  searchResult,
  setSearchQuery: Function,
  search: Function,
  play: Function,
  getBandTracks: Function
) => (
  <div>
    <form
      class="search-form"
      onsubmit={e => {
        e.preventDefault()
        e.stopPropagation()
        search()
      }}
    >
      <button type="submit" class="search-form__button" tabIndex="-1">
        <SearchIcon />
      </button>
      <input
        class="search-form__input"
        aria-label="Sök efter artister och låtar"
        oninput={e => setSearchQuery(e.target.value)}
        oncreate={el => el.focus()}
      />
      <button
        type="reset"
        class="search-form__clear-button"
        onclick={function() {
          this.previousSibling.focus()
        }}
      >
        <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" />
        </svg>
      </button>
    </form>
    {isSearching ? (
      <Loading />
    ) : searchResult && searchResult.length ? (
      <ul class="song-list">
        {searchResult.map(song => (
          <li class="song-list__item">
            <Song song={song} play={play} getBandTracks={getBandTracks} />
          </li>
        ))}
      </ul>
    ) : searchResult ? (
      <p>Hittade tyvärr ingen musik åt dig. Prova söka på något annat.</p>
    ) : null}
  </div>
)
