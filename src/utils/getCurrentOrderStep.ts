import { OrderStatus } from "@/types";
import orderStatusArray from "./orderStatusArray";

const getCurrentOrderStep = (status: OrderStatus) => {
  const currentStepIndex = orderStatusArray.findIndex(
    (item) => item.status === status
  );

  if (currentStepIndex === -1) {
    throw new Error(`Status "${status}" not found in orderStatusArray`);
  }

  return {
    ...orderStatusArray[currentStepIndex],
    index: currentStepIndex,
  };
};

export default getCurrentOrderStep;
