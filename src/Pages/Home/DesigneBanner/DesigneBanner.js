import React from "react";

const DesigneBanner = () => {
  return (
    <div  className="grid md:grid-cols-2 justify-content-center">
       <div className="p-10">
       <h1 className="text-3xl">
        Design Your <br /> Comfort Zone{" "}
      </h1>
      <p className="mt-10">
        Electronic commerce (ecommerce) content is the material that is created
        to attract potential customers over an electronic network. Ecommerce
        content includes tutorials, social media, user-made posts, product
        descriptions, and blog posts. Here's how Salsify's Product Experience
        Management Platform works.
      </p>
      <button className="btn btn-primar mt-5">Show Products</button>
       </div>
       <div>
        <img className="w-[500px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvR3S-kcmHzcBDn4IGwSy1d2wzgpZAIBu7aGzBfPXs2UdiP73OckYClR-h9oNGk0h1sY&usqp=CAU" alt="" />
        {/* <img className="w-[500px]" src="https://i.ibb.co/PY0r1vH/banner.png" alt="" /> */}
       </div>
    </div>
  );
};

export default DesigneBanner;
