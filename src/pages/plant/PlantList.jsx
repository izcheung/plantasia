import Navbar from "shared/Navbar";
import RedirectToSignInIfSignedOut from "shared/RedirectToSignInIfSignedOut";
const PlantList = () => {
  return (
    <RedirectToSignInIfSignedOut>
      <Navbar />
      plants
    </RedirectToSignInIfSignedOut>
  );
};
export default PlantList;
