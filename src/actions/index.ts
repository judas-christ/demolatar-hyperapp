import { location } from '@hyperapp/router'
import { transformSongs, ITrack } from '../lib/transform-song'

export default {
  location: location.actions,
  setSearchQuery: (query: string) => ({ searchQuery: query }),
  search: () => (state, actions) => {
    // make sure they've entered something before searching
    if (!state.searchQuery) return
    actions.setSearching()
    return fetch(
      `${API_PATH}/api/search.php?q=${encodeURIComponent(state.searchQuery)}`
    )
      .then(resp => resp.json())
      .then(transformSongs)
      .then(actions.setSearchResult)
  },
  setSearching: () => ({ isSearching: true }),
  setSearchResult: (songs: ITrack[]) => ({
    isSearching: false,
    searchResult: songs
  }),
  getBandTracks: (name: string) => (state, actions) =>
    fetch(`${API_PATH}/api/getBandTracks.php?q=${encodeURIComponent(name)}`)
      .then(resp => resp.json())
      .then(transformSongs)
      .then(
        data => actions.setSearchResult(data) && actions.location.go('/search')
      ),
  getLatest: (count: Number) => (state, actions) =>
    fetch(`${API_PATH}/api/getLatestTracks.php?q=${count}`)
      .then(resp => resp.json())
      .then(transformSongs)
      .then(actions.setLatest),
  setLatest: (songs: Array<ITrack>) => ({ latest: songs }),
  play: (song?: ITrack) =>
    song ? { nowPlaying: song, isPlaying: true } : { isPlaying: true },
  pause: () => ({ isPlaying: false })
}
