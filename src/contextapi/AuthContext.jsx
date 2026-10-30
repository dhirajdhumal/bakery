import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [registeredSuccess, setRegisteredSuccess] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("LoggedInUser")),
  );

  return (
    <>
      <AuthContext.Provider
        value={{
          registeredSuccess,
          setRegisteredSuccess,
          loginSuccess,
          setLoginSuccess,
          user,
          setUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
