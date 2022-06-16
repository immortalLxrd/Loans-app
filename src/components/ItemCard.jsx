import React, { useState } from 'react'
import Modal from './UI/modal/Modal'
import Button from './UI/button/Button'
import Input from './UI/input/Input'

const ItemCard = ({ loan }) => {
    const [activeModal, setActiveModal] = useState(false)

    return (
        <div className='card'>
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
                            />
                        </div>
                        <div className="card__col_2">
                            <Button>invest</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )

}

export default ItemCard