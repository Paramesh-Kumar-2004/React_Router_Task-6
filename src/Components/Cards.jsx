import React from "react";
import "../Styles/Card.css";



const Cards = ({ items }) => {

    console.log(items)

    return (
        <div id="MainCard">
            {items.map((item) => {
                return (
                    <div class="post-card">

                        <div class="avatar">
                            <img src={item.productImage} alt={item.productTitle} />
                        </div>

                        <h2 class="title">{item.productTitle} </h2>

                        <div class="image-preview">
                            <img src={item.productImage} alt={item.productTitle} />
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginBottom: "14px" }}>
                            <div className="price">
                                <h2>&#8377; {item.price}</h2>
                            </div>
                            <div className="btn">
                                <button>Add To Cart</button>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>

    );
};

export default Cards;