import { h } from 'hyperapp'

export default ({ song }) =>
  song ? (
    <div class="player">
      <div class="player__artist">{song.band}</div>
      <div class="player__title">{song.track}</div>
      <audio src={song.tracklink} controls autoplay />
    </div>
  ) : null
