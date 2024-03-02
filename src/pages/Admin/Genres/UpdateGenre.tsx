import { Button, Form, Input, message } from "antd";
import genreSevice from "../../../services/genreSevice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Genre } from "../../../types/genres";
const UpdateGenre = () => {
  const { genreSlug } = useParams();
  const [form] = Form.useForm();
  useEffect(() => {
    if (genreSlug) {
      genreSevice.getGenreDetail(genreSlug).then((res) => {
        const data: Genre = res.data;
        form.setFieldsValue({ genreName: data.genreName });
      });
    }
  }, [form, genreSlug]);
  const onFinish = async (values: object) => {
    try {
      const result = await genreSevice.updateGenre(values);
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
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          name="genreName"
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
          <Button className="mt-3 bg-blue-600" htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateGenre;
