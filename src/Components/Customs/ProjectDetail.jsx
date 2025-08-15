import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/projectsData.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProject = data.find((p) => p._id.toString() === id);
        if (!foundProject) setError("Project not found");
        else setProject(foundProject);
        setLoading(false);
      })
      .catch((err) => {
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
    <main className="container mx-auto px-4 sm:px-6 py-10 mt-10">
      <article className="flex flex-col lg:flex-row lg:items-start gap-10">
        {/* Left Side: Project Info */}
        <div className="w-full lg:w-1/2">
          <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide lg:text-4xl">
              {project.projectName}
            </h1>
            <p className="mt-2 italic text-sm sm:text-base">{project.slogan}</p>
          </motion.header>

          {/* Features */}
          <section className="mt-6" aria-labelledby="features-title">
            <h2 id="features-title" className="text-xs font-medium text-rose-500 uppercase">
              Features
            </h2>
            <div className="space-y-3 mt-2">
              {project.features?.map((feature, index) => (
                <motion.p
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start sm:items-center text-sm sm:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 flex-shrink-0 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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
          </section>

          {/* Technologies */}
          <section className="mt-6" aria-labelledby="technologies-title">
            <h2 id="technologies-title" className="text-xs font-medium text-rose-500 uppercase">
              Technologies
            </h2>
            <div className="flex gap-2 flex-wrap mt-2">
              {project.technologies?.map((tech) => (
                <div
                  key={tech}
                  className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-gradient-to-r from-rose-600 via-red-500 to-rose-400"
                >
                  {tech.trim()}
                </div>
              ))}
            </div>
          </section>

          {/* Links */}
          <section className="mt-8" aria-labelledby="links-title">
            <h2 id="links-title" className="text-xs font-medium text-rose-500 uppercase">
              Links
            </h2>
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
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-rose-500 border-2 border-rose-500 rounded-full hover:bg-rose-500 hover:text-white transition-colors duration-300"
              >
                <ExternalLink size={16} /> Client
              </a>
              {project.serverLink && (
                <a
                  href={project.serverLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-rose-500 border-2 border-rose-500 rounded-full hover:bg-rose-500 hover:text-white transition-colors duration-300"
                >
                  <ExternalLink size={16} /> Server
                </a>
              )}
            </div>
          </section>

          {/* Project Overview */}
          <section className="mt-8" aria-labelledby="overview-title">
            <h2
              id="overview-title"
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
            >
              Project Overview
            </h2>
            <p className="whitespace-pre-wrap leading-relaxed text-gray-300 text-sm sm:text-base">
              {project.description}
            </p>
          </section>
        </div>

        {/* Right Side: Project Image */}
        <motion.figure
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center w-full lg:w-1/2"
        >
          <img
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain rounded-lg shadow-xl"
            src={project.projectImage}
            alt={project.projectName}
          />
          <figcaption className="sr-only">{`Screenshot of ${project.projectName}`}</figcaption>
        </motion.figure>
      </article>
    </main>
  );
};

export default ProjectDetail;
