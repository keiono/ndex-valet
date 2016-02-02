import React from "react";

class SelectedNetworksText extends React.Component {

  constructor(props) {
    super(props)
  }

  textStyle() {
    return {
      float: 'right',
      width: '25%',
      height: '65%',
      marginTop: '40',
      marginRight: '0',
      color: '#fabd2f',
      fontSize: 40,
    }
  }


  render() {
    var style = this.textStyle()
    return (
      <h1 style={style}>2 Networks Selected</h1>
    )
  }

}

export default SelectedNetworksText
