export const PageVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
