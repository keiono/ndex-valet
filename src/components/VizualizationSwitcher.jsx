import React from "react";

class VizualizationSwitcher extends React.Component {

  constructor(props) {
    super(props)
  }

  frameStyle() {
    return {
      position: 'absolute',
      top: '56%',
      bottom: '0%',
      left: '5%',
      right: '4%',
      borderRadius: '20px',
      border: '1px, solid, white'
    }
  }

  buttonStyle(c) {
    return {
      color: 'white',
      backgroundColor: 'purple',
      border: '0 solid #ffffff',
      fontSize: 30,
      width: '40px',
      height: '40px'
    }
  }

  render() {
    return (
      <div style={this.frameStyle()}>
        <button style={this.buttonStyle()}>1</button>
        <button style={this.buttonStyle()}>2</button>
        <button style={this.buttonStyle()}>3</button>
      </div>
    )
  }

}

export default VizualizationSwitcher
