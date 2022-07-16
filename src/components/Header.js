import React from 'react';
import './Header.css';

function Header({money, total}) {
  return (
    <div className='header'>
      { total === 0 && (
          <h3>Your Balance: ${money} </h3>
      )}
      {
        total > 0 && money - total !== 0 && (
          <h3>Your Balance ${money - total}</h3>
        )
      }
      {
        money - total === 0 && (
          <h3>No Money Left To Spend !</h3>
        )
      }
        
    </div>
  )
}

export default Header