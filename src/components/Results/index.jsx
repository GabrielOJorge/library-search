import Book from '../Book'
import Loader from '../Loader';

function Results({ results, loading }) {
  if (loading) {
    return <Loader />;
  } else if (!results) {
    return <h1 className='self-center text-xl font-bold py-2'>Sorry, something went wrong. Please try again.</h1>;
  } else if (results.length) {
    return (
      <ul className='flex flex-col gap-4'>
        {results.map(result => (
          <li key={result.key} className='bg-neutral-100 flex items-center flex-wrap gap-4 rounded p-4 shadow-neutral-200 shadow-md'>
            <Book title={result.title} author={result.author_name} date={result.first_publish_year} coverID={result.cover_edition_key}/>
          </li>
        ))}
      </ul>
    )
  } else {
    return <h1 className='self-center text-xl font-bold py-2'>No results found.</h1>;
  }
}

export default Results