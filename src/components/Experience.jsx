import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.companyname}
            className='w-[90%] h-[90%] object-contain rounded-[20px]'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'> {experience.companyname}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >{experience.title}
          
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
      
          <li
           
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {experience.description}
          </li>
     
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [experiences,setexperiences]=useState()
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
  });

  useEffect(()=>{
      api.get('/experience/')
      .then((res) => setexperiences(res.data))

  },[])


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences?.map((e) => (
            <ExperienceCard
              key={e.url}
              experience={e}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
