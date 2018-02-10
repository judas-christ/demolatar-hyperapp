import {h}from 'hyperapp'
import Song from './Song'

export default ({songs}) => (
  <ul className="song-list">
    {songs.map(song => <li class="song-list__item"><Song song={song}/></li>)}
  </ul>
)