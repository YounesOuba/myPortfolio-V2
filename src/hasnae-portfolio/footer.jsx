import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCube } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-400 p-6 text-center mt-10 border-t border-gray-300 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Hasnae Ait Lhaj. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          <motion.a
            href="https://github.com/hasnae-ait-lhaj"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-all"
          >
            <FaGithub size={22} />
          </motion.a>
          <motion.a
            href="https://grabcad.com/hasnae.ait.lhaj-1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-all"
          >
            <FaCube size={22} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/hasnae-ait-lhaj"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-all"
          >
            <FaLinkedin size={22} />
          </motion.a>
          <motion.a
            href="mailto:aitlhajhasnae@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-all"
          >
            <FaEnvelope size={22} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
