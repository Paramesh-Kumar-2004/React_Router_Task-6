import React, { useEffect, useState } from 'react'
import { getProducts } from '../API/API_Call'
import Cards from '../Components/Cards'



const Cart = ({ cartItem }) => {

    const [loading, setLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("Loading...")

    const [totalAmount, setTotalAmount] = useState(0)
    const [qty, setQty] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])


    const fetchProducts = async () => {
        try {
            const response = await getProducts();

            const filteredProducts = response.filter((product) =>
                cartItem.includes(String(product.id))
            );

            setProducts(filteredProducts);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            {products.length <= 0 && (
                <h1>No Cart Data</h1>
            )}

        </div>
    )
}

export default Cart