import React, { Component} from 'react';
import {connect} from 'react-redux';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {selectBook} from '../actions/index';

class BookList extends Component {
  mapBooksList = () => {
    return this.props.books.map((book) => {
      return <ListGroupItem key={book.title} onClick={()=> console.log('clicked')}> {book.title} </ListGroupItem>
    })
  }
  render() {
    return (
      <ListGroup>
        {this.mapBooksList()}
      </ListGroup>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({selectBook: selectBook},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList)
