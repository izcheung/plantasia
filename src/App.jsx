import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import * as userService from "services/user";
import SessionContext from "context/session";
import { jwtDecode } from "jwt-decode";
import PlantList from "pages/plant/PlantList";
const App = () => {
  const [sessionToken, setSessionToken] = useState(() =>
    userService.getSessionToken()
  );

  return (
    <SessionContext.Provider
      value={{
        username: sessionToken ? jwtDecode(sessionToken).username : null,
        signIn: (token) => {
          setSessionToken(token);
          userService.setSessionToken(token);
        },
        signOut: () => {
          setSessionToken(null);
          userService.removeSessionToken();
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/plants" element={<PlantList />}></Route>
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
};

export default App;
