import { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { localUserService } from "../../../services/localService";
import loginService from "../../../services/loginService";
import { Changepassword } from "../../../types/changePassword";
import userService from "../../../services/userSevice";

const ChangePassword = () => {
  const [form] = Form.useForm();
  useState(() => {
    form.setFieldsValue({
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  });

  const onFinish = async (value: Changepassword) => {
    const user = localUserService.get()?.user;
    if (user) {
      const dataLogin = {
        email: user.email,
        password: value.oldPassword,
      };
      try {
        await loginService.login(dataLogin);
      } catch (err) {
        return message.error("The old password is incorrect");
      }
      try {
        await userService.updateUser(user.id, { password: value.newPassword });
        message.success("Password updated successfully");
      } catch (err) {
        return message.error(err.response.data.message);
      }
    }
  };
  return (
    <div className="p-7 border-2 border-[#0f2133] h-[400px]">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Change Password</h2>
      </div>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        name="nest-messages"
        onFinish={onFinish}
        layout="vertical"
        style={{ maxWidth: 600 }}
        requiredMark={false}
      >
        <Form.Item
          name={"oldPassword"}
          label={
            <label
              htmlFor="email"
              className="w-full font-medium leading-6 text-[#cfddeb]"
            >
              Old Password
            </label>
          }
          rules={[
            { required: true, message: "Please enter your old password!" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name={"newPassword"}
          label={
            <label
              htmlFor="email"
              className="w-full font-medium leading-6 text-[#cfddeb]"
            >
              New Password
            </label>
          }
          rules={[
            { required: true, message: "Please enter your new password!" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name={"confirmNewPassword"}
          dependencies={["newPassword"]}
          label={
            <label
              htmlFor="email"
              className="w-full font-medium leading-6 text-[#cfddeb]"
            >
              Confirm New Password
            </label>
          }
          rules={[
            {
              required: true,
              message: "Please enter your confirm new password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item className="mt-5">
          <Button type="primary" htmlType="submit" danger>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default ChangePassword;
