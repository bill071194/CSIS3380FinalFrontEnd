import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';

function BookList() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      axios
        .get('http://localhost:5000')
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.log('Error from BookList');
        });
    }, []);
  
    const deleteBook = id => {
        axios
          .delete('http://localhost:5000/' + id)
          .then(response => {
            console.log(response.data);
          })
          .catch(err => {
            console.log(err);
          });
    
        setBooks(books.filter(book => book._id !== id));
      };

    const bookList =
      books.length === 0
        ? 'there is no book record!'
        : books.map((book) => <BookCard id={book._id} title={book.title} author={book.author} description={book.description} delete={deleteBook}/>);
  
    return (
      <div className='BookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books List</h2>
            </div>
  
            <div className='col-md-11'>
              <Link
                to='/create-book'
                className='btn btn-outline-warning float-right'
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
  
          <div className='list'>{bookList}</div>
        </div>
      </div>
    );
}

export default BookList;