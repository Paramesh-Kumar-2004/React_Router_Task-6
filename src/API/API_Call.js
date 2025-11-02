import axios from "axios"


const api = axios.create({
    baseURL: "https://690792a5b1879c890eda2eaa.mockapi.io/api/v1/"
})


async function createProduct(data) {
    const response = await api.post("/Products", data)
    return response.data
}

async function getProducts() {
    try {
        const response = await api.get("/Products")
        return response.data
    } catch (error) {
        console.log(error)
    }
}

async function getSingleProduct(id) {
    const response = await api.get(`/Products/${id}`)
    return response.data
}

async function updateProduct(id, data) {
    const response = await api.put(`/Products/${id}`, data)
    return response
}

async function deleteProduct(id) {
    const response = await api.delete(`/Products/${id}`)
    return response.data
}

export { createProduct, getProducts, updateProduct, deleteProduct, getSingleProduct };