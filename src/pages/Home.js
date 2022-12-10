import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import Button from '../components/Button';
import DropdownMenu from '../components/DropdownMenu';
import { UserContext } from '../Context/UserContext';

const Home = ({
  setVisibleHomePageCallback,
  setIncomeContext,
  setTypeContext,
  setCurrentTextButtonContext
}) => {
  const { styleMode } = useContext(UserContext);
  const [currentTextButton, setCurrentTextButton] = useState('Monthly');
  const [visibleHomePage, setVisibleHomePage] = useState(true);
  const [income, setIncome] = useState(0);
  const [type, setType] = useState('neto');
  const [clicked, setClicked] = useState(false);
  const buttons = useRef(null);

  let handleVisible = (e) => {
    e.preventDefault();
    setVisibleHomePage(!visibleHomePage);
    setIncomeContext(income);
    setTypeContext(type);
    setCurrentTextButtonContext(currentTextButton);
    
  };

  function handleGross(e) {
    setType('gross');
    setClicked(true);
  }
  function handleNeto(e) {
    setType('neto');
    setClicked(false);
  }
  useEffect(() => {
    setVisibleHomePageCallback(visibleHomePage);
  }, [visibleHomePage]);

  return (
    <div
      className={`z-[1000] rounded p-4 sm:p-6 w-[90%] my-0  m-auto flex flex-col justify-center text-center sm:justify-between sm:text-left sm:w-1/2 bg-dark-blue-color shadow-2xl`}>
      <h1
        className={`text-gray-100 text-4xl sm:text-4xl mb-4 flex align-center text-center self-center sm:text-left`}>
        <i className='bx bx-calculator'></i>
      </h1>
      <h1
        className={`text-light-blue-color text-4xl sm:text-4xl mb-4 flex align-center text-center self-center sm:text-left`}>
        Income tax calculator
      </h1>
      <p
        className={`text-base sm:text-base text-gray-100 pb-4 text-slate-200`}>
        What is your total income?
      </p>
      <div className="relative flex flex-col sm:flex-row">
        <input
          className={`focus:bg-gray-300 text-blue-700 border border-gray-200 rounded outline-none p-2 w-full sm:w-[70%] font-awesome `}
          type="number"
          onChange={(e) => {
            setIncome(e.target.value);
          }}
        />
        <DropdownMenu
          top={'sm:top-14'}
          topMobile={'top-28'}
          width={'[30%]'}
          handleFrecuency={(text) => {
            setCurrentTextButton(text);
          }}
        />
      </div>

      <div className=" flex flex-col justify-center items-center my-[2rem] sm:my-[4rem]">
        <h3
          className={`text-base sm:text-base text-gray-100 my-8`}>
          Please choose the income type:
        </h3>
        <div ref={buttons} className="w-full flex justify-around">
          <Button
            clicked={clicked}
            handle={(e) => {
              handleGross(e);
            }}
            textOfButton={`Gross`}
            width={`w-80`}></Button>
          <Button
            clicked={!clicked}
            handle={(e) => {
              handleNeto(e);
            }}
            textOfButton={`Neto`}
            width={`w-80`}></Button>
        </div>
        <Button
          handle={handleVisible}
          className="w-full"
          textOfButton={`Calculate`}
          width={`w-full`}></Button>
      </div>
    </div>
  );
};

export default Home;
