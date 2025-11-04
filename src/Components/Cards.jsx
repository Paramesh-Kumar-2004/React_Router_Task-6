import React, { useState } from "react";
import "../Styles/Card.css";



const Cards = ({ items, HandleAdCart, cartItem, HandleDeleteBtn }) => {

    console.log(cartItem);


    return (
        <div id="MainCard">
            {items.map((item) => {
                return (
                    <div className="post-card" key={item.id}>


                        <div className="avatarAndTitle">

                            <div className="avatar">
                                <img src={item.productImage} alt={item.productTitle} />
                            </div>
                            <div className="price">
                                <h2>&#8377; {item.price}</h2>
                                <h2>{item.id}</h2>
                            </div>
                        </div>

                        <h2 className="title">{item.productTitle} </h2>


                        <div className="image-preview">
                            <img src={item.productImage} alt={item.productTitle} />
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                            <div className="btn">
                                <button value={!cartItem.some(cart => cart.id === item.id) ? "Add To Cart" : "Remove From Cart"} onClick={(e) => { HandleAdCart(e, item) }}>
                                    {!cartItem.some(cart => cart.id === item.id) ? "Add To Cart" : "Remove From Cart"}
                                </button>
                            </div>
                            <div className="delbtn">
                                <button onClick={() => { HandleDeleteBtn(item) }}>Delete</button>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>

    );
};

export default Cards;