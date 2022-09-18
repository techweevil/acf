import React from "react";

const Showcase = () => {
  return (
    // <div class=" bg-gradient-to-r from-cyan-500 to-[#865747]">
    <div class="bg-[url('././assets/images/bg.png')] ">
      <div className="md:mx-[3rem] lg:mx-[5rem] mx-[1rem] lg:py-[2rem] md:py-[1.5rem] py-[1rem] h-full">
        <div className="backdrop-blur-sm bg-white/30 p-1">
          <div className="py-[10px]">
            <p className="font-[700] text-center lg:text-[2em] md:text-[1.5em] text-[1em]  ">--AIMS/OBJECTIVES--</p>
            <hr className="bg-red-400" />
          </div>
          <div className="font-[700] lg:text-[2em] md:text-[1.5em] text-[1em] flex flex-col gap-6">
            <p>
              —To bring hope to underprivileged students within Federal
              Polytechnic Offa and outside the Polytechnic.
            </p>
            <p>
              —To increase the awareness of privileged students of the need to
              participate In community service initiatives.
            </p>
            <p>
              —To raise a great and substantial generation of change
              agents/nation builders within the Polytechnic and outside the
              polytechnic.
            </p>
            <p>
              —To provide valuable and Life changing mentorship to
              underprivileged students and children.
            </p>
            <p>
              —To improve the educational outcomes of underprivileged children
              by enhancing teacher quality through appropriate professional
              development programmes.
            </p>
            <p>
              —To provide rock-bottom finance for students within Federal
              Polytechnic Offa and outside the polytechnic.
            </p>
            <p>
              —To provide humanitarian service that’s based solely on Orphan’s
              Affairs.
            </p>
            <p>
              —To create awareness for skill acquisition for the under
              privileged as a source of poverty eradication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
