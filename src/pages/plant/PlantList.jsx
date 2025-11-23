import { useEffect, useState } from "react";
import Navbar from "shared/Navbar";
import RedirectToSignInIfSignedOut from "shared/RedirectToSignInIfSignedOut";
import * as PlantService from "services/plants";
import PlantItem from "./PlantItem";
import LoadingSpinner from "shared/LoadingSpinner";

const PlantList = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlants = async () => {
      setLoading(true);
      const response = await PlantService.getPlants();
      const data = await response.json();
      setPlants(data);
      setLoading(false);
    };
    fetchPlants();
  }, []);

  const plantList = plants.map((plant) => {
    return <PlantItem plant={plant} key={plant.id} />;
  });
  return (
    <RedirectToSignInIfSignedOut>
      <Navbar />
      <div className="h-screen bg-green-50">
        {loading ? (
          <div className="flex justify-center pt-40 items-center">
            <LoadingSpinner></LoadingSpinner>{" "}
          </div>
        ) : (
          <div className="flex justify-center py-24 ">
            <div className="w-full max-w-5xl">
              <div className="font-playfair text-4xl text-emerald-800 mb-6 px-4">
                Plants in stock
              </div>
              <div className="flex flex-wrap justify-center">{plantList}</div>
            </div>
          </div>
        )}
      </div>
    </RedirectToSignInIfSignedOut>
  );
};
export default PlantList;
