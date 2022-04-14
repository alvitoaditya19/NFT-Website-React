import React from "react";

function PopularItem() {
  return (
    <>
      <div className="container-fluid bg-[#120227] pb-20">
        <div className="container">
          <div className="flex justify-between pt-8 mb-3">
            <div className="text-white font-semibold lg:text-xl text-lg">
              Popular Items
            </div>
            <div className="text-[#C93D8D] font-semibold lg:text-xl text-lg">
              See All Items
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4  mb-lg-0 mb-4">
              <div className="bg-[#1F0443] rounded-xl p-6">
                <img
                  src={require("../assets/img-one.png")}
                  alt=""
                  className="rounded-xl h-100 w-full mb-4"
                />
                <div className="flex justify-between mb-2">
                  <h1 className="text-lg text-white font-medium opacity-80">
                    Vadim Bogulov
                  </h1>
                  <h1 className="text-lg text-white font-medium opacity-80">
                    Price
                  </h1>
                </div>
                <div className="flex justify-between mb-3">
                  <h1 className="text-xl text-white font-bold">
                    Monalisa Digital
                    <br />
                    Arts #001
                  </h1>
                  <h1 className="text-xl text-white font-bold">0.01</h1>
                </div>
                <button className="bg-[#C93D8D] hover:bg-blue-700 text-white text-center rounded font-semibold py-3 w-full block">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-4">
              <div className="bg-[#1F0443] rounded-xl p-6">
                <img
                  src={require("../assets/img-one.png")}
                  alt=""
                  className="rounded-xl h-100 w-full mb-4"
                />
                <div className="flex justify-between mb-2">
                  <h1 className="text-lg text-white font-medium opacity-80">
                    Vadim Bogulov
                  </h1>
                  <h1 className="text-lg text-white font-medium opacity-80">
                    Price
                  </h1>
                </div>
                <div className="flex justify-between mb-3">
                  <h1 className="text-xl text-white font-bold">
                    Monalisa Digital
                    <br />
                    Arts #001
                  </h1>
                  <h1 className="text-xl text-white font-bold">0.01</h1>
                </div>
                <button className="bg-[#C93D8D] hover:bg-blue-700 text-white text-center rounded font-semibold py-3 w-full block">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-4">
              <div className="bg-[#1F0443] rounded-xl p-6">
                <img
                  src={require("../assets/img-one.png")}
                  alt=""
                  className="rounded-xl h-100 w-full mb-4"
                />
                <div className="flex justify-between mb-2">
                  <h1 className="text-lg text-white font-medium opacity-80">
                    Vadim Bogulov
                  </h1>
                  <h1 className="text-lg text-white font-medium opacity-80">
                    Price
                  </h1>
                </div>
                <div className="flex justify-between mb-3">
                  <h1 className="text-xl text-white font-bold">
                    Monalisa Digital
                    <br />
                    Arts #001
                  </h1>
                  <h1 className="text-xl text-white font-bold">0.01</h1>
                </div>
                <button className="bg-[#C93D8D] hover:bg-blue-700 text-white text-center rounded font-semibold py-3 w-full block">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularItem;
