import { Button, Form, Input, message } from "antd";
import genreSevice from "../../../services/genreSevice";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Genre } from "../../../types/genres";
import { useLoading } from "../../../hooks/useSpinner";
const UpdateGenre = () => {
  const navigate = useNavigate();
  const [genreId, setGenreId] = useState("");
  const { genreSlug } = useParams();
  const [form] = Form.useForm();
  const { startSpinner, stopSpinner } = useLoading();
  useEffect(() => {
    if (genreSlug) {
      startSpinner();
      genreSevice
        .getGenreDetail(genreSlug)
        .then((res) => {
          stopSpinner();
          const data: Genre = res.data;
          setGenreId(data._id);
          form.setFieldsValue({ genreName: data.genreName });
        })
        .catch((error) => {
          stopSpinner();
          console.log(error);
        });
    }
  }, [form, genreSlug]);
  const onFinish = async (values: object) => {
    startSpinner();
    try {
      await genreSevice.updateGenre(genreId, values);
      message.success("Update genre successfully");
      stopSpinner();
      navigate("/admin/genres");
    } catch (error) {
      stopSpinner();
      message.error(error);
    }
  };
  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="max-w-lg w-full mx-auto px-5 pb-5 mt-20">
      <h3 className=" text-2xl text-yellow-400 text-center mt-6 mb-3">
        Update genre
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
            className="text-white bg-yellow-400"
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateGenre;
