import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from './SearchBar.module.scss';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({ onSearch, field}) => {
  const [query] = useSearchParams();
  const [keyword, setKeyword] = useState(query.get(field) || '');

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(keyword);
    }
  };

  return (
    <div className={style.searchBar}>
      <FontAwesomeIcon icon={faSearch} className={style.icon} />
      <input
        type="text"
        placeholder="검색"
        value={keyword}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className={style.input}
      />
    </div>
  );
};

export default SearchBar;
