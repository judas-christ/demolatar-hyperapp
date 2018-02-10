import { location } from '@hyperapp/router'

interface ITrack {
  id: string
  date: string
  band: string
  track: string
  trackling: string
}

export default {
  location: location.actions,
  search: (query: string) => (state, actions) =>
    fetch(`/api/search.php?q=${encodeURIComponent(query)}`)
      .then(resp => resp.json())
      .then(actions.setSearchResult),
  getLatest: (count: Number) => (state, actions) =>
    fetch(`/api/getLatestTracks.php?q=${count}`)
      .then(resp => resp.json())
      .then(actions.setLatest),
  setLatest: (songs: Array<ITrack>) => () => ({ latest: songs }),
  setSearchResult: (songs: Array<ITrack>) => () => ({ searchResult: songs })
}
