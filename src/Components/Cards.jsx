import React from "react";
import "../Styles/Card.css";



const Cards = ({ item }) => {


    return (
        <div className="product-card">
            <a href="#">
                <img className="product-image" src={item.image} alt={title} />
            </a>

            <div className="product-content">
                <a href="#">
                    <h5 className="product-title">{item.title}</h5>
                </a>

                {/* <div className="product-rating">
                    <div className="stars">{stars}</div>
                    <span className="rating-badge">{rating.toFixed(1)}</span>
                </div> */}

                <div className="product-footer">
                    <span className="product-price">${item.price}</span>
                    <button className="add-btn" onClick={onAddToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;