import React from 'react'

const Cart = ({ cartItem }) => {
    return (
        <div>
            {cartItem.map((ele) => {
                return (
                    <p key={ele.id}>{ele.id}</p>
                )
            })}
        </div>
    )
}

export default Cart