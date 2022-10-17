import Book from '../Book'
import Loader from '../Loader';

function Results({ results, loading }) {
  const formatResults = (results) => {
    return results.map(result => <Book key={result.key} title={result.title} author={result.author_name[0]} date={result.first_publish_year} coverID={result.cover_edition_key}/>)
  };

  if (loading) {
    return <Loader />;
  } else if (!results) {
    return <h1 className='self-center text-xl font-bold py-2'>Sorry, something went wrong. Please try again.</h1>;
  } else if (results.length) {
    return (
      <ul className='flex flex-col gap-4'>
        {formatResults(results)}
      </ul>
    )
  } else {
    return <h1 className='self-center text-xl font-bold py-2'>No results found.</h1>;
  }
}

export default Results