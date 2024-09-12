import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="mb-12 md:mx-16">
      <h2 className=" text-3xl font-semibold text-center mb-12 text-secondary">
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
          <Input className=" border-secondary py-3" placeholder="Username" />
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
            className=" border-secondary py-3"
            placeholder="Password"
          />
        </Form.Item>
        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
