import { BiSearchAlt2 } from 'react-icons/bi';

function Searchbar({ handleSubmit }) {
  return (
    <form
      className='bg-neutral-100 flex items-center justify-start w-full max-w-xs rounded py-1 pl-2 shadow-neutral-200 shadow-md mb-6'
      onSubmit={handleSubmit}
    >
      <BiSearchAlt2 size={25} />
      <input type='submit' value='' />
      <input
        type='search'
        name='search'
        id='search'
        placeholder='Search'
        className='bg-neutral-100 py-1 pl-3 outline-none w-full'
      />
    </form>
  );
}

export default Searchbar;
