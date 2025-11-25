import * as CartService from "services/cart";
const CartItem = (props) => {
  const { item, fetchCart } = props;

  return (
    <div className="flex ">
      <img src={item.image_src} className="w-28 rounded" />

      <div className="flex justify-between flex-1 mx-4">
        <div>
          <div className="text-emerald-700 text-xl font-playfair">
            {item.plant_name}
          </div>
          <div className="flex text-slate-500 my-1">
            <div className="w-14 text-slate-400">Color:</div>
            {item.pot_color}
          </div>
          <div className="flex text-slate-500 my-1">
            <div className="w-14 text-slate-400">Qty:</div>
            {item.quantity}
          </div>
        </div>
        <div className="flex justify-between flex-col items-end">
          <div className="text-slate-500 my-1 flex ">
            ${item.quantity * item.price_per_unit}
          </div>
          <button
            className="text-slate-600 hover:text-red-800 text-sm"
            onClick={async () => {
              const response = await CartService.removeItemFromCart({
                itemId: item.id,
              });
              console.log(await response.json());
              fetchCart();
            }}
          >
            <i className="fa-solid fa-trash mr-1 text-base"></i>
            remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
