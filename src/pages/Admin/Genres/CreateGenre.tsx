import { Button, Form, Input, message } from "antd";
import genreSevice from "../../../services/genreSevice";
import { useLoading } from "../../../hooks/useSpinner";
import { useNavigate } from "react-router-dom";
const CreateGenre = () => {
  const navigate = useNavigate();
  const { startSpinner, stopSpinner } = useLoading();
  const onFinish = async (values: object) => {
    startSpinner();
    try {
      const genre = await genreSevice.createGenre(values);
      stopSpinner();
      if (genre) {
        message.success("Create genre successfully");
        navigate("/admin/genres");
      }
    } catch (error) {
      stopSpinner();
      message.error(error.response.data.message);
    }
  };
  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="max-w-lg w-full mx-auto px-5 pb-5 mt-20">
      <h3 className=" text-2xl text-green-500 text-center mt-6 mb-3">
        Create new genre
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
          label="Genre"
          name="genreName"
          rules={[{ required: true, message: "Please input your genre!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="text-white bg-green-500"
          >
            Add genre
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateGenre;
