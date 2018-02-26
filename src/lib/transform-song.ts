import * as parse from 'date-fns/parse'

const transformSong = (song: IDemoTrack) =>
  ({
    id: song.id,
    date: parse(song.date),
    band: song.band,
    track: song.track,
    tracklink: song.tracklink
  } as ITrack)

const transformSongs = (songs: IDemoTrack[]) => songs.map(transformSong)

interface IDemoTrack {
  id: string
  date: string
  band: string
  track: string
  tracklink: string
}

interface ITrack {
  id: string
  date: Date
  band: string
  track: string
  tracklink: string
}

export { transformSongs, ITrack }

// var example = {
//   "id":"2049",
//   "date":"2008-09-24 13:54:41",
//   "band":"Tony.E",
//   "track":"In the ghetto",
//   "tracklink":"http://xn--demoltar-e0a.se/demo/Tony.E - In the ghetto.mp3",
//   "genre":"Country",
//   "plays":"64",
//   "rating":0,
//   "downloads":"2",
//   "web":""
// }
