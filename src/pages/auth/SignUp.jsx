import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import toastValue from "../../components/shared/toastValue";
import useAuth from "../../hooks/useAuth";

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // Error state
  const from = location?.state?.from?.pathname || "/";
  const { createUser, signInWithGoogle, updateUserProfile } = useAuth();

  const onFinish = async (values) => {
    event.preventDefault();
    try {
      if (values.newPassword !== values.confirmPassword) {
        toast.error(
          "New password and confirm password do not match",
          toastValue
        );
        return;
      }
      // Create user with email and password
      setIsLoading(true);
      const result = await createUser(values.email, values.newPassword);
      console.log("sign in", result);
      // Update user profile with username and profile image
      await updateUserProfile(
        values.firstName,
        // values.profileImage,
        values.address,
        values.contact
      );
      setIsLoading(false);
      navigate("/");
      toast.success("Sign Up Successfully", toastValue);
    } catch (err) {
      toast.error(err?.message, toastValue);
    }
  };

  // Google sign-in handler
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log("Login with Google", result);

      // Navigate user to the intended route
      navigate(from, { replace: true });
      toast.success("Login Successfully", toastValue);
    } catch (err) {
      toast.error(err?.message || "Google Sign-in failed", toastValue);
    }
  };

  return (
    <div className=" mx-2">
      <h2 className=" text-lg md:text-xl font-semibold text-center text-secondary">
        Great To Have You Back!
      </h2>
      <Form
        name="signup"
        requiredMark={false}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        {/* First Name */}
        <Form.Item
          name="firstName"
          label={
            <label className=" text-lg font-semibold text-secondary">
              First Name
            </label>
          }
          rules={[
            { required: true, message: "Please enter your first name!" },
            { min: 3, message: "Name should be at least 3 characters long!" },
          ]}
        >
          <Input
            className=" border-secondary py-2"
            placeholder="First Name"
            id="firstName"
          />
        </Form.Item>

        {/* Last Name */}
        <Form.Item
          name="lastName"
          label={
            <label className=" text-lg font-semibold text-secondary">
              Last Name
            </label>
          }
          rules={[
            { min: 3, message: "Name should be at least 3 characters long!" },
          ]}
        >
          <Input
            className=" border-secondary py-2"
            placeholder="Last Name"
            id="lastName"
          />
        </Form.Item>

        {/* Contact Number */}
        <Form.Item
          name="contact"
          label={
            <label className=" text-lg font-semibold text-secondary">
              Contact Number
            </label>
          }
        >
          <Input
            className=" border-secondary py-2"
            placeholder="01*********"
            id="contact"
          />
        </Form.Item>

        {/* Email */}
        <Form.Item
          name="email"
          label={
            <label className=" text-lg font-semibold text-secondary">
              Email
            </label>
          }
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
        >
          <Input
            className=" border-secondary py-2"
            placeholder="boss@boss.com"
            id="email"
          />
        </Form.Item>

        {/* New Password Field */}
        <Form.Item
          label={
            <label className=" text-lg font-semibold text-secondary">
              New Password
            </label>
          }
          name="newPassword"
          rules={[
            { required: true, message: "Please input your new password!" },
            { min: 8, message: "Password must be at least 8 characters long" },
          ]}
        >
          <Input.Password
            className=" border-secondary py-2"
            placeholder="*******"
            id="newPassword"
          />
        </Form.Item>

        {/* Confirm Password Field */}
        <Form.Item
          label={
            <label className=" text-lg font-semibold text-secondary">
              Confirm Password
            </label>
          }
          name="confirmPassword"
          rules={[
            { required: true, message: "Please confirm your password!" },
            { min: 8, message: "Password must be at least 8 characters long" },
          ]}
        >
          <Input.Password
            className=" border-secondary py-2"
            placeholder="********"
            id="confirmPassword"
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item className=" text-xl">
          <Button
            style={{ background: "#334a55", color: "white" }}
            disabled={isLoading}
            htmlType="submit"
            className="login-form-button"
            block
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </Button>
        </Form.Item>
      </Form>

      <div className="flex flex-col items-center justify-center">
        <h3 className="text-sm text-gray-500 mb-2">Or sign up with</h3>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center px-6 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none transition duration-200"
        >
          <FcGoogle className="text-2xl mr-3" />
          <span className="text-base font-medium py-2">
            Sign up with Google
          </span>
        </button>
      </div>

      {/* Already have an account */}
      <p className="text-center text-gray-700 mt-6">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-blue-500 hover:underline">
          Log In
        </Link>
      </p>
    </div>
  );
}
