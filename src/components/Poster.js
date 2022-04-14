import React from "react";

function Poster() {
  return (
    <>
      <div
        className="container-fluid bg-auto bg-center pt-40 pb-40"
        style={{
          backgroundImage: `url(${require("../assets/img-poster.png")})`,
        }}
      >
        <div className="container">
          <div className="justify-content-center text-center">
            <h1 className="text-white lg:text-5xl text-3xl font-semibold mb-2">
              Ready to Collect NFT?
            </h1>
            <h1 className="text-white lg:text-xl text-lg opacity-50 font-medium mb-6">You can collect NFT from sells our digital asset in here</h1>
            <button class="bg-[#C93D8D] hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg">
                Start Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Poster;
