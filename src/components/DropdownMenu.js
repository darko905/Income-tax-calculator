import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';

const DropdownMenu = ({ handleFrecuency, currentTextTable, width, top, topMobile }) => {
  const [displayDropdownMenu, setDisplayDropdownMenu] = useState(false);
  const [currentTextButton, setCurrentTextButton] = useState(
    currentTextTable ? currentTextTable : 'Monthly'
  );
  const { styleMode } = useContext(UserContext);
  let textForButton = ['Weekly', 'Forthnightly', 'Monthly', 'Annualy'];

  useEffect(() => {
    handleFrecuency(currentTextButton);
  }, [currentTextButton]);

  return (
    <>
      <button
        onClick={() => {
          setDisplayDropdownMenu(!displayDropdownMenu);
        }}
        className={`hover:cursor-pointer hover:bg-gray-300 hover:text-light-blue-color text-lg  sm:text-lg bg-transparent text-light-blue-color  border-2 border-gray-300 rounded outline-none p-[6px] sm:mx-2 mt-2 sm:mt-0 w-full sm:w-auto`}>
        {currentTextButton} <i className="uil uil-angle-down"></i>
      </button>
      <ul
        name=""
        id="periodOfIncome"
        className={`rounded absolute ${topMobile} ${top} right-0 sm:right-0 hover:cursor-pointer text-xl  'bg-transparent' text-light-blue-color  border-gray-300 w-full sm:w-${width} ${
          !displayDropdownMenu ? 'hidden' : 'block'
        }`}>
        {textForButton.map((a, i) => {
          return (
            <li
              onClick={() => {
                setDisplayDropdownMenu(false);
                setCurrentTextButton(a);
              }}
              key={i}
              className="hover:cursor-pointer hover:bg-light-blue-color hover:text-gray-100 text-[1.2rem] p-[4px] bg-gray-300 w-full">
              {a}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropdownMenu;
