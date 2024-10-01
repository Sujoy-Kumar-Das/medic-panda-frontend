import { Paper, Typography } from "@mui/material";

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <Paper
      sx={{
        padding: 3,
        background: "linear-gradient(135deg, #007bff, #00c8ff)",
        borderRadius: 2,
        color: "#ffffff",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        marginBottom: 3,
        marginTop: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6">{subtitle}</Typography>
    </Paper>
  );
};

export default Header;
