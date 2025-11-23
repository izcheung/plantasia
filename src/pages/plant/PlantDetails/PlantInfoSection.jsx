import PlantHeader from "./PlantHeader";
const PlantInfoSection = (props) => {
  const { plant } = props;
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col flex-1">
        <div className="md:hidden">
          <PlantHeader plant={plant} />
        </div>
        <img src={plant.images[0].src} className=" rounded-md" />
        <div>todo</div>
      </div>
      <div className="flex flex-col flex-1 md:px-8">
        <div className="hidden md:block">
          <PlantHeader plant={plant} />
        </div>
        <div className="text-slate-600 leading-relaxed mt-4 pl-px">
          {plant.description}
        </div>
        {/* <div className="">{plant.care_instructions}</div> */}
      </div>
    </div>
  );
};
export default PlantInfoSection;
