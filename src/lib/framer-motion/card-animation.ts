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
