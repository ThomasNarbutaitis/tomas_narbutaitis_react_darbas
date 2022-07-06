import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  login() {},
  logout() {},
  isUserLoggedIn: '',
});

AuthContext.displayName = 'AuthContext';

const AuthProvider = (props) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  function login() {
    setIsUserLoggedIn(true);
  }

  function logout() {
    setIsUserLoggedIn(false);
  }

  const ctx = {
    login,
    logout,
    isUserLoggedIn,
  };

  return (
    <AuthContext.Provider value={ctx}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
