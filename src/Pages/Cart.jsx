import React, { useEffect, useState } from 'react'
import { getProducts } from '../API/API_Call'
import Cards from '../Components/Cards'



const Cart = ({ cartItem }) => {

    const [loading, setLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("Loading...")

    const [totalAmount, setTotalAmount] = useState(0)
    const [qty, setQty] = useState([])


    // useEffect(() => {
    //     fetchProducts()
    // }, [])


    // const fetchProducts = async () => {
    //     try {
    //         const response = await getProducts();

    //         const filteredProducts = response.filter((product) =>
    //             cartItem.includes(String(product.id))
    //         );

    //         setProducts(filteredProducts);
    //         setLoading(false);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };


    return (
        <div id="MainCard">
            {cartItem.map((item) => {
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
                                <button>
                                    Add Quantity
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
    )
}

export default Cart