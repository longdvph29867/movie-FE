import { useEffect } from "react";
import userService from "../../../services/userSevice";
import { Button, Form, Input, Radio, message } from "antd";
import { Updateuser, User } from "../../../types/users";
import { useParams } from "react-router-dom";
const UpdateUser = () => {
  const [form] = Form.useForm();
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      userService.getUser(userId).then((response) => {
        const user: User = response.data;
        form.setFieldsValue({
          name: user.name,
          email: user.email,
          role: user.role,
        });
      });
    }
  }, [userId]);
  const onFinish = async (values: Updateuser) => {
    try {
      if (userId) {
        await userService.updateUser(userId, values);
        message.success("Update user successfully");
        setTimeout(() => {
          window.location.href = "/admin/users";
        }, 1200);
      }
    } catch (error) {
      message.error(error.response.data.message);
    }
  };
  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="max-w-lg w-full mx-auto px-5 pb-5 mt-20">
      <h3 className=" text-2xl text-yellow-400 text-center mt-6 mb-3">
        Update user
      </h3>
      <Form
        form={form}
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

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="text-white bg-yellow-400"
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateUser;
