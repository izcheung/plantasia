import Field from "./Field";
import { useState } from "react";
const AuthForm = (props) => {
  const { fields, submitButtonText } = props;
  const [fieldValues, setFieldValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <form
      className="p-4 m-4 bg-white border rounded-lg border-slate-200"
      onSubmit={(e) => handleSubmit(e)}
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
      <button className="bg-emerald-700 text-white w-full rounded-lg py-2 mt-4">
        {submitButtonText}
      </button>
    </form>
  );
};
export default AuthForm;
