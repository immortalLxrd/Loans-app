import React, { useState } from 'react'
import Modal from './UI/modal/Modal'
import Button from './UI/button/Button'
import Input from './UI/input/Input'

const ModalCard = ({ loan, activeModal, setActiveModal, userBalance, setUserBalance, setLoans, setInvestMarker }) => {
    const [inputValue, setInputValue] = useState('')

    const updateAmount = (updatedAvailable) => {
        setLoans(prevState => prevState.map(item => item.id === loan.id ?
            { ...item, available: updatedAvailable } : item))
    }

    const invest = (e) => {
        e.preventDefault()

        let loanAvailable = parseFloat(loan.available.split(',').join('.'))

        if (!inputValue || (inputValue < 0) || (userBalance < inputValue) || (loanAvailable < inputValue)) {
            return
        }

        setUserBalance((parseFloat(userBalance) - inputValue).toFixed(3))
        updateAmount((loanAvailable - inputValue).toFixed(3))
        setInvestMarker(true)
    }

    return (
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
                        <li className='modal_card__list_item'>
                            Loan ends in: {Math.floor(loan.term_remaining / 2629743) ?
                                `${Math.floor(loan.term_remaining / 2629743)} month ${Math.floor(((loan.term_remaining % 2629743)) / 86400)} days` :
                                `${Math.floor(loan.term_remaining / 86400)} days`}
                        </li>
                    </ul>
                    <h3 className="title card__title modal_card__title">
                        Investment amount
                    </h3>
                    <Input
                        type="number"
                        placeholder='0.000'
                        value={inputValue}
                        onChange={e => setInputValue(parseFloat(e.target.value))}
                    />
                </div>
                <div className="card__col_2">
                    <Button onClick={invest}>invest</Button>
                </div>
            </div></Modal>
    )
}

export default ModalCard