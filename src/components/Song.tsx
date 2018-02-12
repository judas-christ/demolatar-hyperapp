import { h } from 'hyperapp'
// import makeId from '../lib/makeId'

export default ({ song, play, getBandTracks }) => (
  <article class="song">
    <button class="song__play-button" onclick={() => play(song)}>
      <div class="song__artist">{song.band}</div>
      <div class="song__title">{song.track}</div>
    </button>
  </article>
)
