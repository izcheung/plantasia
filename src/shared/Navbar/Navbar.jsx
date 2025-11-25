import SessionContext from "context/session";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "./modals/CartModal/CartModal";

const Navbar = () => {
  const { username, signOut } = useContext(SessionContext);
  const [signOutMenu, setSignOutMenu] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  return (
    <>
      <nav
        className="bg-emerald-800 flex justify-center"
        onMouseLeave={() => {
          setSignOutMenu(false);
        }}
      >
        <div className="w-full max-w-5xl flex items-center justify-between px-8 py-2 ">
          <Link
            to="/plants"
            className=" text-white flex flex-col font-playfair items-center text-2xl "
          >
            <img
              className="w-10"
              src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
            />
            <div className="">Plantasia</div>
          </Link>
          <div className="flex-1 justify-end flex">
            <div className="relative min-w-32">
              {" "}
              <button
                className="text-emerald-200 flex items-center"
                onClick={() => {
                  setSignOutMenu(true);
                }}
              >
                <i className="fa-regular fa-user mr-2 text-xl"></i>
                {username}
              </button>
              {signOutMenu && (
                <div className="absolute bottom-[-46px] bg-white shadow-md rounded-md">
                  <button
                    className="hover:text-emerald-800 text-slate-500 px-4 py-2"
                    onClick={signOut}
                  >
                    <i className="fa-solid fa-right-from-bracket mr-2"></i>
                    signout{" "}
                  </button>
                </div>
              )}
            </div>
            <button
              className="text-emerald-200 flex items-center"
              onClick={() => {
                setCartModal(true);
              }}
            >
              <i className="fa-solid text-xl fa-cart-shopping mr-2"></i>
              Cart
            </button>
          </div>
        </div>
      </nav>
      {cartModal && <CartModal setCartModal={setCartModal} />}
    </>
  );
};
export default Navbar;
