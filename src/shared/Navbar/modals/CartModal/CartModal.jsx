import { RemoveScroll } from "react-remove-scroll";
import SessionContext from "context/session";
import { useContext, useState, useEffect } from "react";
import * as CartService from "services/cart";
import LoadingSpinner from "shared/LoadingSpinner";
import CartItem from "./CartItem";
const CartModal = (props) => {
  const { setCartModal } = props;
  const { username } = useContext(SessionContext);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      const response = await CartService.getCart();
      const data = await response.json();
      setCart(data);
      setLoading(false);
    };
    fetchCart();
  }, []);

  const cartList = cart.map((item) => {
    console.log(item);
    return <CartItem item={item} key={item.id} />;
  });
  return (
    <RemoveScroll>
      <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end">
        <div className="bg-white w-full h-screen max-w-xl relative">
          <button
            className="absolute top-0 right-0 text-emerald-400 text-3xl p-2"
            onClick={() => {
              setCartModal(false);
            }}
          >
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
          <div className="bg-emerald-800 text-white font-playfair py-7 text-3xl shadow-md text-center">
            {username}&apos;s cart
          </div>
          <div>
            {loading ? (
              <LoadingSpinner></LoadingSpinner>
            ) : (
              <div>{cartList}</div>
            )}{" "}
          </div>
        </div>
      </div>
    </RemoveScroll>
  );
};
export default CartModal;
