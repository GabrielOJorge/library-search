import { BiSearchAlt2 } from 'react-icons/bi';

function Searchbar({ handleSubmit }) {
  return (
    <form
      className='bg-neutral-100 flex items-center justify-start w-full max-w-xs rounded pl-2 shadow-neutral-200 shadow-md mb-6'
      onSubmit={handleSubmit}
    >
      <BiSearchAlt2 size={35} />
      <input
        type='search'
        name='search'
        id='search'
        placeholder='Ex: Plato'
        className='bg-neutral-100 py-1 pl-3 outline-none w-full'
      />
      <button
        type='submit'
        className='bg-neutral-200 text-neutral-900 font-medium ml-2 py-2 px-3 rounded-r cursor-pointer'
      >
        Search
      </button>
    </form>
  );
}

export default Searchbar;
