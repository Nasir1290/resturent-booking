import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toastValue from "../../components/shared/toastValue";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // Error state
  const from = location?.state?.from?.pathname || "/";

  const onFinish = async (values) => {
    event.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      // User login
      const result = await signIn(values.email, values.password);
      console.log("login with credential", result);

      // Navigate user to the intended route
      navigate(from, { replace: true });
      toast.success("Login Successfully", toastValue);
    } catch (err) {
      setError(err?.message || "An error occurred");
      toast.error(err?.message || "Login failed", toastValue);
    } finally {
      setIsLoading(false);
    }
  };

  // Google sign-in handler
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();

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
        Great To Have You Back !
      </h2>
      <Form
        name="login"
        requiredMark={false}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        {/* Username Field */}
        <Form.Item
          name="username"
          label={
            <label className=" text-lg font-semibold text-secondary">
              Email
            </label>
          }
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input className=" border-secondary py-2" placeholder="Username" />
        </Form.Item>

        {/* Password Field */}
        <Form.Item
          label={
            <label className=" text-lg font-semibold text-secondary">
              Password
            </label>
          }
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            className=" border-secondary py-2"
            placeholder="Password"
          />
        </Form.Item>
        {/* Submit Button */}
        <Form.Item className=" text-xl">
          <Button
            // type="primary"
            style={{ background: "#334a55",color:"white", }}
            disabled={isLoading}
            htmlType="submit"
            className="login-form-button"
            block
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </Form.Item>
      </Form>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-sm text-gray-500 mb-2">Or Log in with</h3>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center px-6 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none transition duration-200"
        >
          <FcGoogle className="text-2xl mr-3" />
          <span className="text-base font-medium py-2">Log in with Google</span>
        </button>
      </div>

      {/* Don't have an account */}
      <p className="text-center text-gray-700 mt-6">
        Don&apos;t have an account?{" "}
        <Link to="/auth/sign-up" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
