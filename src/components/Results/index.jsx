import { useState } from "react";
import Book from "../Book"
import Loader from "../Loader";

function Results({ results, loading }) {
  const formatResults = (results) => {
    return results.map(result => <Book key={result.key} title={result.title} author={result.author_name[0]} date={result.first_publish_year} coverID={result.cover_edition_key}/>)
  };

  if (loading) {
    return <Loader />;
  } else if (!results) {
    return (
      <div>
        <h1>Sorry, something went wrong. Please try again.</h1>
      </div>
    )
  } else if (results.length) {
    return (
      <ul className="flex flex-col gap-4">
        {formatResults(results)}
      </ul>
    )
  } else if (!results.length) {
    return (
      <div>
        <h1>No results found.</h1>
      </div>
    )
  }
}

export default Results