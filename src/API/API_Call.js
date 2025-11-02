import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:2004/api/v1"
})


async function createProduct(data) {
    const response = await api.post("/users", data)
    return response.data
}

async function getProducts() {
    const response = await api.get("/users")
    return response.data
}

async function getSingleProduct(id) {
    const response = await api.get(`/users/${id}`)
    return response.data
}

async function updateProduct(id, data) {
    const response = await api.put(`/users/${id}`, data)
    return response
}

async function deleteProduct(id) {
    const response = await api.delete(`/users/${id}`)
    return response.data
}

export { createProduct, getProducts, updateProduct, deleteProduct, getSingleProduct };