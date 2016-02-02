import React from "react";

class BeginButton extends React.Component {

  constructor(props) {
    super(props)
  }

  buttonStyle() {
    return {
      float: 'right',
      width: '20%',
      height: '65%',
      margin: '23',
      color: '#fabd2f',
      backgroundColor: 'transparent',
      fontSize: 36,
      fontweight: 'bold',
      border: '5px solid #fabd2f'
    }
  }


  render() {
    var style = this.buttonStyle()
    return (
      <button style={style}>Begin</button>
    )
  }

}

export default BeginButton
