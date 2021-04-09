import React from 'react';

const NotificationsIcon = ({size = '20', fill = 'black'}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path d="M11.0001 20.167C12.0084 20.167 12.8334 19.342 12.8334 18.3337H9.16675C9.16675 19.342 9.98258 20.167 11.0001 20.167ZM16.5001 14.667V10.0837C16.5001 7.26949 14.9967 4.91366 12.3751 4.29033V3.66699C12.3751 2.90616 11.7609 2.29199 11.0001 2.29199C10.2392 2.29199 9.62508 2.90616 9.62508 3.66699V4.29033C6.99425 4.91366 5.50008 7.26033 5.50008 10.0837V14.667L3.66675 16.5003V17.417H18.3334V16.5003L16.5001 14.667Z" fill={fill} fill-opacity="0.54"/>
    </svg>

  );
};

export default NotificationsIcon;
