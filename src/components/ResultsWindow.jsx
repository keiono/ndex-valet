import React from "react";
import ResultsControls from "./ResultsControls.jsx"
import Vizualization from "./Vizualization.jsx"

class ResultsWindow extends React.Component {

  constructor(props) {
    super(props)
  }

  windowStyle() {
    return {
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: 0,
      right: 0,
      top: '15%',
      left: '35%'
    }
  }


  render() {
    var style = this.windowStyle()
    return (
      <div style={style}>
        <ResultsControls/>
        <Vizualization results={this.props.results}/>
      </div>
    )
  }

}

export default ResultsWindow
