import React from 'react';

const Table = ({books}) => {
  return (
    <table>
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
          </tr>
        })}
        
      </tbody>
    </table>
  )
}

export default Table;