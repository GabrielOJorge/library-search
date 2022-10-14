import Book from "../Book"

function Results({ results, didResponseReturn }) {
  const formatResults = (results) => {
    return results.map(result => <Book key={result.key} title={result.title} author={result.author_name[0]} date={result.first_publish_year} coverID={result.cover_edition_key}/>)
  };

  if (results.length && didResponseReturn) {
    return (
      <div className="flex flex-col gap-4">
        {formatResults(results)}
      </div>
    )
  } else {
    return (
      <div>
        <h1>No results found.</h1>
      </div>
    )
  }
}

export default Results