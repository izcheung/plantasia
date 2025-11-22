import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
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
    </FormContainer>
  );
};
export default SignIn;
