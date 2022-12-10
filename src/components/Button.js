import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
const Button = ({ textOfButton, width, handle, clicked }) => {
  const { styleMode } = useContext(UserContext);

  return (
    <button
      onClick={(e) => {
        handle(e);
      }}
      className={`${width} text-center ${clicked ? 'bg-gray-300': 'bg-light-blue-color'} hover:cursor-pointer hover:bg-gray-300 hover:text-blue-500 sm:text-lg text-lg  
      ${clicked ? 'text-blue-500' : 'text-gray-100'} rounded-lg outline-none p-[6px] mb-4
    `}>
      {textOfButton} 
    </button>
  );
};

export default Button;
