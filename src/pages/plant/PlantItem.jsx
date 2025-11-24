import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getRandomIndex, POT_COLORS } from "shared/utils";

const PlantItem = (props) => {
  const { plant } = props;
  const [imageIndex, setImageIndex] = useState(() => {
    return getRandomIndex(plant.images);
  });

  const potColorList = plant.images.map((image, index) => {
    const color = POT_COLORS[image.pot_color];
    return (
      <div
        className={clsx(
          "rounded-full w-4 h-4 m-[3px] border border-slate-300 ",
          color,
          imageIndex === index && "outline outline-slate-400 outline-offset-2"
        )}
        onMouseEnter={() => setImageIndex(index)}
        key={index}
      ></div>
    );
  });
  return (
    <div className="w-[280px] mx-5 my-8 ">
      <Link to={`/plants/${plant.id}`}>
        <img
          src={plant.images[imageIndex].src}
          className="w-[280px] h-[320px] rounded-md"
        />
      </Link>
      <div className="flex justify-between my-3">
        <div className="text-xl font-playfair text-emerald-700">
          {plant.name}
        </div>
        <div className="text-lg font-playfair text-emerald-600">
          ${plant.price}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-slate-500">
          {plant.images[imageIndex].pot_color}
        </div>
        <div className="flex">{potColorList}</div>
      </div>
    </div>
  );
};
export default PlantItem;
