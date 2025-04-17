// Variants for parent (stack container)
export const skinCareProductButtonContainerVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variants for individual buttons
export const skinCareProductButtonVariants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

export const dashboardStatsCardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const dashboardStatsCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
