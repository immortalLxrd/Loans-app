import React, { useState } from 'react'
import Modal from './UI/modal/Modal'

const ItemCard = ({ loan }) => {
    const [activeModal, setActiveModal] = useState(false)

    return (
        <div className='card'>
            <h3 className="title card__title">
                {loan.title}
            </h3>
            <p className="card__text">
                Amount available: ${loan.available} <br />
                Annualised return: {loan.annualised_return.toString().split('.').join(',')}%
            </p>
            <button onClick={() => setActiveModal(true)}>invest</button>
            <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
                <h2 className="title card__title">
                    Invest in Loan
                </h2>
            </Modal>
        </div>
    )

}

export default ItemCard