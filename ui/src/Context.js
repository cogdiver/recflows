import React, { createContext, useContext, useState, useEffect } from 'react';
// import { auth, db } from './vars';

// Creating the context
const AuthContext = createContext();

// Creating a custom hook to make using the context easier
const Context = () => useContext(AuthContext);

// Creating the context provider
const ProviderContext = ({ children }) => {
  // Modal to delete resources
  const [ showModal, setShowModal ] = useState(false);
  const [ dataModal, setDataModal ] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false)
    setDataModal({})
  };
  const handleShowModal = (data) => {
    setDataModal(data)
    setShowModal(true)
  };

  // Slide to show tutorials
  const [ showTutorial, setShowTutorial ] = useState(false);
  const [ dataTutorial, setDataTutorial ] = useState(false);
  const handleCloseTutorial = () => {
    setShowTutorial(false);
    setDataTutorial({})
  }
  const handleShowTutorial = (data) => {
    setDataTutorial(data)
    setShowTutorial(true);
  }

  const value = {
    showModal, setShowModal,
    dataModal, setDataModal,
    handleCloseModal, handleShowModal,
    showTutorial, setShowTutorial,
    dataTutorial, setDataTutorial,
    handleCloseTutorial, handleShowTutorial
  };

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>;
};

export { Context, ProviderContext, AuthContext }
