import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="container mx-auto py-20 px-4 lg:px-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Contact Info Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-rose-600">Contact Info</h2>
          <p className="text-gray-300">
            Feel free to reach out through any of the following ways:
          </p>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="text-rose-500" />
              <span>example@email.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-rose-500" />
              <span>+880 123 456 789</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-rose-500" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4"
        >
          <h2 className="text-3xl font-bold text-rose-600">Send a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-rose-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-rose-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-rose-500"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-rose-600 hover:bg-rose-700 rounded-lg text-white font-medium transition-all duration-300"
          >
            Send
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
