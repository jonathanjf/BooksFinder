import Pagination from 'react-bootstrap/Pagination';


const PaginationComponent = ({allBooks, pageNumber, changePageNumber}) => {

  let active = pageNumber;
  let items = [];

  const totalPages = allBooks ? Math.ceil(allBooks.length / 10) : 5

  const changePage = (number) => {
    active = number
    changePageNumber(active)
    return active;
  }


  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={ () => changePage(number) }>
        {number}
      </Pagination.Item>,
    );
  }
 
  return (
     <Pagination size="lg">{items}</Pagination>  
  )
}

export default PaginationComponent;
  

