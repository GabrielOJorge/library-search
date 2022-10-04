import Book from "../Book"

function Results({ results }) {
  console.log('results:', results[0]);

  return (
    <div>
      <Book title={results[0].title} author={results[0].author} date={results[0].firstPublishYear} coverID={results[0].coverID}/>
      <Book title={results[1].title} author={results[1].author} date={results[1].firstPublishYear} coverID={results[1].coverID}/>
    </div>
  )
}

export default Results