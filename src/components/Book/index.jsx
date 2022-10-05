function Book({ title, author, date, coverID }) {
  return (
    <div className='bg-neutral-100 flex items-center gap-4 rounded p-4 shadow-neutral-200 shadow-md'>
      <img src={`https://covers.openlibrary.org/b/olid/${coverID}-M.jpg`} alt="Book cover" className="w-14 rounded"/>

      <div>
        <h1 className='font-bold text-xl'>{title}</h1>
        <h2>by {author}</h2>
        <h3 className='text-sm text-neutral-500'>First published in {date}</h3>
      </div>
    </div>
  )
}

export default Book
