import React from 'react';
import Form from 'react-bootstrap/Form';

const SearchBar = () => {
  return (
    <div>
       <Form.Control
        type="text"
        id="inputTextSearch"
        placeholder='Busque livros pelo título, autor ou idioma'
      />
    </div>
  )
}

export default SearchBar;