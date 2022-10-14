import { useState } from 'react';
import Searchbar from './components/Searchbar';
import Results from './components/Results';
import Loader from './components/Loader';

import './index.css'

function App() {
  const [results, setResults] = useState(null);
  const [isSubmitted, changeSubmitValue] = useState(false);
  const [didResponseReturn, changeResponseReturnValue] = useState(false);

  const fetchResults = async (q) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${q}&limit=5`, { mode: 'cors'});

      if (!response.ok) {
        throw Error('Could not fetch data for that resource.');
      }

      return await response.json();
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSubmit = async (e) => {
    changeSubmitValue(true);
    e.preventDefault();

    const q = e.target[1].value;

    try {
      const response = await fetchResults(q);
      setResults(response.docs);
      changeResponseReturnValue(true);
    } catch (err) {
      console.error(err.message);
      changeResponseReturnValue(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className='bg-neutral-900 w-full h-screen flex flex-col items-center font-roboto-slab overflow-scroll'>
        <main className='bg-white flex flex-col w-10/12 max-w-[800px] p-4 my-10 rounded'>
          <Searchbar handleSubmit={handleSubmit}/>

          {results ? <Results results={results} didResponseReturn={didResponseReturn}/> : <Loader />}
        </main>
      </div>
    )
  } else {
    return (
      <div className='bg-neutral-900 h-screen flex flex-col items-center justify-center font-roboto-slab'>
        <main className='bg-white w-11/12 max-w-[800px] p-4 rounded'>
          <Searchbar handleSubmit={handleSubmit}/>
        </main>
      </div>
    )
  }
}

export default App
