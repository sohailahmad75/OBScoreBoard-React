import React from 'react';

const SearchIcon = ({size = '20', fill = 'black'}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 23 23" fill='none' xmlns="http://www.w3.org/2000/svg">
      <circle cx="9.34375" cy="9.34375" r="8.59375" stroke={fill} stroke-width="1.5"/>
      <path d="M15.8125 15.8125L21.5625 21.5625" stroke={fill} stroke-width="1.5" stroke-linecap="round"/>
    </svg>


  );
};

export default SearchIcon;
