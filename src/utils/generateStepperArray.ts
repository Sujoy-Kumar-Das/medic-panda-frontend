import orderStatusArray from "./orderStatusArray";

const generateStepperArray = (status: string) => {
  const currentStepIndex = orderStatusArray.findIndex(
    (item) => item.status === status
  );

  const orderStatusUpdatedArray = orderStatusArray.map((item, index) => ({
    ...item,
    isActive: index <= currentStepIndex,
  }));

  const orderCurrentStatus = orderStatusArray[currentStepIndex];

  return {
    orderStatusUpdatedArray,
    orderCurrentStatus,
    currentIndex: currentStepIndex,
  };
};

export default generateStepperArray;
