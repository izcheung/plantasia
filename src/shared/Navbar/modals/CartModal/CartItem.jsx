const CartItem = (props) => {
  const { item } = props;
  return (
    <div className="flex mx-6 my-8">
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
        <div className="text-slate-600 my-1 flex">
          ${item.quantity * item.price_per_unit}
        </div>
      </div>
    </div>
  );
};
export default CartItem;
