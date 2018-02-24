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
  setSearchQuery: (query: string) => ({ searchQuery: query }),
  search: () => (state, actions) => {
    actions.setSearching()
    return fetch(`/api/search.php?q=${encodeURIComponent(state.searchQuery)}`)
      .then(resp => resp.json())
      .then(actions.setSearchResult)
  },
  setSearching: () => ({ isSearching: true }),
  setSearchResult: (songs: Array<ITrack>) => ({
    isSearching: false,
    searchResult: songs
  }),
  getBandTracks: (name: string) => (state, actions) =>
    fetch(`/api/getBandTracks.php?q=${encodeURIComponent(name)}`)
      .then(resp => resp.json())
      .then(
        data => actions.setSearchResult(data) && actions.location.go('/search')
      ),
  getLatest: (count: Number) => (state, actions) =>
    fetch(`/api/getLatestTracks.php?q=${count}`)
      .then(resp => resp.json())
      .then(actions.setLatest),
  setLatest: (songs: Array<ITrack>) => ({ latest: songs }),
  play: (song?: ITrack) =>
    song ? { nowPlaying: song, isPlaying: true } : { isPlaying: true },
  pause: () => ({ isPlaying: false })
}
