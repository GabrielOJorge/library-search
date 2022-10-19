function Book({ title, author, date, coverID }) {
  return (
    <>
      <img src={`https://covers.openlibrary.org/b/olid/${coverID}-M.jpg`} alt="Book cover" className="w-14 sm:w-16 md:w-20 rounded"/>

      <div>
        <h1 className='font-bold sm:text-lg'>{title}</h1>
        <h2 className='text-sm sm:text-base'>by {author ? author : 'Unknown'}</h2>
        <h3 className='text-xs sm:text-sm text-neutral-500'>First published in {date}</h3>
      </div>
    </>
  )
}

export default Book;
