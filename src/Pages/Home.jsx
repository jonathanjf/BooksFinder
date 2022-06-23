import React, { useState, useEffect } from 'react';
import Table from '../Components/Table';
import SearchBar from '../Components/SearchBar';
import { requestAllBooks } from '../API';
import PaginationComponent from '../Components/Pagination';

const Home = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  
  useEffect(() => {
    loadAllBooks()
  }, [])

  useEffect(() => {
    updatePageElements()
  }, [pageNumber, allBooks])

  const loadAllBooks = async () => {
    const response = await requestAllBooks()
    setAllBooks(response.data)
  }

  const updatePageElements = () => {
      const page = pageNumber - 1;
      const start = page * 10;
      const end = start + 10;
      setBooks(allBooks.slice(start,end))
      console.log('update', allBooks.slice(start,end))
  }

  const changePageNumber = (pageN) => {
    setPageNumber(pageN)
  }

  return (
  <>
    <SearchBar />
    <Table books={books}/>
    <PaginationComponent allBooks={allBooks} pageNumber={pageNumber} changePageNumber={changePageNumber}/>
  </>
  );
}

export default Home;
