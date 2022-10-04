function Book({ title, author, date, coverID }) {
  return (
    <div className='bg-neutral-100 flex items-center gap-4 rounded p-4 shadow-neutral-200 shadow-md mt-4'>
      <img src={`https://covers.openlibrary.org/b/olid/${coverID}-M.jpg`} alt="Book cover" className="w-14 rounded"/>

      <div>
        <h1 className='title font-black text-xl'>{title}</h1>
        <h2 className='subtitle'>by {author}</h2>
        <h3 className='text-sm text-neutral-500'>First published in {date}</h3>
      </div>
    </div>
  )
}

export default Book
