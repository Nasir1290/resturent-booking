import { createContext, useState } from "react";

export const openProfileContext = createContext();

const OpenProfileProvider = ({ children }) => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  return (
    <openProfileContext.Provider value={{ isOpenProfile, setIsOpenProfile }}>
      {children}
    </openProfileContext.Provider>
  );
};

export default OpenProfileProvider;
