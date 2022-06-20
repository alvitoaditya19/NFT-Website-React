import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <div className="container-fluid bg-[#120227] lg:-m-16 -m-0 lg:pt-20 sm:pt-2">
        <Navbar/>
        <div class="container lg:mt-10 mt-3">
          <div className="row justify-center items-center">
            <div className="col-lg-5">
              <h1 className="text-white">
                Create and Sell <br />
                Your Digital <br />
                Masterpiece
              </h1>
              <p class="mt-2 mb-2 text-[#FFFFFF] opacity-50">
                The biggest marketplace that sells digital<br />asset from crypto
              </p>
              <button class="bg-[#C93D8D] hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded">
                Button
              </button>
            </div>
          <div className="col-lg-7">
            <img src={require('../assets/img-header.png')} alt=""className="lg:h-full h-0"/>
          </div>1
          </div>
          <div className="row justify-center">
            <div className="col-lg-2 col-8 lg:mb-0 mb-3">
              <div
                className="w-auto h-28 rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(
              269.81deg,
              rgba(18, 2, 39, 0.2) 52.08%,
              rgba(18, 2, 39, 0.2) 52.08%,
              #120227 97.67%
            ), linear-gradient(
              179.37deg,
              rgba(18, 2, 39, 0.2) 53.66%,
              rgba(18, 2, 39, 0.2) 53.67%,
              #120227 91.45%
            ), url(${require("../assets/head1.png")})`,
                }}
              ></div>
            </div>
            <div className="col-lg-2 col-8 lg:mb-0 mb-3">
              <div
                className="w-auto h-28 rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(
              269.81deg,
              rgba(18, 2, 39, 0.2) 52.08%,
              rgba(18, 2, 39, 0.2) 52.08%,
              #120227 97.67%
            ), linear-gradient(
              179.37deg,
              rgba(18, 2, 39, 0.2) 53.66%,
              rgba(18, 2, 39, 0.2) 53.67%,
              #120227 91.45%
            ), url(${require("../assets/head2.png")})`,
                }}
              ></div>
            </div>
            <div className="col-lg-2 col-8 lg:mb-0 mb-3">
              <div
                className="w-auto h-28 rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(
              269.81deg,
              rgba(18, 2, 39, 0.2) 52.08%,
              rgba(18, 2, 39, 0.2) 52.08%,
              #120227 97.67%
            ), linear-gradient(
              179.37deg,
              rgba(18, 2, 39, 0.2) 53.66%,
              rgba(18, 2, 39, 0.2) 53.67%,
              #120227 91.45%
            ), url(${require("../assets/head3.png")})`,
                }}
              ></div>
            </div>
            <div className="col-lg-2 col-8 lg:mb-0 mb-3">
              <div
                className="w-auto h-28 rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(
              269.81deg,
              rgba(18, 2, 39, 0.2) 52.08%,
              rgba(18, 2, 39, 0.2) 52.08%,
              #120227 97.67%
            ), linear-gradient(
              179.37deg,
              rgba(18, 2, 39, 0.2) 53.66%,
              rgba(18, 2, 39, 0.2) 53.67%,
              #120227 91.45%
            ), url(${require("../assets/head4.png")})`,
                }}
              ></div>
            </div>
            <div className="col-lg-2 col-8 lg:mb-0 mb-3">
              <div
                className="w-auto h-28 rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(
              269.81deg,
              rgba(18, 2, 39, 0.2) 52.08%,
              rgba(18, 2, 39, 0.2) 52.08%,
              #120227 97.67%
            ), linear-gradient(
              179.37deg,
              rgba(18, 2, 39, 0.2) 53.66%,
              rgba(18, 2, 39, 0.2) 53.67%,
              #120227 91.45%
            ), url(${require("../assets/img-one.png")})`,
                }}
              ></div>
            </div>
            <div className="col-lg-2 col-8 lg:mb-0 mb-3">
              <div
                className="w-auto h-28 rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(
              269.81deg,
              rgba(18, 2, 39, 0.2) 52.08%,
              rgba(18, 2, 39, 0.2) 52.08%,
              #120227 97.67%
            ), linear-gradient(
              179.37deg,
              rgba(18, 2, 39, 0.2) 53.66%,
              rgba(18, 2, 39, 0.2) 53.67%,
              #120227 91.45%
            ), url(${require("../assets/img-one.png")})`,
                }}
              ></div>
            </div>
          </div>
          <div className="row justify-center">
            <div className="col-lg-1 text-center lg:mr-24 mr-0 lg:mb-0 mb-3">
              <h1 className="text-[32px] text-white font-semibold">51k+</h1>
              <h1 className="text-[20px] text-white font-normal">Artworks</h1>
            </div>
            <div className="col-lg-1 text-center lg:mr-24 mr-0 lg:mb-0 mb-3">
              <h1 className="text-[32px] text-white font-semibold">91k+</h1>
              <h1 className="text-[20px] text-white font-normal">Artist</h1>
            </div>
            <div className="col-lg-1 text-center lg:mr-24 mr-0 lg:mb-0 mb-3">
              <h1 className="text-[32px] text-white font-semibold">101k+</h1>
              <h1 className="text-[20px] text-white font-normal">Aucations</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
