/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import Results from './components/Results';
import Pagination from './components/Pagination';
import ReactPaginate from 'react-paginate';

import './index.css';
import Loader from './components/Loader';

function App() {
  const [results, setResults] = useState([]);
  const [isSubmitted, changeSubmitValue] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(10);

  const fetchResults = async (q) => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${q}`,
        { mode: 'cors' }
      );

      if (!response.ok) {
        throw Error('Could not fetch data for that resource.');
      }

      return await response.json();
    } catch (err) {
      console.error(new Error(err.message));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    changeSubmitValue(true);

    const q = e.target[1].value;

    try {
      const response = await fetchResults(q);
      setResults(response.docs);
    } catch (err) {
      console.error(new Error(err.message));
    }

    setLoading(false);
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  if (isSubmitted) {
    return (
      <div className='bg-neutral-900 w-full h-screen flex flex-col items-center font-roboto-slab overflow-scroll'>
        <main className='bg-white flex flex-col w-10/12 max-w-[800px] p-4 my-10 rounded'>
          <Searchbar handleSubmit={handleSubmit} />

          {loading ? (
            <Loader />
          ) : (
            <>
              <Results results={currentResults} loading={loading} />
              {/* <Pagination
                resultsPerPage={resultsPerPage}
                currentPage={currentPage}
                totalResults={results.length}
                setCurrentPage={setCurrentPage}
              /> */}

              <Pagination resultsPerPage={resultsPerPage} />
            </>
          )}
        </main>
      </div>
    );
  }

  return (
    <div className='bg-neutral-900 h-screen flex flex-col items-center justify-center font-roboto-slab'>
      <main className='bg-white w-11/12 max-w-[800px] p-4 rounded'>
        <Searchbar handleSubmit={handleSubmit} />
      </main>
    </div>
  );
}

export default App;
