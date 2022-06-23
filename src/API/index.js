import axios from 'axios';

export const requestAllBooks = async (pageNumber) => {
  try {
    const response = await axios.get(`http://localhost:4000/books?_page=${pageNumber}`);
    console.log(response)
    return (response);
  } catch (error) {
    console.error(error);
  }
}

