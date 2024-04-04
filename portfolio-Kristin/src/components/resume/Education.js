import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { FaFlag } from "react-icons/fa";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Human Resources Specialist"
          subTitle="JELD-WEN Eesti AS"
          des="I was responsible for the implementation, management, and regular updates of Estonian personnel procedures, showcasing adaptability to changing regulations. 
          Provided valuable support and guidance to factory department managers within the scope of my expertise.
          Conducted training sessions for factory department managers and shift supervisors, enhancing their skills and knowledge. 
          Actively participated in diverse personnel projects, demonstrating flexibility and commitment to organizational goals."
        />
        <ResumeCard
          badge="01.2019 - 04.2022"
          title="Store Manager"
          subTitle="Kiviõli Kaubahoov AS"
          des="Ensured the smooth operation of the Rakvere Husqvarna dealership, including the store and repair workshop, and ensuring customer satisfaction.
          Responsibilities included assigning tasks to sales mechanics, managing the website/e-shop, preparing pre-ordersand ordering spare parts,
          creating price quotes and invoices, handling warranty documentation, managing work hours and vacation schedules, 
          as well as preparing and compiling documents within the specified scope of activities."
        />
        <ResumeCard
          badge="12.2016 - 07.2017"
          title="Sales Consultant"
          subTitle="Autoesindus OÜ"
          des="Providing prompt and effective service to customers, presenting vehicles, preparing sales, leasing, and insurance offers,
          coordinating the scheduling of sold cars in collaboration with the service and parts departments, ordering additional accessories,
          daily engagement with customer cases on the salesperson's desk at Automasters, conveying necessary information for registration at the Road Administration (ARK),
          and compiling documentation. This includes handing over the vehicle, explaining its functions, and assembling and handing over all relevant documentation to the customer."
        />
        <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Languages" icon={<FaFlag />} />
        {/* English */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Estonian</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Hindi */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">English</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Arabic*/}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Norwegian</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[20%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2017 - 2021"
          title="Diploma of Professional Higher Education Business Administration - Personnel Management"
          subTitle="TTK University of Applied Sciences - Institute of Service Economy"
        />
        <ResumeCard
          badge="01.2024 - 03.2024"
          title="JavaScript & React: Intensive Learning to Become a Front-End Specialist From Scratch"
          subTitle="Aurora Development OÜ"
          des="I have basic knowledge of HTML, CSS and JavaScript languages.
          I can utilize the capabilities of the React web framework and I can use Visual Studio Code platform for front-end development.
          I have sufficient knowledge of React front-end development to create output for independent further learning and are capable
          of thereby obtaining an IT-related job through the training."
        />
        <ResumeCard
          badge="10.2023 - 11.2023"
          title="JCI Development Package - Training Series for Proactive Individuals"
          subTitle="JCI Estonia"
          des="Feedback and Communication, Reflection, People-Centric Leadership - Christjan Schumann
          Masterclass in Public Speaking - Ene Seidla
          Masterclass in Time Management - Productivity Club
          Working as a Unified Team, Expressing Support, Motivating and Inspiring - Meelis Lang"
        />
        <ResumeCard
          badge="10.2023 - 10.2023"
          title="Designing Advertising Materials in Canva Design Program"
          subTitle="Rakvere Vocational School"
          des="Proficient in Utilizing the Open-Source Design Program Canva, Capable of:
          Designing advertising materials using pre-existing templates
          Modifying text, shapes, photos, aligning elements, and selecting colors
          Adding elements, frames, and videos
          Employing backgrounds and creating custom designs
          Downloading and sharing various file formats"
        />
        <ResumeCard
          badge="05.2023 - 06.2023"
          title="Advanced Excel Training"
          subTitle="Rakvere Vocational School"
          des="Has knowledge of the use cases and capabilities of MS Excel. 
          Works in spreadsheetsoftware (logic and table preparation for calculations, analysis). 
          Works with extensive datatables, utilizing their functions. Can design tables. Creates and processes charts."
        />
        {/* <ResumeCard
          badge="02.2018 - 03.2018"
          title="Personnel work"
          subTitle="Reiting PR OÜ"
          des="The training provided an overview of the fundamental knowledge required for humanresources, covering aspects from workforce planning,
          the selection process, recruitment,document processing, to the planning of training sessions and development discussions. 
          Iam familiar with the principles of staff motivation and proficient in personneldocumentation."
        />
        <ResumeCard
          badge="03.2018 - 03.2018"
          title="Written self-expression: fluent and correct language usage"
          subTitle="Excellence Koolitus- ja Arenduskeskus OÜ"
          des="During the training, I learned how to compose grammatically correct and clear officialletters. Additionally,
          we familiarized ourselves with the latest language rules andvocabulary. We learned to express ourselves logically in writing,
          considering the impactand purpose of conveying a message, aiming to ensure credibility and correctness for awide range of letter recipients."
        /> */}
      </div>
    </div>
  );
};

export default Education;
