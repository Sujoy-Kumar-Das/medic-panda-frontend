import { createTheme } from "@mui/material";

// Extend MUI types to include accent color and gradients
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
    accent: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
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
    accent?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    accent: true;
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0891b2", // sky-600
      dark: "#0e7490", // sky-700
      light: "#06b6d4", // sky-500
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#10b981", // emerald-500
      dark: "#059669", // emerald-600
      light: "#34d399", // emerald-400
      contrastText: "#ffffff",
    },
    accent: {
      main: "#6366f1", // indigo-500
      dark: "#4f46e5", // indigo-600
      light: "#818cf8", // indigo-400
      contrastText: "#ffffff",
    },
    text: {
      primary: "#1e293b", // slate-800
      secondary: "#475569", // slate-600
      disabled: "#94a3b8", // slate-400
    },
    background: {
      default: "#f8fafc", // slate-50
      paper: "#ffffff",
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
  typography: {
    fontFamily: [
      '"Inter"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "2.5rem", // 40px
      fontWeight: 700,
      lineHeight: 1.2,
      "@media (min-width:600px)": {
        fontSize: "3rem", // 48px
      },
      "@media (min-width:900px)": {
        fontSize: "3.5rem", // 56px
      },
    },
    h2: {
      fontSize: "2rem", // 32px
      fontWeight: 700,
      lineHeight: 1.3,
      "@media (min-width:600px)": {
        fontSize: "2.25rem", // 36px
      },
      "@media (min-width:900px)": {
        fontSize: "2.5rem", // 40px
      },
    },
    h3: {
      fontSize: "1.75rem", // 28px
      fontWeight: 600,
      lineHeight: 1.3,
      "@media (min-width:600px)": {
        fontSize: "2rem", // 32px
      },
    },
    h4: {
      fontSize: "1.5rem", // 24px
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "1.25rem", // 20px
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "1rem", // 16px
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 600,
      textTransform: "none",
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: 1.5,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      lineHeight: 1.5,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          padding: "12px 28px",
          borderRadius: "8px",
          fontSize: "0.9rem",
          fontWeight: 600,
          textTransform: "none",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: "linear-gradient(45deg, #0891b2 0%, #06b6d4 100%)",
            "&:hover": {
              background: "linear-gradient(45deg, #0e7490 0%, #0891b2 100%)",
              boxShadow: "0 4px 12px rgba(8, 145, 178, 0.3)",
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            background: "linear-gradient(45deg, #10b981 0%, #34d399 100%)",
            "&:hover": {
              background: "linear-gradient(45deg, #059669 0%, #10b981 100%)",
              boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
            },
          },
        },
        {
          props: { variant: "contained", color: "accent" },
          style: {
            background: "linear-gradient(45deg, #6366f1 0%, #818cf8 100%)",
            "&:hover": {
              background: "linear-gradient(45deg, #4f46e5 0%, #6366f1 100%)",
              boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderWidth: "1px",
            backgroundColor: "transparent",
            "&:hover": {
              borderWidth: "1px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            padding: "8px 16px",
            "&:hover": {
              backgroundColor: "rgba(8, 145, 178, 0.08)",
              transform: "none",
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            padding: "8px 16px",
            fontSize: "0.8rem",
          },
        },
        {
          props: { size: "large" },
          style: {
            padding: "16px 32px",
            fontSize: "1rem",
          },
        },
      ],
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
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "p",
          subtitle2: "p",
          body1: "p",
          body2: "p",
        },
      },
    },
  },
});

export default theme;
