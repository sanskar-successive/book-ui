
import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBar = () => (
    <Search size='large'
      placeholder="Search book..."
      onSearch={onSearch}
      style={{
        marginTop : 10,
        width: 500,
      }}
    />

);
export default SearchBar;