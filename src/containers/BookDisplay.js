import React, { Component} from 'react';
import {connect} from 'react-redux';

class BookDisplay extends Component {
  render() {
    if (!this.props.book) {
      return <div>Please select a book from the list</div>
    }
    return (
      <div>
        <h3>Information on book </h3>
        <h4>{this.props.book.title}</h4>
      </div>
  );
  }
}

const mapStateToProps = (state) =>{
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDisplay)
