import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard'
import {fetchData} from '../api/loansAPI'
import { useSelector } from 'react-redux'


const Loans = () => {
  const [loans, setLoans] = useState([])

  const userBalance = useSelector(state => state.userBalance)

  useEffect(() => {
    fetchData().then(data => setLoans(data))
  }, [])

  return (
    <div className='main'>
      <a className="main__title" href="#main__inner">
        <h2 className="title">
          Current Loans
        </h2>
      </a>
      <hr />
      <div className="main__inner" id="main__inner">
        <div className="main__loans">
          {loans.map(loan =>
            <ItemCard loan={loan} key={loan.id} setLoans={setLoans}/>
          )}
        </div>
        <div className="main__balance">
          <p>Total amount available for investment:</p>
          <p>${userBalance.toString().split('.').join(',')}</p>
        </div>
      </div>
    </div>
  )
}


export default Loans