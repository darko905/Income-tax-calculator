import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { Row } from './Row';

export const TableComponent = ({
  weeklyIncome,
  weeklyTax,
  finallyWeeklyRavenue,
  forthnightlyIncome,
  forthnightlyTax,
  finallyForthnightlyRavenue,
  monthlyIncome,
  monthlyTax,
  finallyMonthlyRavenue,
  annualyIncome,
  annualyTax,
  finallyAnnualyRavenue
}) => {
  const { type, styleMode } = useContext(UserContext);
  return (
    <table className="w-full  mt-8">
      <tbody className="text-sm sm:text-2xl">
        <tr className="text-center py-2 even:bg-gray-100" >
          <th
            className={`text-center text-light-blue-color py-3`}>
            Frequency
          </th>
          {type == 'gross' ? (
            <th
              className={`text-center text-light-blue-color py-3`}>
              Gross income
            </th>
          ) : (
            <th
              className={`text-center text-light-blue-color py-3`}>
              Net income
            </th>
          )}
          <th
            className={`text-center text-light-blue-color py-3`}>
            Tax
          </th>
          {type == 'neto' ? (
            <th
              className={`text-center text-light-blue-color py-3`}>
              Gross income
            </th>
          ) 
          : (
            <th
              className={`text-center text-light-blue-color py-3`}>
              Net income
            </th>
          )}
        </tr>

        <Row
          textColor={'text-light-blue-color'}
          frequency={'Weekly'}
          income={weeklyIncome}
          tax={weeklyTax}
          finallyRavenue={finallyWeeklyRavenue}
        />
        <Row
          textColor={'text-gray-100'}
          frequency={'Forthightly'}
          income={forthnightlyIncome}
          tax={forthnightlyTax}
          finallyRavenue={finallyForthnightlyRavenue}
        />
        <Row
          textColor={'text-light-blue-color'}
          frequency={'Monthly'}
          income={monthlyIncome}
          tax={monthlyTax}
          finallyRavenue={finallyMonthlyRavenue}
        />
        <Row
          textColor={'text-gray-100'}
          frequency={'Annualy'}
          income={annualyIncome}
          tax={annualyTax}
          finallyRavenue={finallyAnnualyRavenue}
        />
      </tbody>
    </table>
  );
};
