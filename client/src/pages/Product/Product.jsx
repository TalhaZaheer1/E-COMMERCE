import { useParams } from "react-router-dom"
import ProductInfo from "../../components/productPage/ProductInfo";


const dummyProduct = {
  title:"AXOLO LINEN SNEAKERS",
  gender:"men",
  available:true,
  colors:[
    "blue",
    "baige",
    "pink",
    "white",
    "grey"
  ],
  variants:[
    {
      name:"AXOLO-LINEN BAIGE",
      price:"134.00",
      color:{
        title:"baige",
        type:"classic"
      },
      images:[""],
      sizes:[
        {
          title:41,
          available:true
        }
      ]
    }
  ],
  description:{
    imageSet:[
      {
        title:"Robust canvas",
        image:""
      }
    ],
    specs:[
      {
        title:"R-CO-Recycled cotton",
        desc:"Breathable,comfortable,soft"
      }
    ],
    info:[
      {
        title:"Shipping & Return",
        subHeadings:[
          {
            title:"Return",
            header:"The return is offered in Pakistan",
            para:""
          },
          {
            title:"",
            header:"We recommend washing by hand",
            para:""
          }
        ]
      }
    ],
    detailedSpecs:[
      {
        image:"",
        title:"",
        subHeadings:{
          header:"",
          para:{
            bold:"",
            normal:""
          }
        }
      }
    ]
  },
  reviews:{
    rating:7.8,
    all:[]
  }
}


function Product() {
  const { productId,variantName } = useParams();
  const product = dummyProduct;
  return (
    <div>
      
      <ProductInfo />
    </div>
  )
}

export default Product