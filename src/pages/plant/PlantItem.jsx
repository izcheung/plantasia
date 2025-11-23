import clsx from "clsx";
const POT_COLORS = {
  stone: "bg-stone-200",
  slate: "bg-slate-300",
  sky: "bg-sky-700",
  black: "bg-gray-600",
  white: "bg-gray-50",
  amber: "bg-amber-600",
};

const PlantItem = (props) => {
  const { plant } = props;
  const potColorList = plant.images.map((image, index) => {
    const color = POT_COLORS[image.pot_color];
    return (
      <div
        className={clsx(
          "rounded-full w-4 h-4 m-[3px] border border-slate-300",
          color
        )}
        key={index}
      ></div>
    );
  });
  return (
    <div className="w-[280px] mx-5 my-8 ">
      <img
        src={plant.images[0].src}
        className="w-[280px] h-[320px] rounded-md"
      />
      <div className="flex justify-between my-3">
        <div className="text-xl font-playfair text-emerald-700">
          {plant.name}
        </div>
        <div className="text-lg font-playfair text-emerald-600">
          {plant.price}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-slate-500">Color</div>
        <div className="flex">{potColorList}</div>
      </div>
    </div>
  );
};
export default PlantItem;
