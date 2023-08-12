import React from "react";
import Container from "../../helpers/Container";
import about from "../../assets/images/about.png";
import mission from "../../assets/images/mission.png";
import vision from "../../assets/images/vission.png";
import value from "../../assets/images/VALUE.png";
import aim from "../../assets/images/aim.png";
import founder from "../../assets/images/founder.png";
import cof from "../../assets/images/cof.png";

const data = [
  "To bring hope to underprivileged students within Tertiary institutions in the Nation.",
  "To increase the awareness of privileged students of the need to participate in community service initiatives.",
  "To raise a great and substantial generation of change agents/nation builders within Tertiary Institutions across the Nation.",
  "To provide valuable and life changing mentorship to underprivileged/less privileged  students.",
  "To improve the educational outcomes of underprivileged children by enhancing teacher quality through appropriate professional development programmes.",
  "To provide rock-buttom finance for students across Tertiary institutions in the Nation",
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

const members = [
  "OLAWEPO OLANIYI OLAMILEKAN.",
  "ABIOYE BASIT AYOMIDE",
  "INALEGWU VICTOR",
  "WAHAB ADAM AJIBOLA",
  "ABDULAFEEZ ABDULROKEEB",
  "OYEDELE ABDULMALIK",
  "OSAYE BOLUWATIFE",
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
                with stakeholders expand for self development and realization
                among the youth, poor, minorities and vulnerable and population.
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
                  <div key={index} className="bg-black rounded-2xl p-4 w-full">
                    <p>{value}</p>
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
                  <div key={index} className="bg-black rounded-2xl p-4">
                    <p>{value}</p>
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

            <div className="flex flex-col items-center my-5">
              <div className="flex md:flex-row flex-col  md:gap-5 gap-6">
                <div className="flex flex-col gap-2 items-center">
                  <div className="w-[12em] h-[12em] rounded-full  backdrop-blur-sm bg-white/30 shadow-2xl flex flex-col overflow-hidden ">
                    <img src={founder} alt="" />
                    <div className="relative -top-[2rem]">
                      <p className="bg-black text-white p-1 text-[12px] text-center">
                        FOUNDER
                      </p>
                    </div>
                  </div>
                  <p className=" font-[800] p-1 ">(OLATUNJI ABDUL'HAQQ  OLAMIDE)</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="w-[12em] h-[12em] rounded-full  backdrop-blur-sm bg-white/30 shadow-2xl flex flex-col overflow-hidden ">
                    <img src={cof} alt="" />
                    <div className="relative -top-[2rem]">
                      <p className="bg-black text-white p-1 text-[12px] text-center">
                        CO-FOUNDER
                      </p>
                    </div>
                  </div>
                  <p className=" font-[800] p-1 ">(OSHINYEMI ISMAIL ADEMOLA)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-white text-[1.3em] backdrop-blur-sm bg-white/30 p-5 rounded-2xl  flex flex-col gap-4 items-center mb-3">
            <div className="flex md:flex-col flex-row  gap-2 items-center text-black ">
              <p className="font-[700]">PIONEER MEMBERS</p>
            </div>
            <div className="flex flex-col gap-4">
              {members.map((value, index) => (
                <div key={index} className="bg-black rounded-2xl p-4">
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
