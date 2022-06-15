import React from 'react'

const ItemCard = ({ loan }) => {
    return (
        <div className='card'>
            <h3 className="title card__title">
                {loan.title}
            </h3>
        </div>
    )

}

export default ItemCard