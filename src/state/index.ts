import { location } from '@hyperapp/router'

export default {
  location: location.state,
  latest: null,
  searchQuery: '',
  searchResult: null,
  nowPlaying: null,
  isPlaying: false
}
