import { useState } from 'react';
import Searchbar from './components/Searchbar';
import Results from './components/Results';

import './index.css'

function App() {
  const [results, setResults] = useState([]);
  const [isSubmitted, changeSubmitValue] = useState(false);

  const fetchResults = async (q) => {
    const response = await (await fetch(`https://openlibrary.org/search.json?q=${q}&limit=5`, { mode: 'cors'})).json();
    return response.docs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const q = e.target[1].value;
    const docs = await fetchResults(q);

    try {
      setResults(docs);
    } catch (e) {
      console.log(e.message);
    }

    changeSubmitValue(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-neutral-900 h-screen flex flex-col items-center font-roboto-slab overflow-scroll">
        <main className='bg-white w-10/12 max-w-[800px] p-4 my-10 rounded h-min'>
          <Searchbar handleSubmit={handleSubmit}/>
          
          <Results results={results}/>
        </main>
      </div>
    )
  } else {
    return (
      <div className="bg-neutral-900 h-screen flex flex-col items-center justify-center font-roboto-slab">
        <main className='bg-white w-11/12 max-w-[800px] p-4 rounded h-min'>
          <Searchbar handleSubmit={handleSubmit}/>
        </main>
      </div>
    )
  }
}

export default App
