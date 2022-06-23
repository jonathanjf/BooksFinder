import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SearchBar = () => {
  return (
    <Form>
      <Row className="align-items-center justify-content-center">
        <Col xs={7}>
          <Form.Control
            type="text"
            id="inputTextSearch"
            placeholder='Busque livros pelo título, autor ou idioma'
          />
        </Col>
        <Col xs='auto'>
        <Button variant="outline-secondary">Pesquisar</Button>
        </Col>
      </Row>
      <Row>
        
      </Row>
    </Form>
  )
}

export default SearchBar;