import { Button, Form, Input, message } from "antd";
import genreSevice from "../../../services/genreSevice";
const CreateGenre = () => {
  const onFinish = async (values: object) => {
    try {
      await genreSevice.createGenre(values);
      message.success("Create genre successfully");
      setTimeout(() => {
        window.location.href = "/admin/genres";
      }, 1200);
    } catch (error) {
      message.error(error.response.data.message);
    }
  };
  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="max-w-lg w-full mx-auto px-5 pb-5 mt-20">
      <h3 className=" text-2xl text-slate-700 text-center mt-6 mb-3">
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
          label="Genre Name"
          name="genreName"
          rules={[{ required: true, message: "Please input your genre name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="text-white bg-green-500"
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
    // <div className="flex justify-center items-center h-full">
    //   <Form
    //     style={{ width: 300 }}
    //     layout="vertical"
    //     onFinish={onFinish}
    //     initialValues={{ remember: true }}
    //     autoComplete="off"
    //   >
    //     <Form.Item
    //       name="categoryName"
    //       label="Genre Name"
    //       rules={[
    //         { required: true, message: "Please input your genre name!" },
    //         {
    //           type: "string",
    //           min: 3,
    //           message: "genre name must be at least 3 characters!",
    //         },
    //       ]}
    //     >
    //       <Input placeholder="genre name" />
    //     </Form.Item>
    //     <Form.Item>
    //       <Button className="mt-3 bg-blue-600" htmlType="submit" type="primary">
    //         Submit
    //       </Button>
    //     </Form.Item>
    //   </Form>
    // </div>
  );
};

export default CreateGenre;
