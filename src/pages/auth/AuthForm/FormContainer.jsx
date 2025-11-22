const FormContainer = (props) => {
  const { children } = props;
  return (
    <div className="flex">
      <div className="hidden md:flex relative">
        <img
          className="h-screen object-cover"
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-green-800/40"></div>
      </div>
      <div className="flex items-center justify-center flex-col h-screen bg-green-50 flex-1">
        <div className="flex flex-col items-center mx-2 my-8">
          <img
            src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
            className="w-16 mb-2"
          />
          <div className="text-2xl font-playfair text-emerald-700">
            Plantasia{" "}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
