import generateStepperArray from "@/utils/generateStepperArray";
import { Card, Stepper, Typography } from "@mui/material";
import OrderStep from "./OrderStep";
import OrderStepMessage from "./OrderStepMessage";

interface IOrderStepperProps {
  status: string;
}

const OrderStepper = ({ status }: IOrderStepperProps) => {
  // get the order status details for step card;
  const { orderStatusUpdatedArray, orderCurrentStatus, currentIndex } =
    generateStepperArray(status);

  const { message, color } = orderCurrentStatus;

  return (
    <Card
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom style={{ color: "#007bff" }}>
        Steps For Your Order
      </Typography>

      {/* Stepper Component */}
      <Stepper
        activeStep={currentIndex}
        alternativeLabel
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {orderStatusUpdatedArray.map(({ icon, id, color, label, isActive }) => (
          <OrderStep
            key={id}
            icon={icon}
            color={color}
            label={label}
            isActive={isActive}
          />
        ))}
      </Stepper>

      {/* Order status message */}
      <OrderStepMessage message={message} color={color} />
    </Card>
  );
};

export default OrderStepper;
