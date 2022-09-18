import React from "react";

const Container = (props) => {
  return (
    <div className="md:mx-[3rem] lg:mx-[5rem] mx-[1rem] lg:py-[2rem] md:py-[1.5rem] py-[1rem] ">
      {props.children}
    </div>
  )
};

export default Container;
