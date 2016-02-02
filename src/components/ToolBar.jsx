import React from "react"
import Logo from "./Logo.jsx"
import BeginButton from "./BeginButton.jsx"
import SelectedNetworksText from "./SelectedNetworksText.jsx"

class ToolBar extends React.Component {

  constructor(props) {
    super(props)
    this.frameStyle = {
      color: 'white',
      backgroundColor: 'black',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: "85%",
      left: 0
    }
  }

  render() {
    return (
      <div style={this.frameStyle}>
        <Logo/>
        <BeginButton/>
        <SelectedNetworksText/>
      </div>
    )
  }

}

export default ToolBar
