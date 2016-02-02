import React from "react";

class ResultsListKeywords extends React.Component {

  constructor(props) {
    super(props)
  }

  frameStyle() {
    return {
      position: 'absolute',
      top: '10%',
      bottom: '50%',
      left: '4%',
      right: '4%',
      backgroundColor: 'transparent',
      border: '4px solid #3c3836',
      borderTop: 0,
      borderRight: 0,
      borderLeft: 0
    }
  }

  textStyle(c) {
    return {
      color: c,
      backgroundColor: 'transparent',
      border: 0,
      fontSize: 30,
    }
  }

  render() {
    return (
      <div style={this.frameStyle()}>
        <button style={this.textStyle('white')}>Recently Used</button>
        <button style={this.textStyle('#939598')}>Popular</button>
        <button style={this.textStyle('#939598')}>Human</button>
        <button style={this.textStyle('#939598')}>Cancer</button>
        <button style={this.textStyle('#939598')}>Bioinformatics</button>
      </div>
    )
  }

}

export default ResultsListKeywords
