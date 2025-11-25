import { useContext } from "react";
import SessionContext from "context/session";
import { motion } from "framer-motion";
const MobileMenu = (prop) => {
  const { onCartOpen } = prop;
  const { username, signOut } = useContext(SessionContext);

  return (
    <motion.div
      initial={{ translateY: "-100%" }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-start pt-12 pb-6 pr-12 text-lg rounded-bl-lg shadow-md bg-emerald-800 text-emerald-200"
    >
      <div className="px-8 py-4">
        <i className="mr-2 text-2xl fa-solid fa-user"></i>
        {username}
      </div>
      <button className="px-8 py-4" onClick={signOut}>
        <i className="mr-2 text-2xl fa-solid fa-arrow-right-from-bracket"></i>
        sign out
      </button>
      <button className="px-8 py-4" onClick={onCartOpen}>
        <i className="mr-2 text-2xl fa-solid fa-cart-shopping"></i>
        cart
      </button>
    </motion.div>
  );
};
export default MobileMenu;
