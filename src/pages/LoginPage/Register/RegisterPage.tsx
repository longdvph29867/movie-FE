import { Form, Input, message } from "antd";
import { RegisterType } from "../../../types/login";
import { Link } from "react-router-dom";
import "../Login/loginPage.css";
import { localUserService } from "../../../services/localService";
import loginService from "../../../services/loginService";
import { useLoading } from "../../../hooks/useSpinner";

const RegisterPage = () => {
  const { startSpinner, stopSpinner } = useLoading();
  const onFinish = (values: RegisterType) => {
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    const postRegister = async () => {
      startSpinner();
      try {
        const res = await loginService.register(data);
        if (res) {
          const infoUser = {
            ...res.data,
          };
          localUserService.set(infoUser);
          stopSpinner();
          message.success("Register successfully!");
          if (infoUser.user.role === "admin") {
            setTimeout(() => {
              window.location.href = "/admin/movies";
            }, 1200);
          } else {
            setTimeout(() => {
              window.location.href = "/";
            }, 1500);
          }
        }
      } catch (error) {
        stopSpinner();
        console.log(error);
        message.error(error.response.data.message);
      }
    };
    postRegister();
  };
  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="login-page sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="w-auto h-10 mx-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png"
          alt="FPT_Polytechnic"
        />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-[#cfddeb]">
          Create an Account
        </h2>
      </div>
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form
          layout="vertical"
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
        >
          <Form.Item
            label={
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-[#cfddeb]"
              >
                Email address
              </label>
            }
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              {
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email address!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-[#cfddeb]"
              >
                Your Name
              </label>
            }
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-[#cfddeb]"
              >
                Password
              </label>
            }
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
              {
                validator: (_, value) => {
                  const regexPass = /(?=.*[A-Za-z])(?=.*\d)/;
                  if (value && value.length < 6) {
                    return Promise.reject(
                      "Password must be at least 6 characters!"
                    );
                  }
                  if (value && !regexPass.test(value)) {
                    return Promise.reject(
                      "Password requires 1 letter and 1 number!"
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label={
              <label
                htmlFor="rePassword"
                className="block text-sm font-medium leading-6 text-[#cfddeb]"
              >
                Confirm Password
              </label>
            }
            name="rePassword"
            rules={[
              {
                required: true,
                message: "Please enter your confirm password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Passwords do not match!");
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <div className="flex justify-between sm:items-end items-start gap-1 sm:flex-row flex-col pt-5">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#F27221] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign In
            </button>
          </div>
        </Form>
        <p className="mt-10 text-sm text-center text-gray-300">
          Already a member?
          <Link
            to="/login"
            className="font-semibold leading-6 text-[#F27221] hover:opacity-90 ml-1"
          >
            Log in now!
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegisterPage;
