import React from "react";
import { GiStairsGoal } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { TiAttachmentOutline } from "react-icons/ti";
import { TfiFiles } from "react-icons/tfi"
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<TfiFiles />}
        title="Document Creation"
        subTitle="Document Creation service provides professional assistance in crafting various documents tailored to your needs, ensuring meticulous attention to detail and effectiveness."
      />
      <ServicesCard
        icons={<TiAttachmentOutline />}
        title="Personal Coaching"
        subTitle="Empower your personal and professional growth with our tailored coaching services, designed to unlock your full potential and achieve your goals effectively."
      />
      <ServicesCard
        icons={<BsGraphUpArrow />}
        title="Financial Advisory"
        subTitle="Navigate your financial landscape with confidence and precision through our comprehensive Financial Advisory Service, where expert guidance and strategic planning empower you to optimize wealth management, secure your future, and achieve your financial goals."
      />
      <ServicesCard
        icons={<GiStairsGoal />}
        title="Goal Achievement"
        subTitle="Elevate your aspirations and accelerate your journey towards success with our strategic goal achievement service, offering tailored guidance and proven methodologies to transform your ambitions into tangible outcomes."
      />
    </div>
  );
};

export default MyServices;
