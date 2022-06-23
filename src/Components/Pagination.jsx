import Pagination from 'react-bootstrap/Pagination';


const PaginationComponent = ({allBooks, pageNumber, changePageNumber, filteredBooks}) => {

  let active = pageNumber;
  let items = [];
  let totalPages 
  if (allBooks && filteredBooks.length < 2) {
    totalPages = Math.ceil(allBooks.length / 10)
  } else if (filteredBooks.length > 1) {
    totalPages = Math.ceil(filteredBooks.length / 10)
  } else {
    totalPages = 1
  }
   

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
  

