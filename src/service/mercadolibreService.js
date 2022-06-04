import axios from 'axios'

const API_URL= "https://api.mercadolibre.com/sites/MCO/search?q="
const API_URL_ITEMS = "https://api.mercadolibre.com/items"

export const getAllProducts = async (productName) => {
    const response = await axios.get(`${API_URL}${productName}`)
    return response
}

export const getProductById = async (produtId) => {
    const response = await axios.get(`${API_URL_ITEMS}/${produtId}`)
    return response
}