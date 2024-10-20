import { createTheme } from "@mui/material";

// Extend MUI Palette interface to include gradients
declare module "@mui/material/styles" {
  interface Palette {
    gradients: {
      totalPrice: string;
      totalOrders: string;
      totalWishlist: string;
      cartItems: string;
      pendingOrders: string;
      shippedOrders: string;
      deliveredOrders: string;
      canceledOrders: string;
    };
  }

  interface PaletteOptions {
    gradients?: {
      totalPrice: string;
      totalOrders: string;
      totalWishlist: string;
      cartItems: string;
      pendingOrders: string;
      shippedOrders: string;
      deliveredOrders: string;
      canceledOrders: string;
    };
  }
}

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
    gradients: {
      totalPrice: "linear-gradient(45deg, #ff7e5f 30%, #feb47b 90%)",
      totalOrders: "linear-gradient(45deg, #6a11cb 30%, #2575fc 90%)",
      totalWishlist: "linear-gradient(45deg, #43cea2 30%, #185a9d 90%)",
      cartItems: "linear-gradient(45deg, #ff4e50 30%, #f9d423 90%)",
      pendingOrders: "linear-gradient(45deg, #24c6dc 30%, #514a9d 90%)",
      shippedOrders: "linear-gradient(45deg, #f12711 30%, #f5af19 90%)",
      deliveredOrders: "linear-gradient(45deg, #00c6ff 30%, #0072ff 90%)",
      canceledOrders: "linear-gradient(45deg, #ee0979 30%, #ff6a00 90%)",
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
          color: "#FFFFFF",
        },
      },
    },
  },
});

export default theme;
