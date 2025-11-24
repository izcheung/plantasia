import { POT_COLORS } from "shared/utils";
import clsx from "clsx";
const PlantOptions = (props) => {
  const { plant, imageIndex, setImageIndex } = props;

  const potColors = plant.images.map((image, index) => {
    return (
      <div className="mx-2 flex items-center flex-col">
        <div
          key={index}
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
    <div className="my-10 text-emerald-700 ">
      <div className="flex items-center">
        <i className="fa-solid fa-brush mr-2"></i>
        <div className="text-lg">Pot Colors</div>
      </div>
      <div className="flex my-4">{potColors}</div>
    </div>
  );
};
export default PlantOptions;
