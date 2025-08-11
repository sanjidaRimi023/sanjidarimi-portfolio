import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import useAxiosQuery from "../../Hooks/useAxiosQuery"; 

const Projects = () => {
  const navigate = useNavigate();



  const { data: projects = [], isLoading, isError, error } = useAxiosQuery("projects", "/project");
console.log(projects.data);

  if (isLoading) return <p className="text-center mt-10">Loading projects...</p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Error: {error.message}</p>;



  return (
    <section className="container mx-auto mb-20 lg:px-20">
      <div className="flex flex-col md:flex-row items-end mb-10">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-rose-600"
        >
          Projects
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

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects?.data.map((project) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
         
            <img
              src={project.projectImage}
              alt={project.projectName}
              className="w-full h-48 object-cover"
            />

         
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-white mb-3">{project.projectName}</h3>
              <p className="text-gray-300 flex-grow line-clamp-3">{project.slogan || project.description}</p>

           
              <div className="mt-5 flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow bg-rose-600 text-white py-2 rounded-md text-center hover:bg-rose-700 transition"
                >
                  Live Link
                </a>
                <button
                  onClick={() => navigate(`/projects/${project._id}`)}
                  className="flex-grow bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600 transition"
                >
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

export default Projects;
