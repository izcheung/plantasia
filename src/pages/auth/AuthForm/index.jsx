import Field from "./Field";
import { useState } from "react";
const AuthForm = (props) => {
  const { fields, submitButtonText, onSubmit } = props;
  const [fieldValues, setFieldValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await onSubmit(fieldValues);
    setLoading(false);
  };

  return (
    <form
      className="p-4 m-4 bg-white border rounded-lg border-slate-200 w-full"
      onSubmit={handleSubmit}
    >
      {fields.map((field) => (
        <Field
          key={field.label}
          field={field}
          value={fieldValues[field.label]}
          onChange={(e) =>
            setFieldValues({ ...fieldValues, [field.label]: e.target.value })
          }
        />
      ))}

      <button className=" relative bg-emerald-700 text-white w-full rounded-lg py-2 mt-4">
        {submitButtonText}
        {loading && (
          <div className="absolute top-0 right-3 flex items-center h-full">
            <i className="fa-solid fa-spinner text-green-300 text-2xl animate-spin"></i>
          </div>
        )}
      </button>
    </form>
  );
};
export default AuthForm;
