"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A personal portfolio",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sanjanach10/port",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Mario Kart",
    description: "A game similar to Mario Kart ",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Spotify 2.0",
    description: "A music streaming front end application",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Indian Census",
    description: "Analysis of Census of India",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Snake Game",
    description: "The famous snake game",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

//   const filteredProjects = projectsData.filter((project) =>
//     project.tag.includes(tag)
//   );

//   const cardVariants = {
//     initial: { y: 50, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//   };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;