import React from 'react';
import { Pagination } from 'react-bootstrap';
import '../Styles/PaginationComponent.css'; 

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <Pagination className="custom-pagination">
        <Pagination.Prev 
          onClick={() => onPageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        />

        {pageNumbers.map(number => (
          <Pagination.Item 
            key={number} 
            active={number === currentPage}
            onClick={() => onPageChange(number)}
            className="page-item"
          >
            {number}
          </Pagination.Item>
        ))}

        <Pagination.Next 
          onClick={() => onPageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
