import { RemoveScroll } from "react-remove-scroll";
import SessionContext from "context/session";
import { useContext, useState, useEffect, useCallback } from "react";
import * as CartService from "services/cart";
import LoadingSpinner from "shared/LoadingSpinner";
import CartItem from "./CartItem";

import clsx from "clsx";
const CartModal = (props) => {
  const { setCartModal } = props;
  const { username } = useContext(SessionContext);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCart = useCallback(async () => {
    setLoading(true);
    const response = await CartService.getCart();
    const data = await response.json();
    setCart(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalQuantity = 0;
  let subTotal = 0;
  for (let item of cart) {
    totalQuantity += item.quantity;
    subTotal += item.price_per_unit * item.quantity;
  }

  const cartList = cart.map((item, index) => {
    return (
      <div
        key={item.id}
        className={clsx(
          "mx-5 pt-8 my-8",
          index !== 0 && "border-t border-slate-200 "
        )}
      >
        <CartItem item={item} fetchCart={fetchCart} />
      </div>
    );
  });
  return (
    <div className="flex flex-col w-full h-screen max-w-xl bg-white">
      <div className="text-3xl text-center text-white shadow-md py-7 bg-emerald-800 font-playfair">
        {username}&apos;s cart
      </div>
      <div className="flex flex-col flex-1 ">
        {loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <>
            <div className="flex-1">{cartList}</div>
            <div className="flex flex-col px-4 border-t border-slate-200">
              <div className="flex justify-between py-4 text-slate-400 items-center">
                {" "}
                <div className="">{totalQuantity} items</div>
                <div>
                  Subtotal:{" "}
                  <span className="text-lg ml-2 text-slate-500">
                    ${subTotal}
                  </span>
                </div>
              </div>

              <button
                className="bg-emerald-700 rounded-full flex justify-center py-3 mb-4 text-lg text-white items-center"
                onClick={() =>
                  alert("This app is not a real plant selling site :(")
                }
              >
                {" "}
                Checkout{" "}
                <i className="fa-solid fa-bag-shopping text-2xl ml-3"></i>
              </button>
            </div>
          </>
        )}{" "}
      </div>
    </div>
  );
};
export default CartModal;
