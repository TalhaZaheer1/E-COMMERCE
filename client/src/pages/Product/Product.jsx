import { useParams } from "react-router-dom";
import ProductInfo from "../../components/productPage/ProductInfo";
import Reviews from "../../components/productPage/Reviews";

//temp images
import blackShoesMob from "../../assets/homepage/blackShoesMob.jpg";
import blackShoesMobSmall from "../../assets/homepage/blackShoesMob-small.jpg";
import brownShoesMob from "../../assets/homepage/brownShoesMob.jpg";
import brownShoesMobSmall from "../../assets/homepage/brownShoesMob-small.jpg";
import heroShoesMob from "../../assets/homepage/heroShoesMob.avif";
import heroShoesMobSmall from "../../assets/homepage/heroShoesMob-small.avif";
import freshLinen from "../../assets/ProductPage/fresh_lin.avif";
import freshLinenSmall from "../../assets/ProductPage/fresh_lin-small.avif";
import robustCanvas from "../../assets/ProductPage/robust_canvas.avif";
import robustCanvasSmall from "../../assets/ProductPage/robust_canvas-small.avif";
import nonSlip from "../../assets/ProductPage/non_slip.avif";
import nonSlipSmall from "../../assets/ProductPage/non_slip-small.avif";
import sideStiching from "../../assets/ProductPage/side_stitching.avif";
import sideStichingSmall from "../../assets/ProductPage/side_stitching-small.avif";

const product = {
  reviews: {
    totalRating: 2.4,
    totalNumber: 44,
    details: {
      fiveStar: 33,
      fourStar: 0,
      threeStar: 1,
      twoStar: 0,
      oneStar: 0,
    },
    all: [
      {
        customerName:"Talha Z.",
        rating: 3,
        title: "BAU TAIT!",
        para: "fits great,feels great,lasted long,happy with my descision",
        createdOn: "07/5/2024",
        productDetails: {
          tag: "Axolo - Lin - Men",
          color: "blue",
          size: 45,
        },
      },
      {
        customerName:"Talha Z.",
        rating: 3,
        title: "BAU TAIT!",
        para: "fits great,feels great,lasted long,happy with my descision",
        createdOn: "07/5/2024",
        productDetails: {
          tag: "Axolo - Lin - Men",
          color: "blue",
          size: 45,
        },
      },
      {
        customerName:"Talha Z.",
        rating: 3,
        title: "BAU TAIT!",
        para: "fits great,feels great,lasted long,happy with my descision",
        createdOn: "07/5/2024",
        productDetails: {
          tag: "Axolo - Lin - Men",
          color: "blue",
          size: 45,
        },
      },
      {
        customerName:"Talha Z.",
        rating: 3,
        title: "BAU TAIT!",
        para: "fits great,feels great,lasted long,happy with my descision",
        createdOn: "07/5/2024",
        productDetails: {
          tag: "Axolo - Lin - Men",
          color: "blue",
          size: 45,
        },
      },
    ],
  },
};

function Product() {
  const { productId, variantName } = useParams();
  return (
    <div className="h-[100%] bg-slate-100">
      <ProductInfo />
      <Reviews reviews={product.reviews} />
    </div>
  );
}

export default Product;
