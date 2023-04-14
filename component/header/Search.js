import { useState } from 'react';
import { useRouter } from 'next/router';


function Search() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${query}`);
    setQuery('');
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={`search`} >
    <form onSubmit={handleSearch}>
      <input type="text" value={query} onChange={handleChange} placeholder='Search...' />
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
    </div>
  );
}

export default Search;
