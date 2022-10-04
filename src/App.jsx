import { useState } from 'react';
import Book from './components/Book'
import Searchbar from './components/Searchbar';

import './index.css'

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [firstPublishYear, setFirstPublishYear] = useState("");
  const [coverID, setCoverID] = useState("");

  const fetchResults = async (q) => {
    const response = await (await fetch(`https://openlibrary.org/search.json?q=${q}&limit=5`)).json();

    return {
      title: response.docs[0].title,
      author: response.docs[0].author_name[0],
      firstPublishYear: response.docs[0].first_publish_year,
      coverID: response.docs[0].cover_edition_key
    };
  };

  const handleSubmit = async (e) => {
    const q = e.target[1].value;

    e.preventDefault();

    const response = await fetchResults(q);

    setTitle(response.title);
    setAuthor(response.author);
    setFirstPublishYear(response.firstPublishYear);
    setCoverID(response.coverID);
  };

  return (
    <div className="bg-neutral-900 h-screen flex flex-col items-center justify-center">
      <div className='bg-white w-11/12 max-w-[800px] p-4 rounded'>
        <Searchbar handleSubmit={handleSubmit}/>
        
        <Book title={title} author={author} date={firstPublishYear} coverID={coverID}/>
      </div>
    </div>
  )
}

export default App
