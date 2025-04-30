"use client";
import UserProvider from "@/context/UserContext";
import React, { ReactNode } from "react";

const LoggedInUserProviders = ({ children }: { children: ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default LoggedInUserProviders;
