import { motion } from "framer-motion";
const transitionVariants = {
  initial: {
    x: "0%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};
const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed  top-0 bottom-0 right-full w-screen
       h-screen z-50 bg-[#bcabf5]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      >
        1
      </motion.div>

      <motion.div
        className="fixed  top-0 bottom-0 right-full w-screen
       h-screen z-30 bg-[#8f74f8]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      >
        1
      </motion.div>

      <motion.div
        className="fixed  top-0 bottom-0 right-full w-screen
       h-screen z-10 bg-[#8672cc]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      >
        1
      </motion.div>
    </>
  );
};

export default Transition;
