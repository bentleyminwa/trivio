import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
  },
};

const Loader = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-screen w-screen flex justify-center items-center"
    >
      <div className="flex items-center gap-3 text-primary">
        <motion.h1
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 1,
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="text-5xl font-semibold"
        >
          Trivio
        </motion.h1>
        <motion.span
          initial={{ rotate: -360 }}
          animate={{
            rotate: 0,
            transition: {
              delay: 0.5,
              duration: 1,
              type: "spring",
              stiffness: 200,
            },
          }}
          className="text-7xl font-bold"
        >
          ?
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Loader;
