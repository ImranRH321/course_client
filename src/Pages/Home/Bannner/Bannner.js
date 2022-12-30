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
      <div className=" ">
        <img
          className="w-full h-[500px] relative"
          id="slider_img"
          src="https://i.ibb.co/k33Q152/23.jpg"
          alt=""
        />
      </div>
      <div className="absolute   bg-red-300 w-[400px] h-[200px] mx-auto top-0 left-0 bottom-0  border">
        <div>
          <h2 className="text-3xl text-primary font-bold fongo-[propine]">
            this is new products{" "}
          </h2>
          <button className="btn btn-primary btn-sm">All product </button>
        </div>
      </div>
    </div>
  );
};

export default Bannner;
