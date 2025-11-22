import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <FormContainer>
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
      />
      <Link to="/signin" className="text-green-600 underline text-sm ">
        Sign in
      </Link>
    </FormContainer>
  );
};
export default SignUp;
