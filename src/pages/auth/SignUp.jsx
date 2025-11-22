import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
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
    </FormContainer>
  );
};
export default SignUp;
