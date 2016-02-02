import React from "react";

class Vizualization extends React.Component {

  constructor(props) {
    super(props)
  }

  frameStyle() {
    return {
      backgroundColor: 'black',
      position: 'absolute',
      top: '22%',
      bottom: '2%',
      left: '1%',
      right: '1%'
    }
  }

  render() {
    return (
      <div style={this.frameStyle()}/>
    )
  }

}

export default Vizualization
