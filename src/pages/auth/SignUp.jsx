import { useState } from "react";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import { Link } from "react-router-dom";
import * as userService from "../../services/user";

const SignUp = () => {
  const [error, setError] = useState("");
  return (
    <FormContainer>
      {error && (
        <div className="text-red-600 border-3 bg-red-200 rounded-lg px-2 py-1 mt-4 text-sm shadow-md">
          {error}
        </div>
      )}

      <AuthForm
        fields={[
          {
            label: "username",
            type: "text",
          },
          {
            label: "password",
            type: "password",
          },
          {
            label: "confirm password",
            type: "password",
          },
        ]}
        submitButtonText="Create an account"
        onSubmit={async (values) => {
          if (values.username.length < 4) {
            setError("Username is too short.");
            return;
          }
          if (values.password.length < 4) {
            setError("Password is too short.");
            return;
          }
          if (values.password !== values["confirm password"]) {
            setError("Passwords do not match.");
            return;
          }

          const response = await userService.createUser({
            username: values.username,
            password: values.password,
          });

          if (response.status) {
            ("User successfully created.");
            setError("");
          }
          const data = await response.json();
          setError(data.error);
        }}
      />

      <Link to="/signin" className="text-green-600 underline text-sm ">
        Sign in
      </Link>
    </FormContainer>
  );
};
export default SignUp;
