import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007bff",
      light: "#339aff",
      dark: "#0056b3",
    },
    secondary: {
      main: "#6c757d",
      light: "#a2a9b1",
      dark: "#4b5259",
    },
    text: {
      primary: "#2D3748",
      secondary: "#4A5568",
      disabled: "#FFFFFF",
    },
    background: {
      default: "#F4F6F8",
      paper: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "10px 28px",
          backgroundColor: "#007bff",
          color: "#FFFFFF",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 123, 255, 0.2)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#0056b3",
            boxShadow: "0px 6px 14px rgba(0, 86, 179, 0.3)",
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        },
      },
    },
  },
});

export default theme;
