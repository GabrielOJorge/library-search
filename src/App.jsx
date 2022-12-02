/* eslint-disable no-console */
import { useState } from 'react';
import { FaBook } from 'react-icons/fa';

import { fetchResults } from './functions/fetchResults';
import Searchbar from './components/Searchbar';
import Results from './components/Results';
import Pagination from './components/Pagination';

import './index.css';
import Loader from './components/Loader';

function App() {
  const [results, setResults] = useState([]);
  const [isSubmitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(10);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true);
    setCurrentPage(1);

    const q = e.target[0].value;

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
      <div className='bg-neutral-900 h-screen flex flex-col items-center font-roboto-slab overflow-scroll'>
        <div id='logo' className='w-10/12 flex flex-col items-center my-20'>
          <div className='text-neutral-100 flex flex-col items-center gap-6 pb-20 text-center'>
            <div className='flex flex-col items-center'>
              <FaBook size={72} />
              <h1 className='text-4xl font-black mt-4'>Library Search</h1>
            </div>
            <p className='text-xl'>
              You can search for a book, author, subject or even a specific
              sentence in a book.
            </p>
          </div>
          <main className='bg-white flex flex-col w-full max-w-[800px] p-4 rounded'>
            <Searchbar handleSubmit={handleSubmit} />

            {loading ? (
              <Loader />
            ) : (
              <>
                <Results results={currentResults} />
                <Pagination
                  resultsPerPage={resultsPerPage}
                  currentPage={currentPage}
                  totalResults={results.length}
                  setCurrentPage={setCurrentPage}
                />
              </>
            )}
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-neutral-900 h-screen flex flex-col items-center justify-center font-roboto-slab'>
      <div id='logo' className='w-10/12 flex flex-col items-center my-20'>
        <div className='text-neutral-100 flex flex-col items-center gap-6 pb-20 text-center'>
          <div className='flex flex-col items-center'>
            <FaBook size={72} />
            <h1 className='text-4xl font-black mt-4'>Library Search</h1>
          </div>
          <p className='text-xl'>
            You can search for a book, author, subject or even a specific
            sentence in a book.
          </p>
        </div>
        <main className='bg-white w-full max-w-[800px] p-4 rounded'>
          <Searchbar handleSubmit={handleSubmit} />
        </main>
      </div>
    </div>
  );
}

export default App;
