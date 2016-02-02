import { PHASE_SWITCH, HOVERING, UPDATE_QUERY, UPDATE_RESULTS } from "./Actions.jsx"


export function phaseSwitch(nextPhase) {
  return {
    type: PHASE_SWITCH,
    phase: nextPhase
  }
}

export function hovering(element) {
  return {
    type: HOVERING,
    element: element
  }
}

export function updateQuery(newText) {
  return {
    type: UPDATE_QUERY,
    query: newText
  }
}

export function updateResults(newResults) {
  return {
    type: UPDATE_RESULTS,
    results: newResults
  }
}

export function searchNdex(dispatch, query) {
    var client = new XMLHttpRequest()
    client.open("POST", "http://dev2.ndexbio.org/rest/network/search/0/100", false)
    client.setRequestHeader("Content-Type", "application/json")
    client.send(JSON.stringify({
      searchString: query
    }))
    if (client.status == 200)
      dispatch(updateResults(client.responseText))
    else
      dispatch(updateResults(""))
}
