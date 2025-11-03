import React, { useState } from "react";
import "../Styles/Card.css";



const Cards = ({ items, HandleAdCart, cartItem }) => {


    return (
        <div id="MainCard">
            {items.map((item) => {
                return (
                    <div className="post-card" key={item.id}>

                        <div className="avatar">
                            <img src={item.productImage} alt={item.productTitle} />
                        </div>

                        <h2 className="title">{item.productTitle} </h2>

                        <div className="image-preview">
                            <img src={item.productImage} alt={item.productTitle} />
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginBottom: "14px" }}>
                            <div className="price">
                                <h2>&#8377; {item.price}</h2>
                            </div>
                            <div className="btn">
                                <button value={!cartItem.includes(item.id) ? "Add To Cart" : "Remove From Cart"} onClick={(e) => { HandleAdCart(e, item) }}>
                                    {!cartItem.includes(item.id) ? "Add To Cart" : "Remove From Cart"}
                                </button>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>

    );
};

export default Cards;