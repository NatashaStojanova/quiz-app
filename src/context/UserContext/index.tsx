import React, { createContext, useContext, useState } from "react";
import { IUserScore } from "models/UserScore";

interface IUserContextProps {
  userState: IUserScore;
  setUserState: React.Dispatch<React.SetStateAction<IUserScore>>;
}

interface IUserProvider {
  children: React.ReactNode;
}

const defaultState: IUserContextProps = {
  userState: { user: "", score: 0 },
  setUserState: () => {},
};

const UserContext = createContext<IUserContextProps>(defaultState);

export const UserProvider = ({ children }: IUserProvider) => {
  const [userState, setUserState] = useState<IUserScore>({
    user: "",
    score: 0,
  });

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using the context
export const useUserContext = () => useContext(UserContext);
