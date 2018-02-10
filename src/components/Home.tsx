import { h } from 'hyperapp'
import Latest from './Latest'
import Loading from './Loading'

export default (latest, play: Function, getBandTracks: Function) =>
  latest ? (
    <Latest songs={latest} play={play} getBandTracks={getBandTracks} />
  ) : (
    <Loading />
  )
