"use client";

import { createContext } from "react";
import { User } from "@/api/auth";

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
