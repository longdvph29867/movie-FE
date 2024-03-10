import { Button, Form, Input, Modal, message } from "antd";
import { localUserService } from "../../../services/localService";
import { useState } from "react";
import userService from "../../../services/userSevice";
import authService from "../../../services/authService";
import { MdMarkEmailRead } from "react-icons/md";

const ProfileDetail = () => {
  const [form] = Form.useForm();
  const USER = localUserService.get();
  const infoUser = USER?.user;
  useState(() => {
    form.setFieldsValue({
      name: infoUser?.name,
      email: infoUser?.email,
    });
  });

  const onFinish = async (values: object) => {
    try {
      if (infoUser) {
        const res = await userService.updateUser(infoUser.id, values);
        message.success("Update information successfully");
        localUserService.set({ ...USER, user: res.data });
      }
    } catch (error) {
      message.error(error.response.data.message);
    }
  };
  const info = () => {
    Modal.info({
      icon: (
        <p className="text-3xl mr-2">
          <MdMarkEmailRead />
        </p>
      ),
      centered: true,
      width: "500px",
      title:
        "We have sent a confirmation email to you. Please check your email.",
      onOk() {},
    });
  };
  const veryfied = () => {
    authService.sendVerifyEmail();
    info();
  };
  return (
    <div>
      <div className="p-7 border-2 border-[#0f2133]">
        <h4 className="uppercase text-white font-bold mb-3">Profile details</h4>
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
            name={"name"}
            label={
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-[#cfddeb]"
              >
                Name
              </label>
            }
            rules={[{ required: true }]}
            className=""
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"email"}
            label={
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-[#cfddeb]"
              >
                Email address
              </label>
            }
            rules={[{ type: "email" }, { required: true }]}
          >
            <Input />
          </Form.Item>
          {infoUser?.isEmailVerified || (
            <div className="border-[#0f2133] rounded w-max py-1">
              <p className="text-sm text-[#dcf836]">
                Your email has not been verified!
                <span
                  onClick={veryfied}
                  className="hover:underline cursor-pointer"
                >
                  Verify now.
                </span>
              </p>
            </div>
          )}
          <Form.Item className="mt-5">
            <Button type="primary" htmlType="submit" className="bg-[#F27221]">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ProfileDetail;
