import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseEmail from "../../UseEmail";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twittter.png";
// import facebook from "../../assets/images/facebook.png";
import wa from "../../assets/images/wa.png";
import qr from "../../assets/images/qr.png";

const Contact = () => {
  const navigate = useNavigate();
  const { sendEmail } = UseEmail(
    "https://public.herotofu.com/v1/f8562c60-3974-11ed-8ff6-d1ee553f3964"
  );

  const sendExample = (e) => {
    e.preventDefault();
    // Can be any data, static and dynamic
    sendEmail({
      from: email,
      name: name,
      message: message,
    });

    setTimeout(() => {
      alert("Your message has been sent");
      navigate("/");
    }, 3000);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="bg-[url('././assets/images/bg.jpg')] bg-cover bg-center">
      <div className="md:mx-[3rem] lg:mx-[5rem] mx-[1rem] lg:py-[2rem] md:py-[1.5rem] py-[1rem]  flex items-center">
        <div className="lg:w-[60%] md:w-[80%] w-full">
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-[700] text-[5em] text-[white] ">ACF</p>
              <div className="bg-[#7a4331] p-2">
                <p className="font-[600] text-[1.3em] text-white ">
                  CONTACT US
                </p>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-white/30 p-3">
              <form action="">
                <div className="flex flex-col gap-3">
                  <div>
                    <label htmlFor="name" className="text-[#7a4331] font-[600]">
                      Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      id="name"
                      className="w-full p-2 border-[#7a4331] border-2 rounded-md"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-[#7a4331] font-[600]"
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      id="email"
                      className="w-full p-2 border-[#7a4331] border-2 rounded-md"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-[#7a4331] font-[600]"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="6"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-2 border-[#7a4331] border-2 rounded-md"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      onClick={(e) => sendExample(e)}
                      className="bg-[#7a4331] text-white p-2 rounded-md w-full"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className=" flex flex-col gap-5">
              <div className="backdrop-blur-sm bg-white/30 p-3 flex gap-5">
                <a
                  target={"_blank"}
                  rel="noreferrer noopener"
                  href="https://www.instagram.com/ascension_crew_international/"
                >
                  <img className="w-[2.2em]" src={instagram} alt="" />
                </a>
                {/* <a
                  target={"_blank"}
                  rel="noreferrer noopener"
                  href="https://www.instagram.com/ascension_crew_international/"
                >
                  <img className="w-[2.2em]" src={facebook} alt="" />
                </a> */}
                <a
                  target={"_blank"}
                  rel="noreferrer noopener"
                  href="https://twitter.com/ascension_crew"
                >
                  <img className="w-[2.2em]" src={twitter} alt="" />
                </a>
                <a
                  target={"_blank"}
                  rel="noreferrer noopener"
                  href="https://wa.me/2348060746687?text="
                >
                  <img className="w-[2.2em]" src={wa} alt="" />
                </a>
              </div>

              <div className="backdrop-blur-sm bg-white/30 p-3 flex flex-col gap-3">
                <p className="text-[1.4em] font-[800] ">SCAN QR CODE </p>
                <img className="w-[9em]" src={qr} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
