import React, { createContext, useContext, useState, useEffect } from 'react';
// import { auth, db } from './vars';

// Creating the context
const AuthContext = createContext();

// Creating a custom hook to make using the context easier
const Context = () => useContext(AuthContext);

// Creating the context provider
const ProviderContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = {
    user, setUser,
  };

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>;
};

export { Context, ProviderContext, AuthContext }
