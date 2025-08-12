import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  fetch('/projectsData.json')
    .then(res => res.json())
    .then(data => {
      const foundProject = data.find(p => p._id.toString() === id);
      if (!foundProject) setError('Project not found');
      else setProject(foundProject);
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
}, [id]);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-white px-4">
        Loading Details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500 bg-gray-900 px-4">
        Error: {error}
      </div>
    );
  }

  return (
    <section className="">
      <div className="container mx-auto px-4 sm:px-6 py-10 mt-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl"
              >
                {project.projectName}
              </motion.h1>

              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-2 italic text-gray-600 dark:text-gray-400 text-sm sm:text-base"
              >
                {project.slogan}
              </motion.p>

              <div className="mt-6 space-y-3">
                <span className="text-xs font-medium text-rose-500 uppercase">
                  Features
                </span>
                {project.features?.map((feature, index) => (
                  <motion.p
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start sm:items-center text-gray-700 dark:text-gray-200 text-sm sm:text-base"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 flex-shrink-0 mx-2 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="mx-2">{feature.trim()}</span>
                  </motion.p>
                ))}
              </div>

              <div className="mt-6">
                <span className="text-xs font-medium text-rose-500 uppercase">
                  Technologies
                </span>
                <div className="flex gap-2 flex-wrap mt-2">
                  {project.technologies?.map((tech) => (
                    <div
                      key={tech}
                      className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {tech.trim()}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <span className="text-xs font-medium text-rose-500 uppercase">
                  Links
                </span>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-rose-500 border-2 border-rose-500 rounded-full hover:bg-rose-500 hover:text-white transition-colors duration-300"
                  >
                    <Globe size={16} /> Live Site
                  </a>
                  <a
                    href={project.clientLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 border-2 border-gray-500 rounded-full hover:bg-gray-500 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={16} /> Client
                  </a>
                  {project.serverLink && (
                    <a
                      href={project.serverLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 border-2 border-gray-500 rounded-full hover:bg-gray-500 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={16} /> Server
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Project Overview
                </h2>
                <p className="whitespace-pre-wrap leading-relaxed text-gray-300 text-sm sm:text-base">
                  {project.description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full lg:w-1/2">
            <motion.img
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain rounded-lg shadow-xl"
              src={project.projectImage}
              alt={project.projectName}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
