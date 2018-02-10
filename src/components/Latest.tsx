import { h } from 'hyperapp'
import Song from './Song'
import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

export default ({ songs, play, getBandTracks }) => (
  <ul className="song-list">
    {songs.map(song => (
      <li class="song-list__item">
        <Song song={song} play={play} getBandTracks={getBandTracks} />
        <div className="song-list__date">
          {distanceInWordsToNow(new Date(song.date))} ago
        </div>
      </li>
    ))}
  </ul>
)
