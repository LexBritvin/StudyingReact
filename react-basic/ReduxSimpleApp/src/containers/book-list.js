import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators}  from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
          key={book.title}>
          {book.title}
          </li>
      );
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Return Redux book data to props.
  return {
    books: state.books,
  }
}

// Anything returned from this function will end up as props on the booklist container.
function mapDispatchToProps(dispatch) {
  // When selectBooks is called, the result be passed to all of our reducers.
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote booklist from a component to a container -
// it needs to know about this new dispatch method, selectBook.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);