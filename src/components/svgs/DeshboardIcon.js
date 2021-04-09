import React from 'react';

const DeshboardIcon = ({size = '20', fill = '#757575'}) => {
  return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill={fill}/>
      </svg>
  );
};

export default DeshboardIcon;
