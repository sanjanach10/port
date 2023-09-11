"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc text from-orange to-pink  pl-2">
          <li>Data Structures and Algorithms</li>
          <li>Java</li>
          <li>MySQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Bachelors of Technology, 2024 
            -Motilal Nehru National Institute of Technology,
            Allahabad, Uttar Pradesh, India.
            -CPI:7.77 till 7th semester
          </li>
          <li>12th Grade 
            -Sri Chaitanya Junior College, Hyderabad, Telangana, India.
            -Percentage-93.5%
          </li>
          <li>10th Grade 
            -Sri Gurudatta High School, Hyderabad, Telangana, India.
            -Percentage-93.1%
          </li>
        </ul>
      ),
    },
    {
      title: "Hobbies",
      id: "hobbies",
      content: (
        <ul className="list-disc pl-2">
          <li>Drawing</li>
          <li>Journaling</li>
          <li>Trekking</li>
          <li>Travelling</li>
          <li>Badminton</li>
        </ul>
      ),
    },
  ];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };
  
    return (
        <section className="text-white" id="about">
          <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-image.png" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <p className="text-base lg:text-lg">
                Hey!  I'm Sanjana, currently in my 7th semester pursuing a Bachelor of Technology in Production and Industrial Engineering
                within the Mechanical Department at MNNIT Allahabad. I'm passionate about the world of technology and have had the privilege
                of diving into the realm of data structures and algorithms and web development.
                 I consider myself a quick learner, always eager to expand my knowledge and explore new horizons. One of my greatest strengths is my ability to collaborate effectively with diverse teams, and I'm excited to leverage this skill to create innovative and impactful applications.
              </p>
              <div className="flex flex-row justify-start mt-2">
                <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  {" "}
                  Skills{" "}
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  {" "}
                  Education{" "}
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("hobbies")}
                  active={tab === "hobbies"}
                >
                  {" "}
                  Hobbies{" "}
                </TabButton>
              </div>
              <div className="mt-2">
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            </div>
          </div>
        </section>
      );
};

export default AboutSection;