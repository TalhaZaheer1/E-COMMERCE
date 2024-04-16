import heroShoesMob from "../../assets/homepage/heroShoesMob.avif"
import brownShoesMob from "../../assets/homepage/brownShoesMob.jpg";
import blackShoesMob from "../../assets/homepage/blackShoesMob.jpg";



const initialState = {
  loading: false,
  user: {},
  products:[ {
    sneakerName:"VOLA",
    heroImage:heroShoesMob,
    variants:[
      {
    name:"VOLA POLAR GREY SNEAKERS",
    material:"Recycled wool",
    price:"129.00",
    oldPrice:"199.00",
    thumbnail:heroShoesMob,
  },
  {
    name:"VOLA BROWN SNEAKERS",
    material:"Recycled wool",
    price:"129.00",
    oldPrice:"199.00",
    thumbnail:brownShoesMob,
  },
  {
    name:"VOLA BROWN SNEAKERS",
    material:"Recycled wool",
    price:"129.00",
    oldPrice:"199.00",
    thumbnail:brownShoesMob,
  },  {
    name:"VOLA BROWN SNEAKERS",
    material:"Recycled wool",
    price:"129.00",
    oldPrice:"199.00",
    thumbnail:brownShoesMob,
  },  {
    name:"VOLA BROWN SNEAKERS",
    material:"Recycled wool",
    price:"129.00",
    oldPrice:"199.00",
    thumbnail:brownShoesMob,
  },
]},
{
  sneakerName:"VOLA",
  heroImage:blackShoesMob,
  variants:[
    {
  name:"VOLA POLAR GREY SNEAKERS",
  material:"Recycled wool",
  price:"129.00",
  oldPrice:"199.00",
  thumbnail:heroShoesMob,
},
{
  name:"VOLA BROWN SNEAKERS",
  material:"Recycled wool",
  price:"129.00",
  oldPrice:"199.00",
  thumbnail:brownShoesMob,
},
{
  name:"VOLA BROWN SNEAKERS",
  material:"Recycled wool",
  price:"129.00",
  oldPrice:"199.00",
  thumbnail:brownShoesMob,
},{
  name:"VOLA BROWN SNEAKERS",
  material:"Recycled wool",
  price:"129.00",
  oldPrice:"199.00",
  thumbnail:brownShoesMob,
},{
  name:"VOLA BROWN SNEAKERS",
  material:"Recycled wool",
  price:"129.00",
  oldPrice:"199.00",
  thumbnail:brownShoesMob,
},
]}
],
  cart: {},
  error:"yoyoyo"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_CART":
      return {
        ...state,
        cart: action.payload,
      };
      case "SET_ERROR":
        return {
          ...state,
          error: action.payload,
        };
    default: return state
  }
};

export default reducer;