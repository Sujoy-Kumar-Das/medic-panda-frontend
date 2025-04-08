// home animation
export const title = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

// home banner child
export const titleChildren = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.3 },
  },
};
