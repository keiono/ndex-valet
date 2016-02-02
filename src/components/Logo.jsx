import React from "react";

class Logo extends React.Component {

  constructor(props) {
    super(props)
  }

  buttonStyle() {
    return {
      float: 'left',
      width: '5%',
      height: '65%',
      margin: '23',
      color: '#83a598',
      backgroundColor: 'transparent',
      fontSize: 50,
      fontweight: 'bold',
      border: '8px solid #83a598'
    }
  }


  render() {
    var style = this.buttonStyle()
    return (
      <button style={style}>IV</button>
    )
  }

}

export default Logo
