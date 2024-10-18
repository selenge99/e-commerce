"use client";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import React, { useContext, useState, createContext, useEffect } from "react";

interface IUser {
  firstname: string;
  email: string;
}

interface IContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const UserContext = createContext<IContext>({
  user: null,
  setUser: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [userToken, setUserToken] = useState("");

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      setUserToken(token || "");
      const response = await axios.get(`${apiUrl}/api/v1/auth/current-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 201) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("error fetching user data", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userToken]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserProvider;
