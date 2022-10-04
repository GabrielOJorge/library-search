import Book from "../Book"

function Results({ results }) {
  return (
    <div className="flex flex-col gap-4">
      <Book title={results[0].title} author={results[0].author_name[0]} date={results[0].first_publish_year} coverID={results[0].cover_edition_key}/>
      <Book title={results[1].title} author={results[1].author_name[0]} date={results[1].first_publish_year} coverID={results[1].cover_edition_key}/>
      <Book title={results[2].title} author={results[2].author_name[0]} date={results[2].first_publish_year} coverID={results[2].cover_edition_key}/>
      <Book title={results[3].title} author={results[3].author_name[0]} date={results[3].first_publish_year} coverID={results[3].cover_edition_key}/>
      <Book title={results[4].title} author={results[4].author_name[0]} date={results[4].first_publish_year} coverID={results[4].cover_edition_key}/>
    </div>
  )
}

export default Results