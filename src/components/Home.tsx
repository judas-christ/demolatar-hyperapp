import { h } from 'hyperapp'
import Latest from './Latest'
import Loading from './Loading'

export default (state, actions) =>
  state.latest ? <Latest songs={state.latest} /> : <Loading />
