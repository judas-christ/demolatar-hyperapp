import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './components/App'
import { location } from '@hyperapp/router'
import focus from './lib/focus'

const main = app(state, actions, view, document.body)
const unsubscribe = location.subscribe(main.location)
main.getLatest(10)

focus(document)
