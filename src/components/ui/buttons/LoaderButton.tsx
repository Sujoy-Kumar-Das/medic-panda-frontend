import { Button, CircularProgress } from "@mui/material";
import { ReactNode } from "react";

interface LoaderButtonProps {
  children: ReactNode;
  loadingText?: string;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error" | "success" | "info" | "warning";
  onClick?: () => void;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const LoaderButton: React.FC<LoaderButtonProps> = ({
  children,
  loadingText,
  isLoading = false,
  disabled = false,
  variant = "contained",
  color = "primary",
  onClick,
  fullWidth = false,
  startIcon,
  endIcon,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={isLoading || disabled}
      fullWidth={fullWidth}
      startIcon={!isLoading ? startIcon : undefined}
      endIcon={!isLoading ? endIcon : undefined}
    >
      {isLoading
        ? loadingText || <CircularProgress size={24} color="inherit" />
        : children}
    </Button>
  );
};

export default LoaderButton;
