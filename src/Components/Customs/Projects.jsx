import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { ExternalLink, FileCode2 } from "lucide-react";

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projectsData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <section
      className="container mx-auto py-20 px-4 lg:px-20 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Section Heading */}
      <header className="flex flex-col md:flex-row md:items-end mb-10">
        <motion.h2
          id="projects-heading"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Recent <span className="text-rose-600">Projects</span>
        </motion.h2>

        <motion.span
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-1 ml-5"
          aria-hidden="true"
        >
          <hr className="border-1 w-16" />
          <hr className="border-1 w-10 text-rose-600" />
        </motion.span>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.article
            key={project._id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative block overflow-hidden rounded-xl bg-gray-800/80 border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-rose-500/30 hover:border-rose-500/50"
            aria-labelledby={`project-title-${project._id}`}
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                src={project.projectImage}
                alt={`Screenshot of ${project.projectName}`}
                className="aspect-video w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-3">
              <h3
                id={`project-title-${project._id}`}
                className="text-xl font-bold text-white"
              >
                <span className="text-sm text-rose-500 font-normal">
                  Project Name
                </span>
                <br />
                {project.projectName}
              </h3>

              <p className="text-sm text-gray-300">{project.slogan}</p>

              {/* Links */}
              <div className="flex justify-between mt-4">
                <Link
                  to={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${project.projectName} Live Site`}
                  className="flex items-center gap-2 rounded-full border-2 border-rose-600 px-2 py-1 text-sm text-rose-600 transition-all duration-300 hover:bg-rose-700 hover:text-white hover:scale-105"
                >
                  <ExternalLink size={15} />
                  Live Link
                </Link>

                <button
                  onClick={() => navigate(`/projects/${project._id}`)}
                  aria-label={`View details of ${project.projectName}`}
                  className="flex items-center gap-2 rounded-full border-2 border-rose-600 px-3 py-2 text-sm text-rose-600 transition-all duration-300 hover:bg-rose-700 hover:text-white hover:scale-105"
                >
                  <FileCode2 size={15} />
                  Details
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
