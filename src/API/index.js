import axios from 'axios';

export const requestAllBooks = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/books`);
    return (response);
  } catch (error) {
    console.error(error);
  }
}

