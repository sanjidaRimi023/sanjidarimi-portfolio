import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router"; 
import useAxiosQuery from "../../Hooks/useAxiosQuery";
import { ExternalLink, FileCode2 } from "lucide-react";

const Daynamic_Projects = () => {
  const navigate = useNavigate();

  const {
    data: projectsResponse = {},
    isLoading,
    isError,
    error,
  } = useAxiosQuery("projects", "/project");

  const projects = projectsResponse?.data || [];

  if (isLoading)
    return <p className="text-center mt-10 text-xl">Loading projects...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Error: {error.message}</p>
    );

  return (
    <section className="container mx-auto py-20 px-4 lg:px-20">
  

      <div className="flex flex-col md:flex-row items-end mb-10">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-4xl font-bold"
        >
          Recent <span className="text-rose-600">Projects</span>
        </motion.h1>

        <motion.span
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="flex flex-col gap-1 ml-5"
        >
          <hr className="border-1 w-16" />
          <hr className="border-1 w-10 text-rose-600" />
        </motion.span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="group relative block overflow-hidden rounded-xl bg-gray-800/80 border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-rose-500/30 hover:border-rose-500/50"
          >
            <div className="overflow-hidden">
              <img
                src={project.projectImage}
                alt={project.projectName}
                className="aspect-video w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            <div className="p-6 space-y-3">
              <h2 className="text-xl font-bold text-white">
                <span className="text-sm text-rose-500 font-normal">
                  Project Name{" "}
                </span>
                <br />
                {project.projectName}
              </h2>
              <p className="text-sm text-gray-300">{project.slogan}</p>

        
              <div className="flex justify-between">
                <Link
                  to={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border-2 border-rose-600 px-2 py-1 text-center text-sm text-rose-600 shadow-sm transition-all duration-300 hover:bg-rose-700 hover:text-white hover:scale-105"
                >
                  <ExternalLink size={15} />
                  Live Link
                </Link>
                <button
                  onClick={() => navigate(`/projects/${project._id}`)}
                  className="flex items-center gap-2 rounded-full border-2 border-rose-600 px-3 py-2 text-center text-sm text-rose-600 shadow-sm transition-all duration-300 hover:bg-rose-700 hover:text-white hover:scale-105"
                >
                  <FileCode2 size={15} />
                  Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Daynamic_Projects;
