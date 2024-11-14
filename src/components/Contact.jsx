import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import email from "../assets/socials/sms.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tc9rase", "template_51j2i6l", form.current, {
        publicKey: "PHrmbehw-xpmpFuKd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
          <h1 className="text-primary font-semibold text-3xl mt-16">
            Connect with me:
          </h1>
          <p className="my-3 text-white md:w-3/4 leading-[2]">
            Satisfied with me? Please contact me
          </p>
          {/* social icons */}
          <div className="flex ">
            <a
              href="https://web.facebook.com/aaron.akinwande/"
              target="_blank"
              // rel="noreferrer"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              className="ml-4"
              href="https://www.instagram.com/aaron_akinwande/"
              target="_blank"
              // rel="noreferrer"
            >
              <img src={instagram} alt="" />
            </a>
            <a
              className="ml-4"
              href="aaronakinwande@gmail.com"
              target="_blank"
              // rel="noreferrer"
            >
              <img src={email} alt="" />
            </a>
          </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
          <p className="mt-16 text-white text-2xl mb-6">
            Contact me, let's make magic together
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Name:"
              className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded "
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address:"
              className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"
            />
            <textarea
              name="message"
              id="message"
              cols="54"
              rows="4"
              className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2"
              placeholder="Message Content:"
            ></textarea>
            <button
              type="submit"
              value="send"
              className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
