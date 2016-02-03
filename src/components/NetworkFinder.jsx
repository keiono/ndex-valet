import React from "react";
import ToolBar from "./Toolbar.jsx"
import SearchWindow from "./SearchWindow.jsx"
import ResultsWindow from "./ResultsWindow.jsx"

class NetworkFinder extends React.Component {

  constructor(props) {
    super(props)
    this.frameStyle = {
      backgroundColor: "#32302f",
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }

  render() {
    return (
      <div style={this.frameStyle}>
        <ToolBar/>
        <SearchWindow query={this.props.query} updateQuery={this.props.updateQuery} searchNdex={this.props.searchNdex}/>
        <ResultsWindow results={this.props.results} viewMode={this.props.viewMode} visualizeDetails={this.props.visualizeDetails} />
      </div>
    )
  }

}

export default NetworkFinder
