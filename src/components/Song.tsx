import {h} from 'hyperapp'

export default ({song}) => <article class="song"><h1 class="song__artist">{song.band}</h1><p class="song__title">{song.track}</p></article>