import { useState } from 'react';
import Searchbar from './components/Searchbar';
import Results from './components/Results';

import './index.css'

function App() {
  const [results, setResults] = useState([]);
  const [isSubmitted, changeSubmitValue] = useState(false);

  const fetchResults = async (q) => {
    const response = await fetch(`https://openlibrary.org/search.json?q=${q}&limit=5`, { mode: 'cors'});

    return await response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const q = e.target[1].value;
    const response = await fetchResults(q);

    try {
      setResults(response.docs);
    } catch (e) {
      console.log(e.message);


    }

    changeSubmitValue(true);
  };

  if (isSubmitted) {
    return (
      <div className='container bg-neutral-900 h-screen flex flex-col items-center font-roboto-slab overflow-scroll'>
        <main className='bg-white w-10/12 max-w-[800px] p-4 my-10 rounded'>
          <Searchbar handleSubmit={handleSubmit}/>
          
          <Results results={results}/>
        </main>
      </div>
    )
  } else {
    return (
      <div className='container bg-neutral-900 h-screen flex flex-col items-center justify-center font-roboto-slab'>
        <main className='bg-white w-11/12 max-w-[800px] p-4 rounded'>
          <Searchbar handleSubmit={handleSubmit}/>
        </main>
      </div>
    )
  }
}

export default App
