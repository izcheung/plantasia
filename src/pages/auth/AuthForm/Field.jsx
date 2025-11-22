const Field = (props) => {
  const { field, value, onChange } = props;

  return (
    <div className="flex flex-col my-4 text-slate-500">
      <label htmlFor={field.label}>{field.label}</label>
      <input
        type={field.type}
        value={value}
        onChange={onChange}
        className="bg-slate-50 border px-2 py-1 rounded-lg focus:outline-emerald-600"
      ></input>
    </div>
  );
};
export default Field;
