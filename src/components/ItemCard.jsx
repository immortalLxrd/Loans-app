import React, { useState } from 'react'
import Modal from './UI/modal/Modal'
import Button from './UI/button/Button'
import Input from './UI/input/Input'

const ItemCard = ({ loan, userBalance, setUserBalance, setLoans }) => {
    const [activeModal, setActiveModal] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [investMarker, setInvestMarker] = useState(false)

    const rootClasses = ['card__marker']

    if (investMarker) {
        rootClasses.push('card__marker_active')
    }

    const updateAmount = (updatedAvailable) => {
        setLoans(prevState => prevState.map(item => item.id === loan.id ? { ...item, available: updatedAvailable } : item))
    }

    const invest = (e) => {
        e.preventDefault()

        let available = parseFloat(loan.available.split(',').join('.'))

        if ((inputValue < 0) || (userBalance < inputValue) || (available < inputValue)) {
            return
        }

        setUserBalance((parseFloat(userBalance) - inputValue).toFixed(3))
        updateAmount((available - inputValue).toFixed(3))
        setInvestMarker(true)
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

                <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
                    <div className="card__inner modal_card__inner">
                        <div className="card__col_1">
                            <h2 className="title card__title">
                                Invest in Loan
                            </h2>
                            <ul className="modal_card__list">
                                <li className="modal_card__list_item">
                                    {loan.title}
                                </li>
                                <li className='modal_card__list_item'>
                                    Amount available: ${loan.available}
                                </li>
                                <li className='modal_card__list_item'>
                                    Annualised return: {loan.annualised_return.toString().split('.').join(',')}%
                                </li>
                            </ul>
                            <h3 className="title card__title modal_card__title">
                                Investment amount
                            </h3>
                            <Input
                                type="number"
                                placeholder='0,000'
                                value={inputValue}
                                onChange={e => setInputValue(parseFloat(e.target.value))}
                            />
                        </div>
                        <div className="card__col_2">
                            <Button onClick={e => invest(e)}>invest</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )

}

export default ItemCard