import React from "react";
import "../Styles/Card.css";



const Cards = ({ items }) => {

    console.log(items)

    return (
        <div id="MainCard">
            {items.map((item) => {
                return (
                    <div className="product-card" key={item.id}>
                        <div>
                            <a href="#">
                                <img className="product-image" src={item.productImage} alt={item.title} />
                            </a>

                            <div className="product-content">
                                <a href="#">
                                    <h5 className="product-title">{item.productTitle}</h5>
                                </a>

                                {/* <div className="product-rating">
                                <div className="stars">{stars}</div>
                                <span className="rating-badge">{rating.toFixed(1)}</span>
                            </div> */}

                                <div className="product-footer">
                                    <span className="product-price">${item.price}</span>
                                    <button className="add-btn">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    );
};

export default Cards;