import React from "react";
import Container from "../../helpers/Container";
import about from "../../assets/images/about.png";
import mission from "../../assets/images/mission.png";
import vision from "../../assets/images/vission.png";
import value from "../../assets/images/VALUE.png";
import aim from "../../assets/images/aim.png";

const data = [
  "To bring hope to underprivileged students within Federal Polytechnic Offa and outside the Polytechnic.",
  "To increase the awareness of privileged students of the need to participate In community service initiatives.",
  "To raise a great and substantial generation of change agents/nation builders within the Polytechnic and outside the polytechnic.",
  "To provide valuable and Life changing mentorship to underprivileged students and children.",
  "To improve the educational outcomes of underprivileged children by enhancing teacher quality through appropriate professional development programmes.",
  "To provide rock-bottom finance for students within Federal Polytechnic Offa and outside the polytechnic.",
  "To provide humanitarian service that’s based solely on Orphan’s Affairs.",
  "To create awareness for skill acquisition for the under privileged as a source of poverty eradication.",
];

const values = [
  "Integrity and Transparency.",
  "Mutual respect and Discipline. ",
  "Fairness and Justice.",
  "Humanity and Impact. ",
  "Professionalism and Team Work.",
];

const About = () => {
  return (
    <div>
      <div className=" bg-black">
        <Container>
          <div className="flex flex-col gap-4">
            <div className="text-white text-[1.3em] backdrop-blur-sm bg-white/30 p-5 rounded-2xl  flex md:flex-row flex-col gap-4 items-center mb-3">
              <img
                className="md:w-[3em] w-[2em] max-w[4em]"
                src={about}
                alt=""
              />
              <p>
                THE ORGANIZATION ACF is a regional non-governmental organization
                established in August 2022 and also registered with the
                Corporate Affairs Commission, Abuja Nigeria.
              </p>
            </div>

            <div className="text-white text-[1.3em] backdrop-blur-sm bg-white/30 p-5 rounded-2xl  flex md:flex-row flex-col gap-4 items-center mb-3">
              <div className="flex md:flex-col flex-row  gap-2 items-center text-black ">
                <img
                  className="md:w-[3em] w-[2em] max-w[4em]"
                  src={mission}
                  alt=""
                />
                <p className="font-[700]">MISSION</p>
              </div>
              <p>
                Building an adequate society through constructive engagement
                with stakeholders expand oppyfor self development and
                realization among the youth, poor, minorities and vulnerable and
                population.
              </p>
            </div>

            <div className="text-white text-[1.3em] backdrop-blur-sm bg-white/30 p-5 rounded-2xl  flex md:flex-row flex-col gap-4 items-center mb-3">
              <div className="flex md:flex-col flex-row  gap-2 items-center text-black ">
                <img
                  className="md:w-[3em] w-[2em] max-w[4em]"
                  src={vision}
                  alt=""
                />
                <p className="font-[700]">VISION</p>
              </div>
              <p>
                An equitable society where the voice of the youth, less
                privileged, poor, vulnerable, minorities, communities is heard
                and their interests welfare prioritized.
              </p>
            </div>

            <div className="text-white text-[1.3em] backdrop-blur-sm bg-white/30 p-5 rounded-2xl  flex flex-col gap-4 items-center mb-3">
              <div className="flex md:flex-col flex-row  gap-2 items-center text-black ">
                <img
                  className="md:w-[3em] w-[2em] max-w[4em]"
                  src={value}
                  alt=""
                />
                <p className="font-[700]">CORE VALUES</p>
              </div>
              <div className="flex flex-col gap-4 w-full">
                {values.map((value, index) => (
                  <div className="bg-black rounded-2xl p-4 w-full">
                    <p key={index}>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-white text-[1.3em] backdrop-blur-sm bg-white/30 p-5 rounded-2xl  flex flex-col gap-4 items-center mb-3">
              <div className="flex md:flex-col flex-row  gap-2 items-center text-black ">
                <img
                  className="md:w-[3em] w-[2em] max-w[4em]"
                  src={aim}
                  alt=""
                />
                <p className="font-[700]">AIMS & OBJECTIVE</p>
              </div>
              <div className="flex flex-col gap-4">
                {data.map((value, index) => (
                  <div className="bg-black rounded-2xl p-4">
                    <p key={index}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
            <div>
                <h1 className="text-3xl font-bold text-center">OUR TEAM</h1>
            </div>
            </Container>
      </div>
    </div>
  );
};

export default About;
