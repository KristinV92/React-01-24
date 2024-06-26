import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiSend } from "react-icons/fi";
import CV from "../../assets/Kristin_Vaik_CV_eng.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Human Resources Specialist", "Investor", "Passion for Self Development"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5  flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h2 className="text-textColor text-4xl font-semibold">Kristin Vaik</h2>
          <p className="text-base text-designColor tracking-wide">
            {text}<Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a href="https://github.com/KristinV92/" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-xl" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vaikkristin/" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-xl" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@KristinV92/" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-xl" rel="noreferrer">
              <SiYoutubemusic />
            </a>
            <a href="https://www.facebook.com/Kristin.Vaik/" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-xl" rel="noreferrer">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/kristin.vaik/" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-xl" rel="noreferrer"> 
              <FiInstagram />
            </a>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <a href="mailto:kristin.lapsanit@gmail.com" className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            Contact me <FiSend />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;
