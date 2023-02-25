
import { useContext } from 'react';
import { BookContext } from './../context/BookContext';
import Book from './Book';

const ListBook = () => {
  const { books, setBooks } = useContext(BookContext)

  const handleRemoveBook = (id) => {
    const filtredBooks = books.filter(book => book.id !== id)
    setBooks(filtredBooks)
  }

  return (
    <div className='listBook'>
      {books.length ? books.map(book => (
        <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />
      )) : (<p className='noData'>No Books , Please add data</p>)}
    </div>
  )
}

export default ListBook