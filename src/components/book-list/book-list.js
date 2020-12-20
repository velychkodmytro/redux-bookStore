import React, { Component } from "react";
import BookListItem from "../book-list-item";
import "./book-list.css";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { fetchBooks, bookAddedToCart } from "../../actions";
import Spinner from "../spinner";
import { compose } from "../../utils";
import ErrorIndicator from "../error-indicator/error-indicator";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem book={book} 
                          onAddedToCart = {() => onAddedToCart(book.id)} />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) {
      <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} 
                     onAddedToCart = {onAddedToCart}/>;
  }
}

const mapStateToProps = ({bookList:{ books, loading, error }}) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
    
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
