import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { createProduct } from '../API/API_Call';
import "../Styles/CreateProducts.css"



function CreateProducts() {

    const navigate = useNavigate()

    const [data, setData] = useState({
        productTitle: "",
        productImage: "",
        price: "",
        description: ""
    })

    function handleOnChange(e) {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        // console.log("Name ", e.target.name)
        // console.log("Value ", e.target.value)
    }

    async function HandleSubmit(e) {
        e.preventDefault()
        try {
            const result = await createProduct(data)
            console.log(result)
            setData({
                productTitle: "",
                productImage: "",
                price: "",
                description: ""
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }


    return (

        <div id='CreateProduct'>

            <form onSubmit={HandleSubmit} id='form'>
                <div id="Name" className="DivGroup">
                    <label className="label">Title :</label><br />
                    <input
                        type="text"
                        name="productTitle"
                        placeholder="Enter Your Name"
                        value={data.productTitle}
                        onChange={(e) => { handleOnChange(e) }}
                        required
                    />
                </div>

                <div className="DivGroup">
                    <label className='label'>Image : </label><br />
                    <input
                        type="text"
                        name='productImage'
                        value={data.productImage}
                        placeholder='Enter The Nick Name'
                        onChange={(e) => { handleOnChange(e) }}
                        required
                    />
                </div>

                <div className="DivGroup">
                    <label className='label'>Price : </label><br />
                    <input
                        type="text"
                        name='price'
                        value={data.price}
                        placeholder='Enter The Village'
                        onChange={(e) => { handleOnChange(e) }}
                        required
                    />
                </div>

                <div className="DivGroup">
                    <label className='label'>Description : </label><br />
                    <textarea
                        type="text"
                        name='description'
                        value={data.description}
                        placeholder='Enter The Orgin'
                        onChange={(e) => { handleOnChange(e) }}
                        required
                    />
                </div>
                <div id='Buttons'>
                    <button type="submit" id='CreateSubmitButton'>Create</button>

                    <button onClick={() => navigate("/")} id='HomeBtn'>Back</button>
                </div>

            </form>

        </div>
    )
}

export default CreateProducts