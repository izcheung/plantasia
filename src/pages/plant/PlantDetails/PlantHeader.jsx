const PlantHeader = (props) => {
  const { plant } = props;
  return (
    <>
      <div className="flex justify-between text-emerald-700  ">
        <div className="text-4xl font-playfair">{plant.name}</div>
        <div className="text-3xl">${plant.price}</div>
      </div>
      <div className="my-2 italic text-lg text-slate-500">
        {plant.botanical_name}
      </div>
    </>
  );
};
export default PlantHeader;
