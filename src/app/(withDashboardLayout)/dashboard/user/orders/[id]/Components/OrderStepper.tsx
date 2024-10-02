import { OrderStatus } from "@/types";

const StepIcon = ({ stepIndex }: { stepIndex: number }) => {
  // Get active step based on the order status
  const getStatusStep = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.PENDING:
        return 0;
      case OrderStatus.PROCESSING:
        return 1;
      case OrderStatus.SHIPPED:
        return 2;
      case OrderStatus.DELIVERED:
        return 3;
      case OrderStatus.CANCELED:
      case OrderStatus.RETURNED:
      default:
        return -1;
    }
  };

  const activeStep = getStatusStep(status);

  if (stepIndex <= activeStep) {
    return <SuccessIcon color="success" />;
  } else {
    return steps[stepIndex].icon;
  }
};
