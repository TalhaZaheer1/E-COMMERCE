import { Rating, Star } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

export default function Reviews({ reviews }) {
  const { totalRating, details, all, totalNumber } = reviews;
  return (
    <div className="text-3xl px-5 font-medium">
      <h1 className="text-[1.5rem]  mb-[4rem]">Reviews</h1>
      <div className="px-10 py-8 border-[1px] w-fit mb-6">{/* review ratings card */}
        <div>
          <div className="flex gap-3">
            <p className="text-[1.25rem]">
              {parseFloat(totalRating).toFixed(1)}
            </p>
            <Rating
              className="max-w-20 m-0"
              readOnly={true}
              value={totalRating}
              itemStyles={{
                itemShapes: Star,
                activeFillColor: "#000000",
                itemStrokeWidth: 2,
                activeStrokeColor: "#000000",
              }}
            />
          </div>
          <h1 className="text-base mt-1 mb-3">
            {all.length} Review{all.length === 1 ? "" : "s"}
          </h1>
        </div>
        <div className="max-w-[248px] ratingDetails">
          <div>
            <Rating
              className="max-w-20"
              readOnly={true}
              value={5}
              itemStyles={{
                itemShapes: Star,
                activeFillColor: "#000000",
                itemStrokeWidth: 2,
                activeStrokeColor: "#000000",
              }}
            />
            <div className="relative h-2 bg-slate-200 w-[122px]">
              <div
                style={{
                  width: (details.fiveStar / totalNumber) * 100 + "%",
                }}
                className="absolute top-0 left-0 h-full bg-black"
              ></div>
            </div>
            <p>{`(${details.fiveStar})`}</p>
          </div>
          <div>
            <Rating
              className="max-w-20"
              readOnly={true}
              value={4}
              itemStyles={{
                itemShapes: Star,
                activeFillColor: "#000000",
                itemStrokeWidth: 2,
                activeStrokeColor: "#000000",
              }}
            />
            <div className="relative h-2 bg-slate-200 w-[122px]">
              <div
                style={{
                  width: (details.fourStar / totalNumber) * 100 + "%",
                }}
                className="absolute rounded-full top-0 left-0 h-full bg-black"
              ></div>
            </div>
            <p>{`(${details.fourStar})`}</p>
          </div>
          <div>
            <Rating
              className="max-w-20"
              readOnly={true}
              value={3}
              itemStyles={{
                itemShapes: Star,
                activeFillColor: "#000000",
                itemStrokeWidth: 2,
                activeStrokeColor: "#000000",
              }}
            />
            <div className="relative h-2 bg-slate-200 w-[122px]">
              <div
                style={{
                  width: (details.threeStar / totalNumber) * 100 + "%",
                }}
                className="absolute rounded-full top-0 left-0 h-full bg-black"
              ></div>
            </div>
            <p>{`(${details.threeStar})`}</p>
          </div>
          <div>
            <Rating
              className="max-w-20"
              readOnly={true}
              value={2}
              itemStyles={{
                itemShapes: Star,
                activeFillColor: "#000000",
                itemStrokeWidth: 2,
                activeStrokeColor: "#000000",
              }}
            />
            <div className="relative h-2 bg-slate-200 w-[122px]">
              <div
                style={{
                  width: (details.twoStar / totalNumber) * 100 + "%",
                }}
                className="absolute rounded-full top-0 left-0 h-full bg-black"
              ></div>
            </div>
            <p>{`(${details.twoStar})`}</p>
          </div>
          <div>
            <Rating
              className="max-w-20"
              readOnly={true}
              value={1}
              itemStyles={{
                itemShapes: Star,
                activeFillColor: "#000000",
                itemStrokeWidth: 2,
                activeStrokeColor: "#000000",
              }}
            />
            <div className="relative h-2 bg-slate-200 w-[122px]">
              <div
                style={{
                  width: (details.oneStar / totalNumber) * 100 + "%",
                }}
                className="absolute rounded-full top-0 left-0 h-full bg-black"
              ></div>
            </div>
            <p>{`(${details.oneStar})`}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {all.map((item,index )=> <ReviewItem key={index} item={item} />)}
      </div>
    </div>
  );
}

function ReviewItem({ item }) {
  return (
    <div className="bg-white p-8 pt-7">
      <div className="flex justify-between items-end">
        <p className="text-[20px]">{item.customerName.toUpperCase()}</p>
        <p className="text-xs text-black text-opacity-55 font-medium">{item.createdOn}</p>
      </div>
      <Rating
        className="max-w-20"
        readOnly={true}
        value={item.rating}
        itemStyles={{
          itemShapes: Star,
          activeFillColor: "#000000",
          itemStrokeWidth: 2,
          activeStrokeColor: "#000000",
        }}
      />
      <p className="text-xs font-normal my-3" >{item.title}</p>
      <p className="text-sm font-semibold text-black text-opacity-50 mb-5">{item.para}</p>
      <p className="text-xs text-[#212322c9] font-medium">{item.productDetails.tag} / {item.productDetails.color} / {item.productDetails.size}</p>
    </div>
  );
}
