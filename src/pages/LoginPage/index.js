import Footer from "../../components/Footer";
import Image from "react";
import Head from "../../components/Head";
import Jscript from "../../components/Jscript";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { SigninThumbnail } from "../../assets";

export default function LoginPage() {
  return (
    <>
      <Head></Head>
      <div className="container-fluid bg-[#120227] lg:-m-16 -m-0 lg:pt-20 sm:pt-2">
        <Navbar />
        <div className="container lg:mt-11 mt-3 sign-in">
          <div className="flex">
            <div className="md:w-1/2 w-full lg:px-16 px-6 pb-6 bg-[#1F0443] md:rounded-l-3xl">
              <h1 className="text-white font-semibold text-[36px] mt-6">Login</h1>
              <h1 className="text-white font-semibold mt-7 text-[24px]">
                Username or email
              </h1>
              <input
                type="form"
                className="text-lg py-3 mt-3 form-control bg-[#321655] text-white"
                placeholder="Your email"
              />
              <h1 className="text-white font-semibold mt-6 text-[24px]">
                Password
              </h1>
              <input
                type="form"
                className="text-lg py-3 mt-3 form-control bg-[#321655] text-white"
                placeholder="Your password"
              />
              <div className="flex justify-between items-center mt-8">
                <div className="flex">
                  <input
                    type="checkbox"
                    id="topping"
                    name="topping"
                    value="Paneer"
                  />
                  <h1 className="text-white font-semibold lg:text-[20px] text-[16px] ml-2">
                    Remember Me
                  </h1>
                </div>
                <h1 className="font-semibold lg:text-[20px] text-[16px] text-[#C93D8D]">
                  Forgot Password?
                </h1>
              </div>
              <Link style={{ textDecoration: "none" }} to="/login">
                <button class="bg-[#C93D8D] text-white text-button-navbar font-medium py-2 my-8 text-xl w-full rounded-lg">
                  Login
                </button>
              </Link>
              <div className="flex">
                <h1 className="text-white font-semibold lg:text-[20px] text-[16px] mr-2">
                  Don’t have an account?
                </h1>
                <Link style={{ textDecoration: "none" }} to="/help">
                  <h1 class="font-semibold text-[#C93D8D] lg:text-[20px] text-[16px]">
                    Register here!!
                  </h1>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 w-0 bg-[#1F0443] rounded-r-3xl">
              <img src={SigninThumbnail} alt="" className="w-full h-[560px] rounded-r-3xl"/>
            </div>
          </div>
        </div>
        <Footer />
        <Jscript />
      </div>
    </>
  );
}
