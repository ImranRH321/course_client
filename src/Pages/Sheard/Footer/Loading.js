import React from "react";
import { Puff } from "react-loader-spinner";

const Loading = () => {
    // jinis ki 
// ar kemne kora jay 
// kaj da ki hobe 
// kaj d kivabe korte hobe 
// kaj ta ki hoitace 
// ki kore 
// kivabe kore 
// ki korle ki hoy 
// =========================
// ki amon kaj ase jet kew taka na dileo kormo 
// na korle o kormo 
// val lage ajonno 

  return (
    <div className="flex justify-center items-center  content-center lg:h-screen ">
      <div className="">
        <Puff
          height="150"
          width="200"
          radius={1}
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loading;



