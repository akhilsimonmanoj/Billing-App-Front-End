
export const getProduct = (products, id) => {
    const result = products.find(product => product._id === id)
    return result ? result.name : 'Unavailable'
}