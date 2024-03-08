import { Form, Input, message } from "antd";
import { LoginType } from "../../../types/login";
import { Link } from "react-router-dom";
import "./loginPage.css";
import { localUserService } from "../../../services/localService";
import loginService from "../../../services/loginService";

const LoginPage = () => {
  const onFinish = (values: LoginType) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    const postLogin = async () => {
      try {
        const res = await loginService.login(data);
        if (res) {
          const infoUser = {
            ...res.data,
          };
          localUserService.set(infoUser);
          message.success("Login successfully!");
          if (infoUser.user.role === "admin") {
            setTimeout(() => {
              window.location.href = "/";
            }, 1200);
          } else {
            setTimeout(() => {
              window.location.href = "/";
            }, 1500);
          }
        }
      } catch (error) {
        console.log(error);
        message.error(error.response.data.message);
      }
    };
    postLogin();
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
          Login to your account
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
              <div className="w-full flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-[#cfddeb]"
                >
                  Password
                </label>
                <div className="text-xs">
                  <a
                    href="#"
                    className="text-[#F27221] hover:text-[#F27221] hover:opacity-90"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            }
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <div className="flex justify-between sm:items-end items-start gap-1 sm:flex-row flex-col pt-5">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#F27221] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </Form>
        <p className="mt-10 text-sm text-center text-gray-300">
          Not a member?
          <Link
            to="/register"
            className="font-semibold leading-6 text-[#F27221] hover:opacity-90"
          >
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
