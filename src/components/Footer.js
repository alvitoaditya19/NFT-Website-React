/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <>
      <section className="footer pt-50">
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 text-lg-start text-center">
                <div className="lg:ml-20 lg:mb-0 mb-14 ml-0">
                  <a href="">
                    <svg
                      width="190"
                      height="25"
                      viewBox="0 0 190 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.984 18H11.624L4.016 6.504V18H0.656V1.224H4.016L11.624 12.744V1.224H14.984V18ZM28.6484 1.248V3.96H21.6644V8.256H27.0164V10.92H21.6644V18H18.3044V1.248H28.6484ZM42.431 1.248V3.96H37.967V18H34.607V3.96H30.143V1.248H42.431Z"
                        fill="#C93D8D"
                      />
                      <path
                        d="M53.9613 3.96V8.16H59.6013V10.824H53.9613V15.264H60.3213V18H50.6013V1.224H60.3213V3.96H53.9613ZM68.9188 14.904L72.2788 4.704H75.8548L70.9348 18H66.8548L61.9588 4.704H65.5588L68.9188 14.904ZM90.1019 11.064C90.1019 11.544 90.0699 11.976 90.0059 12.36H80.2859C80.3659 13.32 80.7019 14.072 81.2939 14.616C81.8859 15.16 82.6139 15.432 83.4779 15.432C84.7259 15.432 85.6139 14.896 86.1419 13.824H89.7659C89.3819 15.104 88.6459 16.16 87.5579 16.992C86.4699 17.808 85.1339 18.216 83.5499 18.216C82.2699 18.216 81.1179 17.936 80.0939 17.376C79.0859 16.8 78.2939 15.992 77.7179 14.952C77.1579 13.912 76.8779 12.712 76.8779 11.352C76.8779 9.976 77.1579 8.768 77.7179 7.728C78.2779 6.688 79.0619 5.888 80.0699 5.328C81.0779 4.768 82.2379 4.488 83.5499 4.488C84.8139 4.488 85.9419 4.76 86.9339 5.304C87.9419 5.848 88.7179 6.624 89.2619 7.632C89.8219 8.624 90.1019 9.768 90.1019 11.064ZM86.6219 10.104C86.6059 9.24 86.2939 8.552 85.6859 8.04C85.0779 7.512 84.3339 7.248 83.4539 7.248C82.6219 7.248 81.9179 7.504 81.3419 8.016C80.7819 8.512 80.4379 9.208 80.3099 10.104H86.6219ZM95.9144 6.768C96.3464 6.064 96.9064 5.512 97.5944 5.112C98.2984 4.712 99.0984 4.512 99.9944 4.512V8.04H99.1064C98.0504 8.04 97.2504 8.288 96.7064 8.784C96.1784 9.28 95.9144 10.144 95.9144 11.376V18H92.5544V4.704H95.9144V6.768ZM114.978 4.704L106.746 24.288H103.17L106.05 17.664L100.722 4.704H104.49L107.922 13.992L111.402 4.704H114.978ZM135.221 4.704L131.333 18H127.709L125.285 8.712L122.861 18H119.213L115.301 4.704H118.709L121.061 14.832L123.605 4.704H127.157L129.653 14.808L132.005 4.704H135.221ZM144.527 4.512C145.535 4.512 146.431 4.736 147.215 5.184C147.999 5.616 148.607 6.264 149.039 7.128C149.487 7.976 149.711 9 149.711 10.2V18H146.351V10.656C146.351 9.6 146.087 8.792 145.559 8.232C145.031 7.656 144.311 7.368 143.399 7.368C142.471 7.368 141.735 7.656 141.191 8.232C140.663 8.792 140.399 9.6 140.399 10.656V18H137.039V0.24H140.399V6.36C140.831 5.784 141.407 5.336 142.127 5.016C142.847 4.68 143.647 4.512 144.527 4.512ZM165.266 11.064C165.266 11.544 165.234 11.976 165.17 12.36H155.45C155.53 13.32 155.866 14.072 156.458 14.616C157.05 15.16 157.778 15.432 158.642 15.432C159.89 15.432 160.778 14.896 161.306 13.824H164.93C164.546 15.104 163.81 16.16 162.722 16.992C161.634 17.808 160.298 18.216 158.714 18.216C157.434 18.216 156.282 17.936 155.258 17.376C154.25 16.8 153.458 15.992 152.882 14.952C152.322 13.912 152.042 12.712 152.042 11.352C152.042 9.976 152.322 8.768 152.882 7.728C153.442 6.688 154.226 5.888 155.234 5.328C156.242 4.768 157.402 4.488 158.714 4.488C159.978 4.488 161.106 4.76 162.098 5.304C163.106 5.848 163.882 6.624 164.426 7.632C164.986 8.624 165.266 9.768 165.266 11.064ZM161.786 10.104C161.77 9.24 161.458 8.552 160.85 8.04C160.242 7.512 159.498 7.248 158.618 7.248C157.786 7.248 157.082 7.504 156.506 8.016C155.946 8.512 155.602 9.208 155.474 10.104H161.786ZM171.079 6.768C171.511 6.064 172.071 5.512 172.759 5.112C173.463 4.712 174.263 4.512 175.159 4.512V8.04H174.271C173.215 8.04 172.415 8.288 171.871 8.784C171.343 9.28 171.079 10.144 171.079 11.376V18H167.719V4.704H171.079V6.768ZM189.782 11.064C189.782 11.544 189.75 11.976 189.686 12.36H179.966C180.046 13.32 180.382 14.072 180.974 14.616C181.566 15.16 182.294 15.432 183.158 15.432C184.406 15.432 185.294 14.896 185.822 13.824H189.446C189.062 15.104 188.326 16.16 187.238 16.992C186.15 17.808 184.814 18.216 183.23 18.216C181.95 18.216 180.798 17.936 179.774 17.376C178.766 16.8 177.974 15.992 177.398 14.952C176.838 13.912 176.558 12.712 176.558 11.352C176.558 9.976 176.838 8.768 177.398 7.728C177.958 6.688 178.742 5.888 179.75 5.328C180.758 4.768 181.918 4.488 183.23 4.488C184.494 4.488 185.622 4.76 186.614 5.304C187.622 5.848 188.398 6.624 188.942 7.632C189.502 8.624 189.782 9.768 189.782 11.064ZM186.302 10.104C186.286 9.24 185.974 8.552 185.366 8.04C184.758 7.512 184.014 7.248 183.134 7.248C182.302 7.248 181.598 7.504 181.022 8.016C180.462 8.512 180.118 9.208 179.99 10.104H186.302Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-lg-9 mt-lg-0 mt-20">
                <div className="row gap-sm-0">
                  <div className="col-md-2 col-6 mb-lg-0 mb-25">
                    <p className="text-lg font-semibold color-palette-1 mb-4">
                      Explore
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-4">
                        <a
                          href=""
                          className="text-lg color-palette-2 text-decoration-none"
                        >
                          Digital Arts
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          href=""
                          className="text-lg color-palette-2 text-decoration-none"
                        >
                          Photography
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          href=""
                          className="text-lg color-palette-2 text-decoration-none"
                        >
                          Trading Card
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          href=""
                          className="text-lg color-palette-2 text-decoration-none"
                        >
                          Music
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-2 col-6 mb-lg-0 mb-25">
                    <p className="text-lg font-semibold color-palette-1 mb-4">
                      Account
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-4">
                        <a
                          href=""
                          className="text-lg color-palette-2 text-decoration-none"
                        >
                          Login
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          href=""
                          className="text-lg color-palette-2 text-decoration-none"
                        >
                          Register
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-2 col-6 mb-lg-0 mb-25">
                    <p className="text-lg font-semibold color-palette-1 mb-4">
                      Stats
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-4">
                        <a
                          href=""
                          className="text-lg color-palette-2 text-decoration-none"
                        >
                          Ranking
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          href=""
                          className="text-lg color-palette-2 text-decoration-none"
                        >
                          Activity
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-2 col-6 mb-lg-0 mb-25">
                    <p className="text-lg font-semibold color-palette-1 mb-4">
                      Company
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-4">
                        <a
                          href=""
                          className="text-lg color-palette-2 text-decoration-none"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          href=""
                          className="text-lg color-palette-2 text-decoration-none"
                        >
                          Help
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          href=""
                          className="text-lg color-palette-2 text-decoration-none"
                        >
                          Terms of Services
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          href=""
                          className="text-lg color-palette-2 text-decoration-none"
                        >
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-2 col-6 mb-lg-0 mb-25">
                    <p className="text-lg font-semibold color-palette-1 mb-4">
                      Contact
                    </p>
                    <ul className="list-unstyled ">
                      <li className="mb-4">
                        <a
                          href=""
                          className="text-lg color-palette-2 text-decoration-none"
                        >
                          (022) 123 456
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          href=""
                          className="text-lg color-palette-2 text-decoration-none"
                        >
                          hello@nfteverywhere.com
                        </a>
                      </li>
                      <li className="mb-4 "></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
