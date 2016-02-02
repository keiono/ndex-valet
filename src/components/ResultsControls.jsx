import React from "react";
import ResultsListKeywords from "./ResultsListKeywords.jsx"
import VizualizationSwitcher from "./VizualizationSwitcher.jsx"

class ResultsControls extends React.Component {

  constructor(props) {
    super(props)
  }

  windowStyle() {
    return {
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: '80%',
      right: 0,
      top: 0,
      left: 0
    }
  }


  render() {
    var style = this.windowStyle()
    return (
      <div style={style}>
        <ResultsListKeywords/>
        <VizualizationSwitcher/>
      </div>
    )
  }

}

export default ResultsControls
