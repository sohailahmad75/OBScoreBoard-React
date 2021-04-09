import React from 'react';

const AppNotificationIcon = ({size = '20', fill = 'black'} , isOn= false) => {
  return (
    <svg width={size} height={parseInt(size)+2} viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 26C13.0867 26 14.3737 24.713 14.3737 23.125H8.62638C8.62638 24.713 9.91339 26 11.5 26ZM21.1758 19.2747C20.3079 18.3422 18.6839 16.9393 18.6839 12.3438C18.6839 8.85332 16.2366 6.05918 12.9366 5.37367V4.4375C12.9366 3.64373 12.2934 3 11.5 3C10.7067 3 10.0634 3.64373 10.0634 4.4375V5.37367C6.76347 6.05918 4.31612 8.85332 4.31612 12.3438C4.31612 16.9393 2.6922 18.3422 1.82431 19.2747C1.55478 19.5645 1.43528 19.9108 1.43753 20.25C1.44247 20.9867 2.02062 21.6875 2.87952 21.6875H20.1205C20.9794 21.6875 21.558 20.9867 21.5625 20.25C21.5648 19.9108 21.4453 19.564 21.1758 19.2747Z" fill={fill}/>
      <circle cx="18.6875" cy="5.875" r="5.0625" fill={isOn ? '#007AFF' : fill} stroke="#F7F8FC" stroke-width="1.5"/>
    </svg>



  );
};

export default AppNotificationIcon;