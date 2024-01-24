"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  // If user is not authenticated, redirect to login page
  if (!user) {
    // You can customize the redirect path based on your application
    router.push("/login");
    return null;
  }

  // Render the protected content for authenticated users
  return <div>{children}</div>;
};

export default PrivateRoute;
