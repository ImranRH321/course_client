import React, { useEffect } from "react";

const Bannner = () => {
  const images = [
    "https://i.ibb.co/wymSwpY/1.jpg",
    "https://i.ibb.co/0j4WNsT/2.jpg",
    "https://i.ibb.co/phHnRDZ/3.jpg",
    "https://i.ibb.co/tXVLW9x/4.jpg",
    "https://i.ibb.co/cx8ph9x/5.jpg",
    "https://i.ibb.co/x3PsnPz/6.jpg",
    "https://i.ibb.co/M7Vztt3/8.jpg",
    "https://i.ibb.co/tML1RLq/7.jpg",
    "https://i.ibb.co/HdLdWfM/9.jpg",
    "https://i.ibb.co/K2pH6V4/10.jpg",
    "https://i.ibb.co/QmpBnPS/11.jpg",
    "https://i.ibb.co/qkDMgsL/12.jpg",
    "https://i.ibb.co/tD81KGg/13.jpg",
    "https://i.ibb.co/hXRBzwd/14.jpg",
    "https://i.ibb.co/vPPs7m6/15.jpg",
    "https://i.ibb.co/54sfVRz/16.jpg",
    "https://i.ibb.co/7YjSPCY/17.jpg",
    "https://i.ibb.co/CMxs3wT/18.jpg",
    "https://i.ibb.co/rp6df93/19.jpg",
    "https://i.ibb.co/Bf9wZnN/20.jpg",
    "https://i.ibb.co/LYbR1Wq/21.jpg",
    "https://i.ibb.co/fNfCNpy/22.jpg",
    "https://i.ibb.co/k33Q152/23.jpg",
  ];

  let imgIndex = 0;
  useEffect(() => {
    const imgElement = document.getElementById("slider_img");

    setInterval(() => {
      if (imgIndex >= images.length) {
        imgIndex = 0;
      }
      const imgAll = images[imgIndex];
      imgElement.setAttribute("src", imgAll);
      imgIndex++;
    }, 5000);
  }, [imgIndex]);

  return (
    <div>
      <div className=" relative">
        <img
          className="w-full h-[500px] "
          id="slider_img"
          src="https://i.ibb.co/k33Q152/23.jpg"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="text-center mx-auto ">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>k
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannner;
