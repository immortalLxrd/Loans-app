import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard'

const Loans = ({userBalance, setUserBalance}) => {
  const [loans, setLoans] = useState([])

  useEffect(() => {
    const url = "/pseudoAPI/current-loans.json"

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
      <h2 className="title main__title">
        Current Loans
      </h2>
      <hr />
      <div className="main__inner">
        {loans.map(loan =>
          <ItemCard loan={loan} key={loan.id} />
        )}
        <div className="main__balance"> <p>Total amount available for investment:</p> <p>{ userBalance }</p> </div>
      </div>
    </div>
  )
}

export default Loans