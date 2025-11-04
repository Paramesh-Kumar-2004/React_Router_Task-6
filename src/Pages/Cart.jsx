import React, { useEffect, useState } from 'react';


const Cart = ({ cartItem, handleDeleteBtn }) => {

    const [cartData, setCartData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const updated = cartItem.map(item => ({
            ...item,
            qty: item.qty ? item.qty : 1,
        }));
        setCartData(updated);
    }, [cartItem]);

    useEffect(() => {
        const total = cartData.reduce(
            (sum, item) => sum + item.price * item.qty,
            0
        );
        setTotalAmount(total);
    }, [cartData]);

    const handleIncreaseQty = (id) => {
        const updated = cartData.map(item =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
        setCartData(updated);
    };

    const handleDecreaseQty = (id) => {
        const updated = cartData.map(item =>
            item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
        );
        setCartData(updated);
    };

    return (
        <div id="MainCard">
            {cartData.map((item) => (
                <div className="post-card" key={item.id}>
                    <div className="avatarAndTitle">
                        <div className="avatar">
                            <img src={item.productImage} alt={item.productTitle} />
                        </div>
                        <div className="price">
                            <h2>₹ {item.price}</h2>
                        </div>
                    </div>

                    <h2 className="title">{item.productTitle}</h2>

                    <div className="image-preview">
                        <img src={item.productImage} alt={item.productTitle} />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "14px",
                        }}
                    >
                        <div className="btn">
                            <button onClick={() => handleIncreaseQty(item.id)}>+</button>
                            <span style={{ margin: "0 10px" }}>Qty: {item.qty}</span>
                            <button onClick={() => handleDecreaseQty(item.id)}>-</button>
                        </div>
                        <div className="delbtn">
                            <button onClick={() => handleDeleteBtn(item)}>Delete</button>
                        </div>
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        <h3>Subtotal: ₹ {item.price * item.qty}</h3>
                    </div>
                </div>
            ))}

            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <h2>Total Amount: ₹ {totalAmount}</h2>
            </div>
        </div>
    );
};

export default Cart;
