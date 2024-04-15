const SET_PRODUCTS = "GET_PRODUCTS";
const SET_USER = "GET_USER";
const SET_LOADING = "SET_LOADING";
const SET_CART = "SET_CART";
const SET_ERROR = "SET_ERROR"; 

const setProducts = (payload) => {
    return {
        type:SET_PRODUCTS,
        payload
    }
}

const setLoading = (payload) => {
    return {
        type:SET_LOADING,
        payload
    }
}
const setUser = (payload) => {
    return {
        type:SET_USER,
        payload
    }
}
const setCart = (payload) => {
    return {
        type:SET_CART,
        payload
    }
}
const setError = (payload) => {
    return {
        type:SET_ERROR,
        payload
    }
}

export {
    setProducts,
    setLoading,
    setCart,
    setUser,
    setError
}
