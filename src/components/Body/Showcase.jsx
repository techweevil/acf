import React from "react";

const Showcase = () => {
  return (
    // <div class=" bg-gradient-to-r from-cyan-500 to-[#865747]">
    <div class="bg-[url('././assets/images/bg.png')] h-screen">
      <div className="md:mx-[3rem] lg:mx-[5rem] mx-[1rem] lg:py-[2rem] md:py-[1.5rem] py-[1rem] h-full">
        <div className="backdrop-blur-sm bg-white/30 h-full">
          <div className="font-[700] text-[2em]">
            <p>ASCENSION</p>
            <p>CREW</p>
            <p>FOUNDATION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
