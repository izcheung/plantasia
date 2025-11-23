import SessionContext from "context/session";
import { useContext } from "react";

const Navbar = () => {
  const { username } = useContext(SessionContext);
  return (
    <nav className="bg-emerald-800 flex justify-center">
      <div className="w-full max-w-5xl flex items-center justify-between px-8 py-2">
        <div className=" text-white flex flex-col font-playfair items-center text-2xl">
          <img
            className="w-10"
            src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
          />
          <div className=" border-white border">Plantasia</div>
        </div>
        <div>
          <button className="text-emerald-200 flex items-center">
            <i className="fa-regular fa-user mr-2 text-xl"></i>
            {username}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
