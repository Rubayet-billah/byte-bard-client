"use client";
import { registerUser } from "@/lib/user/userApi";
import { setUser } from "@/redux/features/user/userSlice";
import constants from "@/utils/constants";
import { setToLocalStorage } from "@/utils/helperFunctions";
import httpStatus from "http-status";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const isCheckboxElement = e.target.type === "checkbox";
    setFormData((previousData) => ({
      ...previousData,
      [e.target.name]: isCheckboxElement ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.password !== formData.confirmPassword) {
        return toast.error("Password not matched");
      }
      const { confirmPassword, ...restData } = formData;
      const response = await registerUser(restData);

      if (response.status !== httpStatus.CREATED) {
        return toast.error(response.message);
      }

      if (response.data) {
        setToLocalStorage(constants.authKey, response.data);
        dispatch(setUser(response.data));
        toast.success("Registered successfully!");
        router.push("/");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div>
      {" "}
      <h1 className="my-5 text-3xl font-bold text-center md:text-5xl">
        Register
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Name inputs */}
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Email input */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="john.doe@company.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password inputs */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="•••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="•••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <p className="text-sm">
            Already have an account
            <Link href="/login" className="ml-1 font-bold text-blue-600">
              Login
            </Link>
          </p>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full px-5 py-2.5 text-center"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
