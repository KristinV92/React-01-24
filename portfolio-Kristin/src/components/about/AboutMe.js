import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Kristin</h2>
          <p className="text-base leading-6 ">
          My career spans various roles, from sales and store management to HR specialization in a leading
          global manufacturer of doors and windows. I'm results-driven and proactive, seeking innovative
          solutions with a broad perspective. I prioritize precision and proactive planning, avoiding last-minute rushes. 
          Continuous learning is crucial, and I actively pursue professional development through diverse training programs. 
          Known for my friendly and caring nature, I stay calm in any situation, listening and empathizing with others. 
          Highly adaptable, I embrace new challenges with enthusiasm and efficiency.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
          <span className="aboutRightLiSpan">Zodiac sign:</span>
            Gemini
          </li>
          <li className="aboutRightLi">
          <span className="aboutRightLiSpan">Sleeping habit:</span>
            Early bird
          </li>
          <li className="aboutRightLi">
          <span className="aboutRightLiSpan">Hobbies:</span>
            Self development, music, healthy lifestyle, investing, technology
          </li>
          <li className="aboutRightLi">
          <span className="aboutRightLiSpan">Pets:</span>
                Golden Retriever & Miniature Pinscher
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
