import React from "react";

class ResultsListKeyword extends React.Component {

  constructor(props) {
    super(props)
  }

  textStyle() {
    return {
      color: 'white',
      backgroundColor: 'transparent',
      border: 0,
      fontSize: 30,
    }
  }

  render() {
    var style = this.textStyle()
    return (
      <button style={style}>Recently Used</button>
    )
  }

}

export default ResultsListKeyword
