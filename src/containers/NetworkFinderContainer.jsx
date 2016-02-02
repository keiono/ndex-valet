import { connect } from 'react-redux'
import { updateQuery, phaseSwitch, searchNdex } from '../state/actions/networkFinderAction.jsx'
import NetworkFinder from '../components/NetworkFinder.jsx'

function mapStateToProps(state) {
  return {
    query: state.networkFinder.get('query'),
    results: state.networkFinder.get('results')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateQuery: (newText) => dispatch(updateQuery(newText)),
    phaseSwitch: (nextPhase) => dispatch(phaseSwitch(nextPhase)),
    searchNdex: (query) => searchNdex(dispatch, query)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NetworkFinder)
