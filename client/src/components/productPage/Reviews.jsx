import { Rating, Star } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

export default function Reviews({ reviews }) {
  const { totalRating, details, all, totalNumber } = reviews;
  console.log("before:w-[" + (details.fiveStar / totalNumber) * 100 + "%]");
  return (
    <div className="text-3xl px-5">
      <h1 className="text-[1.5rem] font-medium mb-[5rem]">Reviews</h1>
      <div className="px-16">
        <div className="flex gap-5">
          <p>{parseFloat(totalRating).toFixed(1)}</p>
          <Rating
            className="max-w-20"
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
        <h1>
          {all.length} Review{all.length === 1 ? "" : "s"}
        </h1>
        <div>
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
            <div className="relative h-2 w-full">
              <div
                style={{
                  width: (details.fiveStar / totalNumber) * 100 + "%",
                }}
                className="absolute rounded-full top-0 left-0 h-full bg-black"
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
            <div className="relative h-2 w-full">
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
            <div className="relative h-2 w-full">
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
            <div className="relative h-2 w-full">
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
            <div className="relative h-2 w-full">
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
    </div>
  );
}
