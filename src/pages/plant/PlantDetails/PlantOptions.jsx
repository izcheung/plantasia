import { POT_COLORS } from "shared/utils";
import clsx from "clsx";
import { useState } from "react";
import * as cartServices from "services/cart";
import LoadingSpinner from "shared/LoadingSpinner";
const PlantOptions = (props) => {
  const { plant, imageIndex, setImageIndex } = props;
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const potColors = plant.images.map((image, index) => {
    return (
      <div className="mx-2 flex items-center flex-col" key={index}>
        <div
          className={clsx(
            "w-10 h-10 rounded-full",
            POT_COLORS[image.pot_color],
            index === imageIndex && "outline outline-offset-2 offset-slate-400 "
          )}
          onMouseEnter={() => setImageIndex(index)}
        ></div>
        <div
          className={clsx(
            "mt-1",
            index === imageIndex ? "text-slate-700" : "text-slate-500"
          )}
        >
          {image.pot_color}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="my-10 text-emerald-700 ">
        <div className="flex items-center">
          <i className="fa-solid fa-brush mr-2"></i>
          <div className="text-lg">Pot Colors</div>
        </div>
        <div className="flex my-4">{potColors}</div>
      </div>
      <div className="flex">
        <div className="flex items-center text-xl border-2 rounded-full text-slate-500 border-slate-300 px-3 py-3 ">
          <button
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="mx-4 text-xl text-emerald-700">{quantity}</div>
          <button
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <button
          className=" flex-1 text-white rounded-full bg-emerald-700 flex justify-center items-center ml-2 hover:bg-emerald-800"
          onClick={async () => {
            setLoading(true);
            const response = await cartServices.addToCart({
              plantId: plant.id,
              quantity,
              potColor: plant.images[imageIndex].pot_color,
            });
            setLoading(false);
          }}
        >
          {loading ? (
            <i className="fa-solid fa-spinner animate-spin mr-2"></i>
          ) : (
            <i className="fa-solid fa-cart-shopping mr-2"></i>
          )}
          Add to cart
        </button>
      </div>
    </>
  );
};
export default PlantOptions;
