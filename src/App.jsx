import { useState } from 'react';
import Book from './components/Book'
import Searchbar from './components/Searchbar';
import Results from './components/Results';

import './index.css'

function App() {
  const [results, setResults] = useState([]);
  const [isSubmitted, changeSubmitValue] = useState(false);

  const fetchResults = async (q) => {
    const response = await (await fetch(`https://openlibrary.org/search.json?q=${q}&limit=5`)).json();
    console.log(response.docs);
    return response.docs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const q = e.target[1].value;
    const docs = await fetchResults(q);

    setResults(docs);

    changeSubmitValue(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-neutral-900 h-screen flex flex-col items-center justify-center">
        <div className='bg-white w-11/12 max-w-[800px] p-4 rounded'>
          <Searchbar handleSubmit={handleSubmit}/>
          
          <Results results={results}/>
        </div>
      </div>
    )
  } else {
    return (
      <div className="bg-neutral-900 h-screen flex flex-col items-center justify-center">
        <div className='bg-white w-11/12 max-w-[800px] p-4 rounded'>
          <Searchbar handleSubmit={handleSubmit}/>
        </div>
      </div>
    )
  }
}

export default App
