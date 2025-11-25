import { useEffect, useState } from "react";
import Navbar from "shared/Navbar/Navbar";
import RedirectToSignInIfSignedOut from "shared/RedirectToSignInIfSignedOut";
import * as PlantService from "services/plants";
import PlantItem from "./PlantItem";
import LoadingSpinner from "shared/LoadingSpinner";
import { motion } from "framer-motion";

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

  const plantList = plants.map((plant, index) => {
    return (
      <motion.div
        key={plant.id}
        initial={{ opacity: 0, translateY: "20px" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + (index % 3) * 0.2, duration: 0.4 }}
      >
        <PlantItem plant={plant} />
      </motion.div>
    );
  });
  return (
    <RedirectToSignInIfSignedOut>
      <Navbar />
      <div className="min-h-screen bg-green-50">
        {loading ? (
          <LoadingSpinner></LoadingSpinner>
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
