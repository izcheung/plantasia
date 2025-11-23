import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as PlantService from "services/plants";
import RedirectToSignInIfSignedOut from "shared/RedirectToSignInIfSignedOut";
import Navbar from "shared/Navbar";
import LoadingSpinner from "shared/LoadingSpinner";
import PlantInfoSection from "./PlantInfoSection";

const PlantDetails = () => {
  const { plantId } = useParams();
  const [loading, setLoading] = useState(false);
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    const fetchPlantDetails = async () => {
      setLoading(true);
      const response = await PlantService.getPlantId(plantId);
      const data = await response.json();
      console.log(data);
      setPlant(data);
      setLoading(false);
    };
    fetchPlantDetails();
  }, [plantId]);
  return (
    <RedirectToSignInIfSignedOut>
      <Navbar />
      <div className="min-h-screen bg-green-50 pt-16 px-8">
        {loading ? (
          <div className="flex justify-center pt-40 items-center">
            <LoadingSpinner></LoadingSpinner>
          </div>
        ) : (
          plant && (
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <PlantInfoSection plant={plant} />
              </div>
            </div>
          )
        )}
      </div>
    </RedirectToSignInIfSignedOut>
  );
};
export default PlantDetails;
