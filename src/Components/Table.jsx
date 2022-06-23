import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const BooksTable = ({books}) => {
  return (
    <Table  striped bordered hover responsive='true'>
      <thead>
        <tr>
          <th>Livro</th>
          <th>Autor</th>
          <th>Idioma</th>
          <th>Ano</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        
        { !books ? <tr><td>loading...</td></tr> : books.map((book) => {
          return <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.language}</td>
            <td>{book.year}</td>
            <td><Button variant="secondary">Detalhes</Button></td>
          </tr>
        })}
        
      </tbody>
    </Table>
  )
}

export default BooksTable;