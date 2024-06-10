import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
 
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import axios from "axios";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({education}) => {
  return (
    <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={education.date}
    iconStyle={{ background: education.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={education.icon}
          alt={education.companyname}
          className='w-[90%] h-[90%] object-contain rounded-[20px]'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'> {education.companyname}</h3>
      <p
        className='text-secondary text-[16px] font-semibold'
        style={{ margin: 0 }}
      >{education.title}
        
      </p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
    
        <li
         
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {education.description}
        </li>
   
    </ul>
  </VerticalTimelineElement>
  );
};

const Education = () => {
    const [educations,seteducation]=useState()
    const api = axios.create({
      baseURL: import.meta.env.VITE_API_URL
    });
  
    useEffect(()=>{

        api.get('/education/')
        .then((res) => seteducation(res.data))

    },[])


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Here is My Education
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {educations?.map((e) => (
            <EducationCard
              key={e.url}
              education={e}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "work");
