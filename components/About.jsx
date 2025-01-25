import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about" 
      className="w-full px-6 sm:px-12 lg:px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo"
      >
        About Me
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20 my-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-48 sm:w-64 md:w-80 lg:w-96 rounded-3xl"
        >
          <Image 
            src={assets.user_image} 
            alt="user" 
            className="w-full rounded-3xl" 
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-6 text-sm sm:text-base lg:text-lg max-w-2xl font-Ovo leading-relaxed text-justify">
            I am a dedicated MCA graduate with expertise in web development and data analytics.
            With proficiency in modern technologies like Java, Python, HTML, CSS, SQL, Numpy, Pandas, Seaborn, Matplotlib, and Power BI.
            I bring a blend of technical skills and creative problem-solving to every project.
            I’m passionate about building responsive web applications and uncovering actionable insights from data.
            My journey is driven by a commitment to learning, innovation, and delivering solutions that make a difference.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 
                  duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image 
                  src={isDarkMode ? iconDark : icon} 
                  alt={title} 
                  className="w-6 sm:w-7 mt-3"
                />
                <h3 className="my-2 sm:my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="my-6 text-base sm:text-lg text-gray-700 font-Ovo dark:text-white/80"
          >
            Tools I use:
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 
                  rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image 
                  src={tool} 
                  alt="Tool" 
                  className="w-5 sm:w-6 lg:w-7"
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
