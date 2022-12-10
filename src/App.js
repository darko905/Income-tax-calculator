import React, { useState, createContext, useContext } from 'react';

import { UserContext } from './Context/UserContext';
import Home from './pages/Home';
import Table from './pages/Table';
import './styles.css';
const App = () => {
  const [visibleHomePage, setVisibleHomePage] = useState(true);
  const [income, setIncome] = useState(null);
  const [type, setType] = useState(null);
  const [currentTextButton, setCurrentTextButton] = useState('Monthly');
  const [styleMode, setStyleMode] = useState(true);

  return (
    <div className={`h-screen flex justify-center align-center flex-col`}>
      
      <UserContext.Provider value={{ income, type, currentTextButton, styleMode }}>
        {visibleHomePage ? (
          <Home
            setCurrentTextButtonContext={(value) => {
              setCurrentTextButton(value);
            }}
            setTypeContext={(value) => setType(value)}
            setIncomeContext={(value) => setIncome(value)}
            setVisibleHomePageCallback={(boolean) => {
              setVisibleHomePage(boolean);
            }}
          />
        ) : (
          <Table
            setVisibleHomePageCallback={(boolean) => {
              setVisibleHomePage(boolean);
            }}
          />
        )}
      </UserContext.Provider>
    </div>
  );
};

export default App;
