import { Button, Form, Input, message } from "antd";
import genreSevice from "../../../services/genreSevice";
const CreateGenre = () => {
  const onFinish = async (values: object) => {
    try {
      const result = await genreSevice.createGenre(values);
      if (result) {
        message.success(result.data.message);
      }
    } catch (error) {
      message.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-full">
      <Form
        style={{ width: 300 }}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          name="categoryName"
          label="Genre Name"
          rules={[
            { required: true, message: "Please input your genre name!" },
            {
              type: "string",
              min: 3,
              message: "genre name must be at least 3 characters!",
            },
          ]}
        >
          <Input placeholder="genre name" />
        </Form.Item>
        <Form.Item>
          <Button className="mt-3" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateGenre;
