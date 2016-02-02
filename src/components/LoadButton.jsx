import React from "react";

class LoadButton extends React.Component {

  constructor(props) {
    super(props)
  }

  buttonStyle() {
    return {
      width: '502px',
      marginLeft: '5%',
      marginRight: '510%',
      border: 0,
      color: '#8ec07c',
      fontSize: 30,
      backgroundColor: 'transparent',
      border: '4px solid #8ec07c',
      position: 'absolute',
      top: '69%',
      right: 0,
      bottom: '22%',
      borderTop: 0,
      left: 0
    }
  }

  render() {
    return (
      <button style={this.buttonStyle()}>Load from a file</button>
    )
  }

}

export default LoadButton
