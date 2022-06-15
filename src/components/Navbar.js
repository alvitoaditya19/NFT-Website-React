/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand lg:ml-9 ml-0" href="#">
        <h1 className="text-color-pink text-2xl font-semibold">
          NFT <span className="text-white">Everywhere</span>
        </h1>
      </a>
      <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        // style={{ color: "white" }}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav ms-auto">
          <a class="nav-item nav-link text-white text-xl mr-9" href="#">
            Explore <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link text-white text-xl mr-9" href="#">
            Stats
          </a>
          <a class="nav-item nav-link text-white text-xl mr-9" href="#">
            Help
          </a>
          <button class="bg-[#4D415D] text-white hover:bg-[#C93D8D] text-button-navbar font-medium py-2 px-8 text-xl rounded-lg">
            Button
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
