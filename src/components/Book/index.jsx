function Book({ title, author, date, coverID }) {
  const formatAuthor = (author) => {
    if (Array.isArray(author) && author.length > 1) {
      const last = author.pop();

      return `${author} and ${last}`;
    } else {
      return author ? author : 'Unknown';
    }
  };

  return (
    <>
      {
      coverID 
        ? <img src={`https://covers.openlibrary.org/b/olid/${coverID}-M.jpg`} alt="Book cover" className="w-14 sm:w-16 md:w-20 rounded"/>
        : <div className="flex flex-col justify-center items-center bg-neutral-400 w-14 sm:w-16 md:w-20 h-20 sm:h-24 md:h-28 p-2 rounded">
            <div className="flex flex-col justify-center items-center border-2 border-neutral-50 w-full h-full rounded text-neutral-50 font-black text-3xl">
              ?
            </div>
          </div>
      }

      <div>
        <h1 className='font-bold sm:text-lg'>{title}</h1>
        <h2 className='text-sm sm:text-base'>by {author ? author : 'Unknown'}</h2>
        <h3 className='text-xs sm:text-sm text-neutral-500'>First published in {date}</h3>
      </div>
    </>
  )
}

export default Book;
