import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import {niraj,resume } from "../assets";
const Hero = () => {

  const onButtonClick = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = resume; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className="profile-icon absolute inset-0 top-[120px]   mx-auto flex flex-row items-start gap-5" 
      >
        <div
          className={` flex flex-row items-start gap-5` }
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Niraj</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop Full Stack, user <br className="sm:block hidden" />
              interfaces and web applications
            </p>

            <button onClick={onButtonClick} className="focus:outline-none m-2 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              Download Resume
            </button>
          </div>
        </div>
        <Tilt className="xs:w-[250px] w-full">
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-tertiary rounded-[20px]  min-h-[280px] flex justify-evenly items-center flex-col"
            >
              <img
                src={niraj}
                alt="web-development"
                className="w-full h-full object-contain rounded-[20px] "
              />
            </div>
          </motion.div>
        </Tilt>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
