import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SearchBar = ({setInputValue, inputValue, filterByText}) => {

  const handleText = (value) => {
    setInputValue(value)
  }

  return (
    <Form>
      <Row className="align-items-center justify-content-center">
        <Col xs={7}>
          <Form.Control
            type="text"
            id="inputTextSearch"
            value={inputValue}
            placeholder='Busque livros pelo título, autor ou idioma'
            onChange={ ({ target }) => handleText(target.value)}
          />
        </Col>
        <Col xs='auto'>
        <Button variant="outline-secondary" onClick={ () => filterByText() }>Pesquisar</Button>
        </Col>
      </Row>
      <Row>
        
      </Row>
    </Form>
  )
}

export default SearchBar;