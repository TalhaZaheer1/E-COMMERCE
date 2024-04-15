import axios from "axios";
import { setError, setLoading,setProducts } from "./actions"


const getProducts = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        try{
            const res = await axios.get("http://localhose:8000/v1/products")
            if(res.data){
                dispatch(setLoading(false))
                dispatch(setProducts(res.data))
            }
        }catch(err){
            dispatch(setLoading(false))
            dispatch(setError(err.message))
        }
    }
}