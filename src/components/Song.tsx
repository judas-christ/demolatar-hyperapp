import { h } from 'hyperapp'
import makeId from '../lib/makeId'

export default ({ song, play, getBandTracks }) => (
  <article class="song">
    <div>
      <a
        class="song__artist"
        href="/search"
        onclick={e => getBandTracks(song.band) && e.preventDefault()}
      >
        {song.band}
      </a>
      <label for={makeId(`${song.band}-${song.track}`)} class="song__title">
        {song.track}
      </label>
    </div>
    <button
      id={makeId(`${song.band}-${song.track}`)}
      class="song__play-button"
      onclick={() => play(song)}
    >
      ►
    </button>
  </article>
)
