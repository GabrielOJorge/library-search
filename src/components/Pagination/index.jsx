import ReactPaginate from 'react-paginate';
import { NextPage } from './components/NextPage';
import { PreviousPage } from './components/PreviousPage';

function Pagination({
  resultsPerPage,
  currentPage,
  totalResults,
  setCurrentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  const changePage = (direction) => {
    if (currentPage === 1 && direction === 'next') {
      setCurrentPage(currentPage + 1);
    } else if (
      currentPage === pageNumbers[pageNumbers.length - 1] &&
      direction === 'previous'
    ) {
      setCurrentPage(currentPage - 1);
    } else if (
      currentPage > 1 &&
      currentPage < pageNumbers[pageNumbers.length - 1]
    ) {
      direction === 'next'
        ? setCurrentPage(currentPage + 1)
        : setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (data) => setCurrentPage(data.selected + 1);

  if (totalResults) {
    return (
      <div className='flex items-center px-4 pt-8'>
        <div className='flex flex-1 items-center justify-center xs:justify-between sm:hidden'>
          <p className='hidden xs:flex gap-1 text-sm text-neutral-700'>
            Showing
            <span className='font-medium'>{currentPage}</span>
            to
            <span className='font-medium'>{resultsPerPage}</span>
          </p>
          <nav className='flex gap-2 sm:hidden'>
            <a
              role='button'
              onClick={() => changePage('previous')}
              className='page previous'
            >
              <PreviousPage />
            </a>
            <a
              role='button'
              onClick={() => changePage('next')}
              className='page next'
            >
              <NextPage />
            </a>
          </nav>
        </div>
        <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-center md:justify-between'>
          <div className='hidden md:inline'>
            <p className='flex gap-1 text-sm text-neutral-700'>
              Showing
              <span className='font-medium'>{currentPage}</span>
              to
              <span className='font-medium'>{resultsPerPage}</span>
              of
              <span className='font-medium'>{totalResults}</span>
              results
            </p>
          </div>

          <nav
            className='inline-flex -space-x-px shadow-sm'
            aria-label='Pagination'
          >
            <ReactPaginate
              previousLabel={<PreviousPage />}
              nextLabel={<NextPage />}
              breakLabel='...'
              marginPagesDisplayed={1}
              pageCount={pageNumbers.length}
              onPageChange={handlePageClick}
              containerClassName='inline-flex -space-x-px'
              pageClassName='page'
              pageLinkClassName='page-link'
              previousLinkClassName='page previous'
              nextLinkClassName='page next'
              activeClassName='active'
              breakClassName='page'
              breakLinkClassName='page-link'
              onClick={() => (location.href = '#logo')}
            />
          </nav>
        </div>
      </div>
    );
  }
}

export default Pagination;
