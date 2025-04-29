import { Typography } from "@mui/material";

interface FormHeaderProps {
  title: string;
  subtitle: string;
}

const FormHeader = ({ title, subtitle }: FormHeaderProps) => {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "primary.main" }}
      >
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
        {subtitle}
      </Typography>
    </>
  );
};

export default FormHeader;
