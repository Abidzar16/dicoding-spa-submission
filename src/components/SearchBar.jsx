import {React} from 'react';
import PropTypes from 'prop-types';

function SearchBar({query, setQuery}) {
  
  const filterBySearch = (event) => {
    const query = event.target.value;
    setQuery(query);
  };

  return (
    <section className="search-bar">
      <input type="text" onChange={filterBySearch} value={query} placeholder="Cari berdasarkan judul ..." />
    </section>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
};

 
export default SearchBar;