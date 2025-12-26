"use client";

import { motion } from "framer-motion";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <>
      <Navigation />
      <section className="min-h-screen flex items-center justify-center px-6 pt-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="heading-1 mb-6"
          >
            AI / ML / Platform Engineer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: 0.05 }}
            className="body-text mb-8"
            style={{ fontSize: '18px' }}
          >
            Building production-ready AI platforms with a focus on LLM systems,
            AI agents, and machine learning engineering. London, UK.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#systems"
              className="btn-primary"
            >
              View Systems
            </a>
            <a
              href="#contact"
              className="btn-secondary"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;

