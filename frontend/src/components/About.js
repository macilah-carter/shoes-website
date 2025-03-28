import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-16 shadow-lg rounded-lg">
      {/* Left Content Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-lg text-center md:text-left space-y-6"
      >
        <h1 className="text-5xl font-bold text-black uppercase tracking-wider">
          Discover
        </h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl italic text-orange-500 font-extrabold"
        >
          The Finest
        </motion.h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Step into style: Explore our exclusive collection of **premium, stylish, and ultra-comfortable shoes** designed to **elevate your look**.
        </p>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-md"
        >
          Explore Collection
        </motion.button>
      </motion.div>

      {/* Right Image Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="exps w-full md:w-1/2 flex justify-center"
      >
        <img 
          src="../../the-best-nike-high-top-sneakers-you-can-buy-right-now-articles-ogc.jpg"
          alt="Nike High Top Sneakers"
          className="w-full md:w-3/4 rounded-lg shadow-2xl"
        />
      </motion.div>
    </div>
  );
};

export default About;
