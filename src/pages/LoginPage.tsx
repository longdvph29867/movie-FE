const LoginPage = () => {
  return (
    <>
      <div
        className="min-h-screen relative"
        style={{ backgroundImage: "url(/public/bg-2.jpg)" }}
      >
        <div className="absolute w-full h-full" />
        <div className="relative flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png"
              alt="FPT_Polytechnic"
            />
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-[#cfddeb]">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-5" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-[#cfddeb]"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md outline-none border-0 py-1.5 shadow-sm px-3 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-[#cfddeb]"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-[#F27221] hover:opacity-90"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md outline-none border-0 py-1.5 shadow-sm px-3 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#F27221] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-300">
              Not a member?
              <a
                href="#"
                className="font-semibold leading-6 text-[#F27221] hover:opacity-90"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
