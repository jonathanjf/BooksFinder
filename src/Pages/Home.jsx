import React, { useState, useEffect } from 'react';
import Table from '../Components/Table';
import SearchBar from '../Components/SearchBar';
import { requestAllBooks } from '../API';
import PaginationComponent from '../Components/Pagination';

const Home = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [inputValue, setInputValue ] = useState('');
  
  useEffect(() => {
    loadAllBooks()
  }, [])

  useEffect(() => {
    updatePageElements()
  }, [pageNumber, allBooks, filteredBooks])

  const loadAllBooks = async () => {
    const response = await requestAllBooks()
    setAllBooks(response.data)
  }

  const updatePageElements = () => {
      const page = pageNumber - 1;
      const start = page * 10;
      const end = start + 10;
      if (filteredBooks.length > 2) {
        setBooks(filteredBooks.slice(start,end))
      } else {
        setBooks(allBooks.slice(start,end))
      }
  }

  const changePageNumber = (pageN) => {
    setPageNumber(pageN)
  }

  const filterByText = () => {
    const filteredArray = allBooks
    .filter((book) => book.title
    .includes(inputValue) || book.author
    .includes(inputValue) || book.language
    .includes(inputValue) )
    setFilteredBooks(filteredArray)
  }

  return (
  <>
    <SearchBar setInputValue={setInputValue} inputValue={inputValue} filterByText={filterByText}/>
    <div>
      {inputValue !== '' ? <p>Foram encontrados {filteredBooks.length} resultados.</p> : <p>Sem filtros aplicados</p>}
    </div>
    <Table books={books} />
    <PaginationComponent allBooks={allBooks} filteredBooks={filteredBooks} pageNumber={pageNumber} changePageNumber={changePageNumber}/>
  </>
  );
}

export default Home;
