import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import ListBook from './components/ListBook';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import BookProvider from './context/BookContext';


function App() {
  return (
    <div className="container">

      <BookProvider>
        <Header />
        <Routes>
          <Route path='/' element={<ListBook />} />
          <Route path='/add' element={<AddBook />} />
          <Route path='/edit/:id' element={<EditBook />} />
          <Route />
        </Routes>
      </BookProvider>

    </div>
  )
}

export default App
