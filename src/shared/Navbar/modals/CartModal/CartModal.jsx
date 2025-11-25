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
    <RemoveScroll>
      <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end">
        <div className="bg-white w-full h-screen max-w-xl relative flex flex-col ">
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
          {loading ? (
            <LoadingSpinner></LoadingSpinner>
          ) : (
            <>
              <div className="flex-1 overflow-y-scroll">{cartList}</div>
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
    </RemoveScroll>
  );
};
export default CartModal;
