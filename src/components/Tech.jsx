import React, { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import axios from "axios";


const Tech = () => {
  const [technologies,settechnology] = useState()
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
  });

  useEffect(()=>{
    api
    .get('technologies/')
    .then((res) => settechnology(res.data))


  },[])

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10' >
      <h1>Skills</h1>
      {technologies?.map((t) => (
        <div className='w-28 h-28' key={t.url}>
          <BallCanvas icon={t.icon} />
         <center><p>{t.name}</p></center> 
        </div>
      ))}
    </div>

  );
};

export default SectionWrapper(Tech, "");
