import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  login() {},
  logout() {},
  isUserLoggedIn: '',
});

AuthContext.displayName = 'AuthContext';

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);

  function login(gotToken) {
    setToken(gotToken);
    localStorage.setItem('login-token', gotToken);
  }

  function logout() {
    setToken(null);
    localStorage.removeItem('login-token');
  }

  const ctx = {
    login,
    logout,
    isUserLoggedIn: !!token,
    token,
  };

  return (
    <AuthContext.Provider value={ctx}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
