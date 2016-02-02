import React from "react";

class SearchBox extends React.Component {

  constructor(props) {
    super(props)
  }

  keywordsStyle() {
    return {
      border: 0,
      color: 'white',
      fontSize: 26,
      width: '435px',
      margin: '5%',
      padding: 30,
      resize: 'none',
      backgroundColor: 'transparent',
      border: '4px solid #8ec07c',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: '176px',
      left: 0
    }
  }

  handleChange(event) {
    this.props.updateQuery(event.target.value)
  }

  render() {
    console.log("Rerender")
    var keywordsStyle = this.keywordsStyle()
    return (
      <textarea style={keywordsStyle} value={this.props.query} onChange={this.handleChange.bind(this)}/>
    )
  }

}

export default SearchBox
