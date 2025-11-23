import PlantHeader from "./PlantHeader";
import BenefitBox from "./BenefitBox";
const PlantInfoSection = (props) => {
  const { plant } = props;
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col flex-1">
        <div className="md:hidden">
          <PlantHeader plant={plant} />
        </div>
        <img src={plant.images[0].src} className=" rounded-md" />
        <div className="flex">
          <BenefitBox
            icon="far fa-check-circle"
            title="Guaranteed Healthy"
            description="Guaranteed to arrive healthy or your money back"
          />
          <div className="bg-slate-300 w-px mt-4"></div>
          <BenefitBox
            icon="fa-solid fa-truck-fast"
            title="Free shipping"
            description="Get free ground shipping for orders over $100"
          />
        </div>
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
