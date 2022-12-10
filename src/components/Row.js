import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Context/UserContext';

export const Row = ({ textColor, frequency, income, tax, finallyRavenue }) => {
  const { styleMode } = useContext(UserContext);


  return (
    <tr className={`text-center ${styleMode ? 'text-light-blue-color' : textColor} py-2 even:bg-gray-100`}>
      <td className={`text-center ${styleMode ? 'text-light-blue-color' : textColor} py-2`}>{frequency}</td>
      <td className={`text-center ${styleMode ? 'text-light-blue-color' : textColor} py-2`}>{income}</td>
      <td className={`text-center ${styleMode ? 'text-light-blue-color' : textColor} py-2`}>{tax}</td>
      <td className={`text-center ${styleMode ? 'text-light-blue-color' : textColor} py-2`}>{finallyRavenue}</td>
    </tr>
  );
};
