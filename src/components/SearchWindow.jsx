import React from "react";
import SearchBox from "./SearchBox.jsx"
import LoadButton from "./LoadButton.jsx"
import SearchButton from "./SearchButton.jsx"

class SearchWindow extends React.Component {

  constructor(props) {
    super(props)
  }

windowStyle() {
  return {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    right: '65%',
    top: '15%',
    left: 0
  }
}

  render() {
    var style = this.windowStyle()
    return (
      <div style={style}>
        <SearchBox query={this.props.query} updateQuery={this.props.updateQuery}/>
        <LoadButton/>
        <SearchButton searchNdex={this.props.searchNdex} query={this.props.query}/>
      </div>
    )
  }

}

export default SearchWindow
