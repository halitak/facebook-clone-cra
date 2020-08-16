import React, { FC } from 'react';
import { Search as SearchIcon } from '../Icons';

import './Search.scss';

const Search: FC = () => {
  return (
    <div className="Search">
      <SearchIcon />
      <input type="text" placeholder="Search Facebook" />
    </div>
  );
};

export default Search;
