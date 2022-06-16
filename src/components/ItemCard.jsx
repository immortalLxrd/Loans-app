import React, { useState } from 'react'
import Button from './UI/button/Button'
import ModalCard from './ModalCard'


const ItemCard = ({ loan, userBalance, setUserBalance, setLoans }) => {
    const [activeModal, setActiveModal] = useState(false)
    const [investMarker, setInvestMarker] = useState(false)

    const rootClasses = ['card__marker']

    if (investMarker) {
        rootClasses.push('card__marker_active')
    }

    return (
        <div className='card'>
            <p className={rootClasses.join(' ')}>Invested</p>
            <div className="card__inner">
                <div className="card__col_1">
                    <h3 className="title card__title">
                        {loan.title}
                    </h3>
                    <ul className="card__text">
                        <li>
                            Amount available: ${loan.available}
                        </li>
                        <li>
                            Annualised return: {loan.annualised_return.toString().split('.').join(',')}%
                        </li>
                    </ul>
                </div>

                <div className="card__col_2">
                    <Button onClick={() => setActiveModal(true)}>invest</Button>
                </div>

                <ModalCard
                    loan={loan}
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                    userBalance={userBalance}
                    setUserBalance={setUserBalance}
                    setLoans={setLoans}
                    setInvestMarker={setInvestMarker}
                />
            </div>
        </div>
    )
}


export default ItemCard