const SET_PRODUCTS = "GET_PRODUCTS";
const SET_USER = "GET_USER";
const SET_LOADING = "SET_LOADING";
const SET_CART = "SET_CART";
const SET_ERROR = "SET_ERROR"; 
const SET_CART_OPEN = "SET_CART_OPEN";

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
const setCartOpen = (payload) => {
    return {
        type:SET_CART_OPEN,
        payload
    }
}

export {
    setProducts,
    setLoading,
    setCart,
    setUser,
    setCartOpen,
    setError,
}
