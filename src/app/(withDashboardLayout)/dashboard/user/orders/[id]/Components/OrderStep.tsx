import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Step, StepLabel, Typography } from "@mui/material";
import { ReactElement } from "react";

interface OrderStepProps {
  isActive: boolean;
  color: string;
  label: string;
  icon: ReactElement;
}

export default function OrderStep({
  isActive,
  color,
  label,
  icon,
}: OrderStepProps) {
  return (
    <Step>
      <StepLabel
        StepIconComponent={() => (
          <Box color={isActive ? color : "text.secondary"}>
            {isActive ? <CheckCircleIcon /> : icon}
          </Box>
        )}
      >
        <Typography
          variant="body1"
          sx={{
            color: `${isActive ? color : "text.secondary"} `,
          }}
        >
          {label}
        </Typography>
      </StepLabel>
    </Step>
  );
}
