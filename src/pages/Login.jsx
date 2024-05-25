import { Link,useNavigate } from "react-router-dom";
import cover from "../assets/loginsignup.jpg";
import logo from "../assets/logo.svg";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

export const Login = () => {
  const nav = useNavigate();


  return (
    <div className="h-[100vh] border border-black flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-[40%] h-full flex lg:gap-20 gap-10 p-5 flex-col">
        <div className="flex items-center gap-3 cursor-pointer" onClick={()=>{nav('/')}}>
          <img src={logo} width={30} alt="MarketStore Logo" />
          <h3 className="text-xl font-semibold">MarketStore</h3>
        </div>
        <div className="flex flex-col gap-3 px-8">
          <h1 className="text-5xl font-semibold">Login</h1>
          <p className="text-sm font-light">
            Please login to continue to your account.
          </p>
          <form className="flex flex-col justify-center gap-3 mt-5">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <div className="relative max-w-full mb-3">
              <input
                className="w-full px-3 py-3 border border-gray-400 rounded-lg focus:border-blue-500"
                type="email"
                name="email"
                id="email"
              />
              <AiOutlineMail className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
            </div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <div className="relative max-w-full">
              <input
                className="w-full px-3 py-3 border border-gray-400 rounded-lg focus:border-blue-500"
                type="password"
                name="password"
                id="password"
              />
              <AiOutlineLock className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
            </div>
            <button
              className="max-w-full px-5 py-3 font-medium text-white bg-blue-500 rounded-xl"
              type="submit"
            >
              Login
            </button>
          </form>
          <p className="m-auto mt-10 text-base font-medium text-gray-400 lg:m-0 w-fit">
            Need an account?{" "}
            <Link className="text-base font-medium text-gray-600" to={"/signup"}>
              Sign up here
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[50%] h-1/3 lg:h-full">
        <img
          src={cover}
          alt="Login Cover"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};
