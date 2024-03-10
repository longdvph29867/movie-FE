import userService from "../../../services/userSevice";
import { Button, Form, Input, Radio, message } from "antd";
import { Createuser } from "../../../types/users";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../../../hooks/useSpinner";

const CreateUser = () => {
  const navigate = useNavigate();
  const { startSpinner, stopSpinner } = useLoading();
  const onFinish = async (values: Createuser) => {
    startSpinner();
    try {
      await userService.createUser(values);
      stopSpinner();
      message.success("Create user successfully");
      navigate("/admin/users");
    } catch (error) {
      stopSpinner();
      message.error(error.response.data.message);
    }
  };
  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="max-w-lg w-full mx-auto px-5 pb-5">
      <h3 className=" text-2xl text-green-500 text-center mt-6 mb-3">
        Create new user
      </h3>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item
          label="User Name"
          name="name"
          rules={[{ required: true, message: "Please input your user name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type: "email", message: "Invalid email address!" },
            { required: true, message: "Please input your email!" },
          ]}
        >
          <Input />
        </Form.Item>

        {/*  */}
        <Form.Item
          name="role"
          label="Role"
          rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}
        >
          <Radio.Group>
            <Radio value="user">User</Radio>
            <Radio value="admin">Admin</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please input your password!" },
            {
              type: "string",
              min: 6,
              message: "password must be at least 6 characters!",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="text-white bg-green-500"
          >
            Add user
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateUser;
