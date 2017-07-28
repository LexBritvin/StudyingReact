export function selectBook(book) {
  // Return an action object.
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}