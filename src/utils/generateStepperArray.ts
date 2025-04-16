import orderStatusArray from "./orderStatusArray";

const generateStepperArray = (status: string) => {
  const currentStepIndex = orderStatusArray.findIndex(
    (item) => item.status === status
  );

  return orderStatusArray.map((item, index) => ({
    ...item,
    isActive: index <= currentStepIndex,
  }));
};

export default generateStepperArray;
