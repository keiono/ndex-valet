import React from "react";
import ResultsControls from "./ResultsControls.jsx"
import Vizualization from "./Vizualization.jsx"
import GoView from "./GoView.jsx"

import {TABLE_VIEW, DETAILS_VIEW} from "../state/actions/Actions.jsx"


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

      console.log("============MODE")
      console.log(this.props)
    let renderingMode = this.props.viewMode;


    if(renderingMode === TABLE_VIEW) {
      return (
          <div style={style}>
            <ResultsControls/>
            <Vizualization results={this.props.results} visualizeDetails={this.props.visualizeDetails} />
          </div>
      )
    } else {
      return (
          <div style={style}>
            <ResultsControls/>
            <GoView results={this.props.results}/>
          </div>
      )
    }

  }

}

export default ResultsWindow
