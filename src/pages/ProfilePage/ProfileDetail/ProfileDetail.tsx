import { Button, Form, Input, message } from "antd";
import "./profileDetail.css";
import { localUserService } from "../../../services/localService";
import { useState } from "react";
import userService from "../../../services/userSevice";
import { UserUpdateView } from "../../../types/users";
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

  const onFinish = async (values: any) => {
    try {
      if (infoUser) {
        const data: UserUpdateView = { ...values, role: infoUser.role };
        const res = await userService.updateUser(infoUser.id, data);
        message.success("Cập nhật thông tin thành công");
        localUserService.set({ ...USER, user: res.data });
      }
    } catch (error) {
      message.error(error.response.data.message);
    }
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

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ProfileDetail;
