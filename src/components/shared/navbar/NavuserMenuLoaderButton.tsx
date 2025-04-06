import Person2Icon from "@mui/icons-material/Person2";
import IconButton from "@mui/material/IconButton";

export default function NavUserMenuLoaderButton() {
  return (
    <IconButton
      sx={{
        p: 0,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Person2Icon sx={{ fontSize: 40 }} />
    </IconButton>
  );
}
