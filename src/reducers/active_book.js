export default function(state = null, action){
  switch (action) {
    case 'BOOK_SELECTED':
      return action.payload;
      break;
    default:
      return state;
  }
}
