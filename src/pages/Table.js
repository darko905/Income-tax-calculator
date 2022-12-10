import React, { useContext, useEffect, useState } from 'react';
import DropdownMenu from '../components/DropdownMenu';
import { Row } from '../components/Row';
import { TableComponent } from '../components/TableComponent';
import { UserContext } from '../Context/UserContext';

const Table = ({ setVisibleHomePageCallback }) => {
  const { income, type, currentTextButton, styleMode } = useContext(UserContext);
  const [weeklyIncome, setWeeklyIncome] = useState(0);
  const [forthnightlyIncome, setForthnightlyIncome] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [annualyIncome, setAnnualyIncome] = useState(0);

  const [weeklyTax, setWeeklyTax] = useState(0);
  const [forthnightlyTax, setForthnightlyTax] = useState(0);
  const [monthlyTax, setMonthlyTax] = useState(0);
  const [annualyTax, setAnnualyTax] = useState(0);

  const [finallyWeeklyRavenue, setFinallyWeeklyRavenue] = useState(0);
  const [finallyForthnightlyRavenue, setFinallyForthnightlyRavenue] = useState(0);
  const [finallyMonthlyRavenue, setFinallyMonthlyRavenue] = useState(0);
  const [finallyAnnualyRavenue, setFinallyAnnualyRavenue] = useState(0);

  const [frequency, setFrequency] = useState(currentTextButton);
  const [incomeTitle, setIncomeTitle] = useState(parsedIncome);

  let parsedIncome = parseInt(income);

  useEffect(() => {
    switch (currentTextButton) {
      case 'Weekly':
        setWeeklyIncome(parsedIncome);
        setForthnightlyIncome(parsedIncome * 2);
        setMonthlyIncome(parsedIncome * 4);
        setAnnualyIncome(parsedIncome * 52);

        break;

      case 'Forthnightly':
        setWeeklyIncome(parsedIncome / 2);
        setForthnightlyIncome(parsedIncome);
        setMonthlyIncome(parsedIncome * 2);
        setAnnualyIncome(parsedIncome * 24);
        break;

      case 'Monthly':
        setWeeklyIncome(parsedIncome / 4);
        setForthnightlyIncome(parsedIncome / 2);
        setMonthlyIncome(parsedIncome);
        setAnnualyIncome(parsedIncome * 12);
        break;

      case 'Annualy':
        setWeeklyIncome(parsedIncome / 52);
        setForthnightlyIncome(parsedIncome / 24);
        setMonthlyIncome(parsedIncome / 12);
        setAnnualyIncome(parsedIncome);
        break;

      default:
        break;
    }
  }, [parsedIncome, currentTextButton]);

  //====================================
  //WE HAVE CHOSE THE TAX TO BE 20%;
  //====================================
  
  useEffect(() => {
    switch (type) {
      case 'gross':
        setWeeklyTax(weeklyIncome * 0.2);
        setForthnightlyTax(forthnightlyIncome * 0.2);
        setMonthlyTax(monthlyIncome * 0.2);
        setAnnualyTax(annualyIncome * 0.2);

        break;
      case 'neto':
        setWeeklyTax(weeklyIncome / 4);
        setForthnightlyTax(forthnightlyIncome / 4);
        setMonthlyTax(monthlyIncome / 4);
        setAnnualyTax(annualyIncome / 4);
        break;

      default:
        break;
    }
  }, [type, income, weeklyIncome]);

  useEffect(() => {
    switch (type) {
      case 'gross':
        setFinallyWeeklyRavenue(weeklyIncome - weeklyTax);
        setFinallyForthnightlyRavenue(forthnightlyIncome - forthnightlyTax);
        setFinallyMonthlyRavenue(monthlyIncome - monthlyTax);
        setFinallyAnnualyRavenue(annualyIncome - annualyTax);
        break;

      case 'neto':
        setFinallyWeeklyRavenue(weeklyIncome + weeklyTax);
        setFinallyForthnightlyRavenue(forthnightlyIncome + forthnightlyTax);
        setFinallyMonthlyRavenue(monthlyIncome + monthlyTax);
        setFinallyAnnualyRavenue(annualyIncome + annualyTax);
        break;

      default:
        break;
    }
  }, [weeklyTax, type]);

  let handleBack = () => {
    setVisibleHomePageCallback(true);
  };

  useEffect(() => {
    switch (frequency) {
      case 'Weekly':
        setIncomeTitle(finallyWeeklyRavenue);
        break;
      case 'Forthnightly':
        setIncomeTitle(finallyForthnightlyRavenue);
        break;
      case 'Monthly':
        setIncomeTitle(finallyMonthlyRavenue);
        break;
      case 'Annualy':
        setIncomeTitle(finallyAnnualyRavenue);
        break;

      default:
        break;
    }
  }, [currentTextButton, weeklyIncome, frequency, finallyWeeklyRavenue]);

  return (
    <div
      className={`z-[1000] rounded p-6 w-[90%] sm:w-1/2 m-auto flex flex-col justify-between my-0 bg-dark-blue-color relative`}>
      <h1
        className={`text-gray-100 text-4xl sm:text-4xl mb-4 flex align-center text-center self-center sm:text-left`}>
        <i className='bx bx-calculator'></i>
      </h1>
      <h1
        className={`text-light-blue-color text-4xl sm:text-4xl mb-4 flex align-center text-center self-center sm:text-left`}>
        Income tax calculator
      </h1>
      <button
        onClick={handleBack}
        className={`font-bold text-light-blue-color w-[7rem] h-[1rem] absolute hover:bg-light-blue-color hover:text-gray-100 right-5 sm:bg-gray-100 sm:p-3 p-2 flex justify-center items-center`}>
        Back
      </button>
      <div>
        <div className="flex justify-around">
          <p
            className={`text-center flex text-gray-100 text-2xl  items-center`}>
            ${incomeTitle}
          </p>
          <div className="w-[70%] sm:w-1/2 text-gray-100 text-lg ">
            {`Your ${type == 'gross' ? 'net' : 'gross'}`}
            <span className="relative">
              <DropdownMenu
                top={'sm:top-10'}
                topMobile={'top-10'}
                width={'full'}
                handleFrecuency={(text) => {
                  setFrequency(text);
                }}
                currentTextTable={currentTextButton}></DropdownMenu>
            </span>
            income
          </div>
        </div>
      </div>
      <TableComponent
        weeklyIncome={weeklyIncome.toFixed(0)}
        weeklyTax={weeklyTax.toFixed(0)}
        finallyWeeklyRavenue={finallyWeeklyRavenue.toFixed(0)}
        forthnightlyIncome={forthnightlyIncome.toFixed(0)}
        forthnightlyTax={forthnightlyTax.toFixed(0)}
        finallyForthnightlyRavenue={finallyForthnightlyRavenue.toFixed(0)}
        monthlyIncome={monthlyIncome.toFixed(0)}
        monthlyTax={monthlyTax.toFixed(0)}
        finallyMonthlyRavenue={finallyMonthlyRavenue.toFixed(0)}
        annualyIncome={annualyIncome.toFixed(0)}
        annualyTax={annualyTax.toFixed(0)}
        finallyAnnualyRavenue={finallyAnnualyRavenue.toFixed(0)}></TableComponent>
    </div>
  );
};

export default Table;
