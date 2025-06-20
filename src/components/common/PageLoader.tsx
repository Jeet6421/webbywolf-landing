'use client';
import { motion } from 'framer-motion';

const PageLoader = () => (
  <motion.div
    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50"
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 1, delay: 1 }}
  >
    <span className="text-3xl font-bold animate-pulse">Loading...</span>
  </motion.div>
);

export default PageLoader;
