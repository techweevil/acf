import React from "react";

const Showcase = () => {
  return (
    // <div class=" bg-gradient-to-r from-cyan-500 to-[#865747]">
    <div className="bg-[url('././assets/images/bg.jpg')] ">
      <div className="md:mx-[3rem] lg:mx-[5rem] mx-[1rem] lg:py-[2rem] md:py-[1.5rem] py-[1rem] h-screen flex items-center">
        <div className="lg:w-[60%] md:w-[80%] w-full">
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-[700] text-[5em] text-[white] ">ACF</p>
              <div className="bg-[#7a4331] p-2">
                <p className="font-[600] text-[1.3em] text-white ">
                  WITH PATIENCE...WE'LL WIN
                </p>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-white/30 p-3">
              <p className="text-white text-[1.3em] ">
                Ascension Crew foundation is a non governmental organization set
                up with the sole purpose of contributing to positive change in
                the economic and social status of Nigerians, the less
                privileged, the vulnerable and minorities through effective
                programs that delivers sustainable outcome.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
