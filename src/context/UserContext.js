
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState("Guest");

  const login = () => {
    setUser((currentUser) =>
      currentUser === "Guest" ? "Student" : "Guest"
    );
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
}
