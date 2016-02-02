import { PHASE_SWITCH, HOVERING, UPDATE_QUERY, UPDATE_RESULTS } from "../actions/Actions.jsx"
import { Map } from "immutable"

const initialState = Map({
  phase: 'selectDefault',
  hover: 'none',
  query: '',
  results: ''
})

export default function networkFinder(state = initialState, action) {
  switch (action.type) {
    case PHASE_SWITCH:
      return state.set('phase', action.phase.slice(0))
    case HOVERING:
      return state.set('hover', action.element.slice(0))
    case UPDATE_QUERY:
      return state.set('query', action.query.slice(0))
    case UPDATE_RESULTS:
      return state.set('results', action.results.slice(0))
    default:
      return state
  }
}
