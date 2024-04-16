import { useEffect, useState } from "react"
import axios from "axios"
const useGetCart = () => {
    const [ cart,setCart ] = useState({items:[{name:"sjfkjsd"}]});
    // useEffect(async () => {
    //     try{
    //         const res = await axios.get("/user/cart")
    //         setCart(res.data)
    //     }catch(err){
    //         console.log(err)
    //     }
    // },[])
    return cart
}

export {
    useGetCart
}