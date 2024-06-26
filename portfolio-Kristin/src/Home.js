import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import Left from './components/home/Left';
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";

const Home = () => {
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <div className="w-full lgl:w-[85%] h-full lgl:h-[85%] bg-transparent text-white z-50 flex items-start justify-between p-4 lgl:p-0">
      <div className="w-16 h-96 bg-transparent hidden lgl:flex flex-col gap-4 text-right">
        <div className="w-full h-40 bg-bodyColor rounded-3xl flex flex-col items-center justify-between py-6">
          {/* "About" button */}
          <span
            onClick={() => {
              setAbout(true);
              setResume(false);
              setContact(false);
            }}
            className={`
              ${about ? "text-designColor" : "text-textColor text-xl flex items-center justify-center hover:text-designColor cursor-pointer relative group"}
            `}
          >
            <FaUser />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 opacity-0 group-hover:opacity-100 transition-all duration-0 z-20">
              About
            </span>
          </span>

          {/* "Resume" button */}
          <span
            onClick={() => {
              setAbout(false);
              setResume(true);
              setContact(false);
            }}
            className={`
              ${resume ? "text-designColor" : "text-textColor text-xl flex items-center justify-center hover:text-designColor cursor-pointer relative group"}
            `}
          >
            <IoIosPaper />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 opacity-0 group-hover:opacity-100 transition-all duration-0 z-20">
              Resume
            </span>
          </span>

          {/* "Contact" button */}
          <span
            onClick={() => {
              setAbout(false);
              setResume(false);
              setContact(true);
            }}
            className={`
              ${contact ? "text-designColor" : "text-textColor text-xl flex items-center justify-center hover:text-designColor cursor-pointer relative group"}
            `}
          >
            <FaEnvelope />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 opacity-0 group-hover:opacity-100 transition-all duration-0 z-20">
              Contact
            </span>
          </span>
        </div>
      </div>
      <Left />
      <div className="w-full h-[96%] hidden lgl:flex justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
        {about && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>
        )}
        {resume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Resume />
          </motion.div>
        )}
        {contact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Contact />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;