import { OrderStatus } from "@/types";
import DeliveredIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import ShippedIcon from "@mui/icons-material/LocalShipping";
import PaidIcon from "@mui/icons-material/Payment";
import ProcessingIcon from "@mui/icons-material/Sync";
import { Box, Card, Step, StepLabel, Stepper, Typography } from "@mui/material";

// Define the steps with unique labels, icons, and statuses
const steps = [
  {
    label: OrderStatus.PENDING,
    icon: <HourglassEmptyIcon style={{ color: "#007bff" }} />,
    status: OrderStatus.PENDING,
  },
  {
    label: OrderStatus.PAID,
    icon: <PaidIcon style={{ color: "#007bff" }} />,
    status: OrderStatus.PAID,
  },
  {
    label: OrderStatus.PROCESSING,
    icon: <ProcessingIcon style={{ color: "#6c757d" }} />,
    status: OrderStatus.PROCESSING,
  },
  {
    label: OrderStatus.SHIPPED,
    icon: <ShippedIcon style={{ color: "#17a2b8" }} />,
    status: OrderStatus.SHIPPED,
  },
  {
    label: OrderStatus.DELIVERED,
    icon: <DeliveredIcon style={{ color: "#28a745" }} />,
    status: OrderStatus.DELIVERED,
  },
];

interface IOrderStepperProps {
  currentStep: number;
  status: OrderStatus;
}

const OrderStepper = ({ currentStep, status }: IOrderStepperProps) => {
  console.log(status);
  // Dynamic status message
  const getStatusMessage = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.PENDING:
        return "Payment for your order.";
      case OrderStatus.PAID:
        return "Your order has been paid.";
      case OrderStatus.PROCESSING:
        return "Your order is being processed.";
      case OrderStatus.SHIPPED:
        return "Your order has been shipped!";
      case OrderStatus.DELIVERED:
        return "Your order has been delivered successfully.";
      default:
        return "Tracking your order status...";
    }
  };

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.DELIVERED:
        return "#28a745";
      case OrderStatus.CANCELED:
        return "#dc3545";
      case OrderStatus.RETURNED:
        return "#fd7e14";
      default:
        return "#2D3748";
    }
  };

  return (
    <Card
      style={{
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
        activeStep={currentStep}
        alternativeLabel
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel icon={step.icon}>
              <Typography variant="body1" style={{ color: "text.secondary" }}>
                {step.label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Order status message */}
      <Box style={{ marginTop: "24px", marginBottom: "16px" }}>
        <Typography
          variant="h6"
          style={{ color: getStatusColor(status), fontWeight: "bold" }}
        >
          {getStatusMessage(status)}
        </Typography>
      </Box>
    </Card>
  );
};

export default OrderStepper;
