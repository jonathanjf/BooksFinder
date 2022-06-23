import React, { useState, useEffect } from 'react';
import Table from '../Components/Table';
import SearchBar from '../Components/SearchBar';
import { requestAllBooks } from '../API';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks()
  }, [])

  const loadBooks = async () => {
    const books = await requestAllBooks()
    setBooks(books)
  }

  return (
  <>
    <SearchBar />
    <Table books={books.data}/>
  </>
  );
}

export default Home;
