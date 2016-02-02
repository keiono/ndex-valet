import React from "react";

class SearchButton extends React.Component {

  constructor(props) {
    super(props)
  }

  buttonStyle() {
    return {
      width: '502px',
      marginLeft: '5%',
      marginRight: '510%',
      border: 0,
      color: '#b8bb26',
      fontSize: 30,
      backgroundColor: 'transparent',
      border: '5px solid #b8bb26',
      position: 'absolute',
      top: '85%',
      right: 0,
      bottom: '5%',
      left: 0
    }
  }

  handleClick() {
    console.log("Searching Ndex")
    this.props.searchNdex(this.props.query)
  }

  render() {
    return (
      <button style={this.buttonStyle()} onClick={this.handleClick.bind(this)}>Search NDEx</button>
    )
  }

}

export default SearchButton
