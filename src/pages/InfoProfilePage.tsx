import { Button, Form, Input } from "antd";
import "../styles/profileDetail.css";
const InfoProfilePage = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  return (
    <div>
      <div className="p-7 border-2 border-[#0f2133]">
        <h4 className="uppercase text-white font-bold mb-3">Profile details</h4>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="nest-messages"
          onFinish={onFinish}
          layout="vertical"
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
            className=""
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
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

export default InfoProfilePage;
