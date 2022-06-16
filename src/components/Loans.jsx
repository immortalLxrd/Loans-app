import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard'

const Loans = ({ userBalance, setUserBalance }) => {
  const [loans, setLoans] = useState([])

  useEffect(() => {
    const url = "/pseudoAPI/data.json"

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        setLoans(json.loans)
      } catch (err) {
        console.log("Error:", err)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='main'>
      <a href="#main__inner">
        <h2 className="title main__title">
          Current Loans
        </h2>
      </a>
      <hr />
      <div className="main__inner" id="main__inner">
        <div className="main__loans">
          {loans.map(loan =>
            <ItemCard loan={loan} key={loan.id} userBalance={userBalance} setUserBalance={setUserBalance} setLoans={setLoans}/>
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