import AuthForm from "./AuthForm";
import { useState, useContext } from "react";
import SessionContext from "context/session";
import FormContainer from "./AuthForm/FormContainer";
import { Link, useLocation } from "react-router-dom";
import * as userService from "services/user";

const SignIn = () => {
  const location = useLocation();
  const [error, setError] = useState("");
  const sessionContext = useContext(SessionContext);
  console.log(location.state);
  return (
    <FormContainer>
      {error && (
        <div className="text-red-600 border-3 bg-red-100 rounded-lg px-2 py-1 mt-4 text-sm shadow-md">
          {error}
        </div>
      )}
      {location?.state?.accountCreated && (
        <div className="text-green-600 border-3 bg-green-100 rounded-lg px-2 py-2 mt-4 text-sm shadow-md text-center">
          Account created successfully. Please sign in.
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
        ]}
        submitButtonText="Sign in"
        onSubmit={async (values) => {
          const response = await userService.createSession({
            username: values.username,
            password: values.password,
          });
          const data = await response.json();
          if (response.status === 201) {
            setError("");
            sessionContext.signIn(data.capstone_session_token);
            console.log("Sign in successful");
          } else {
            setError(data.error);
          }
        }}
      />
      <Link to="/signup" className="text-green-600 underline text-sm ">
        Create an account
      </Link>
    </FormContainer>
  );
};
export default SignIn;
