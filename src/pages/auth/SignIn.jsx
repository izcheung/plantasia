import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import { Link } from "react-router-dom";
const SignIn = () => {
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
        ]}
        submitButtonText="Sign in"
      />
      <Link to="/signup" className="text-green-600 underline text-sm ">
        Create an account
      </Link>
    </FormContainer>
  );
};
export default SignIn;
