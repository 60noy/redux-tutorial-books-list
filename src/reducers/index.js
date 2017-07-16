import {combineReducers} from 'redux';

import ActiveBook from './active_book';
import BookList from './book_list';

export default combineReducers({
  activeBook: ActiveBook
  books: BookList
})
