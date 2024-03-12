import React, {
  ReactNode,
  createContext,
  useState,
  useContext,
  FC,
} from "react";

interface AppContextType {
  isAuthorized: boolean;
  setAuthorization: (isAuth: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("Something went wrong");
  }
  return context;
};

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const setAuthorization = (isAuth: boolean) => {
    setIsAuthorized(isAuth);
  };

  return (
    <AppContext.Provider value={{ isAuthorized, setAuthorization }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
