import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Upload,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";
import { FormMovieType, FormMovieValue } from "../../../types/movies";
import genreSevice from "../../../services/genreSevice";
import { useEffect, useState } from "react";
import { Genre } from "../../../types/genres";
import "./adminMovie.css";
import imageService from "../../../services/imageServices";
import { movieService } from "../../../services/movieService";
import { useNavigate } from "react-router-dom";

const AdminAddMovie = () => {
  const navigate = useNavigate();
  const [genres, setListGenres] = useState<Genre[]>([]);

  const fetchGenre = () => {
    genreSevice
      .getAllGenre()
      .then((res) => {
        setListGenres(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchGenre();
  }, []);
  const onFinish = (values: FormMovieValue) => {
    // console.log(values);
    const addMovie = async () => {
      const { originFileObj: imagePoster } = values.imagePoster[0] as any;
      const { originFileObj: imgBanner } = values.imgBanner[0] as any;
      const formData = new FormData();
      formData.append("images", imagePoster);
      formData.append("images", imgBanner);
      try {
        const { data: dataImages } = await imageService.postImage(formData);
        const urlImages: { url: string; publicId: string }[] = dataImages.data;
        const [imgPoster, imgBanner] = urlImages;
        const data: FormMovieType = {
          name: values.name,
          poster: imgPoster.url,
          director: values.director,
          genre: values.genre,
          cast: values.cast.split(","),
          runningTime: values.runningTime,
          language: values.language,
          country: values.country,
          trailer: values.trailer,
          imgBanner: imgBanner.url,
          description: values.description,
        };
        const res = await movieService.postMovie(data);
        if (res) {
          message.success("Add movie successfully!");
          navigate("/admin/movies");
        }
      } catch (error) {
        console.log(error);
        message.error(error.response.data.message);
      }
    };
    addMovie();
  };
  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-full mx-auto px-5 pb-5">
      <h3 className=" text-2xl text-green-500 text-center mt-6 mb-3">
        Add movie
      </h3>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
      >
        <div className="grid md:grid-cols-6 gap-3">
          {/* name */}
          <Form.Item
            label="Movie name"
            name="name"
            className="md:col-span-2"
            rules={[{ required: true, message: "Please enter this field!" }]}
          >
            <Input />
          </Form.Item>

          {/* director */}
          <Form.Item
            label="Director"
            name="director"
            className="md:col-span-2"
            rules={[{ required: true, message: "Please enter this field!" }]}
          >
            <Input />
          </Form.Item>

          {/* cast */}
          <Form.Item
            label="Cast"
            name="cast"
            className="md:col-span-2"
            rules={[{ required: true, message: "Please enter this field!" }]}
          >
            <Input />
          </Form.Item>

          {/* language */}
          <Form.Item
            label="Language"
            name="language"
            className="md:col-span-3"
            rules={[{ required: true, message: "Please enter this field!" }]}
          >
            <Input />
          </Form.Item>

          {/* country */}
          <Form.Item
            label="Country"
            name="country"
            className="md:col-span-3"
            rules={[{ required: true, message: "Please enter this field!" }]}
          >
            <Input />
          </Form.Item>

          {/* trailer */}
          <Form.Item
            label="Url Trailer"
            name="trailer"
            className="md:col-span-3"
            rules={[{ required: true, message: "Please enter this field!" }]}
          >
            <Input />
          </Form.Item>

          {/* runningTime */}
          <Form.Item
            label="Running Time"
            name="runningTime"
            className="md:col-span-3"
            rules={[{ required: true, message: "Please enter this field!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          {/* description */}
          <Form.Item
            label="Description"
            name="description"
            className="md:col-span-3"
            rules={[{ required: true, message: "Please enter this field!" }]}
          >
            <TextArea rows={7} />
          </Form.Item>

          {/* genre */}
          <Form.Item
            label="Genre"
            name="genre"
            className="md:col-span-3"
            rules={[{ required: true, message: "Please check this field!" }]}
          >
            <Checkbox.Group>
              <div className="grid grid-cols-3 gap-1">
                {genres.map((genre) => (
                  <Checkbox key={genre._id} value={genre._id}>
                    {genre.genreName}
                  </Checkbox>
                ))}
              </div>
            </Checkbox.Group>
          </Form.Item>

          {/* img poster */}
          <Form.Item
            label="Poster"
            name="imagePoster"
            valuePropName="fileList"
            className="md:col-span-3"
            getValueFromEvent={(e) => e?.fileList}
            rules={[
              { required: true, message: "Image is required!" },
              {
                validator(_, fileList) {
                  if (fileList) {
                    if (fileList.length > 1) {
                      return Promise.reject("Please select only 1 image!");
                    }
                    for (const file of fileList) {
                      if (file.size > 1024 * 1024) {
                        return Promise.reject("The image must be maximum 1MB!");
                      }
                      if (
                        !["image/jpeg", "image/jpg", "image/png"].includes(
                          file.type
                        )
                      ) {
                        return Promise.reject(
                          "The file must be in PNG, JPG, or JPEG format!"
                        );
                      }
                    }
                    return Promise.resolve();
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Upload.Dragger
              multiple
              listType="picture"
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload.Dragger>
          </Form.Item>

          {/* img banner */}
          <Form.Item
            label="Banner"
            name="imgBanner"
            valuePropName="fileList"
            className="md:col-span-3"
            getValueFromEvent={(e) => e?.fileList}
            rules={[
              { required: true, message: "Image is required!" },
              {
                validator(_, fileList) {
                  if (fileList) {
                    if (fileList.length > 1) {
                      return Promise.reject("Please select only 1 image!");
                    }
                    for (const file of fileList) {
                      if (file.size > 1024 * 1024) {
                        return Promise.reject("The image must be maximum 1MB!");
                      }
                      if (
                        !["image/jpeg", "image/jpg", "image/png"].includes(
                          file.type
                        )
                      ) {
                        return Promise.reject(
                          "The file must be in PNG, JPG, or JPEG format!"
                        );
                      }
                    }
                    return Promise.resolve();
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Upload.Dragger
              multiple
              listType="picture"
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload.Dragger>
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="text-white bg-green-500"
          >
            Add movie
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminAddMovie;
