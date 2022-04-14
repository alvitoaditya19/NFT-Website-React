/* eslint-disable react/style-prop-object */
import React from "react";

function Category() {
  return (
    <>
      <div className="container-fluid bg-[#120227]">
        <div className="container">
          <div className=" text-white font-semibold text-xl pt-8 mb-3">
            Category
          </div>
          <div className="row">
            <div className="col-lg-3 lg:mb-0 mb-3">
              <div
                className="rounded-[20px] h-44 w-auto relative"
                style={{
                  backgroundImage: `url(${require("../assets/img-one.png")})`,
                }}
              >
                <div className="absolute inline-block h-auto w-32 top-0 right-0 bg-[#120227] text-center category-title">
                  <h1 className="m-2 text-base text-white font-semibold">
                    Digital Arts
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 lg:mb-0 mb-3">
              <div
                className="rounded-[20px] h-44 w-auto relative"
                style={{
                  backgroundImage: `url(${require("../assets/img-two.png")})`,
                }}
              >
                <div className="absolute inline-block h-auto w-32 top-0 right-0 bg-[#120227] text-center category-title">
                  <h1 className="m-2 text-base text-white font-semibold">
                    Photography
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 lg:mb-0 mb-3">
              <div
                className="rounded-[20px] h-44 w-auto relative"
                style={{
                  backgroundImage: `url(${require("../assets/img-three.png")})`,
                }}
              >
                <div className="absolute inline-block h-auto w-32 top-0 right-0 bg-[#120227] text-center category-title">
                  <h1 className="m-2 text-base text-white font-semibold">
                    Trading Card
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 lg:mb-0 mb-3">
              <div
                className="rounded-[20px] h-44 w-auto relative"
                style={{
                  backgroundImage: `url(${require("../assets/img-four.png")})`,
                }}
              >
                <div className="absolute inline-block h-auto w-32 top-0 right-0 bg-[#120227] text-center category-title">
                  <h1 className="m-2 text-base text-white font-semibold">
                    Music
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
