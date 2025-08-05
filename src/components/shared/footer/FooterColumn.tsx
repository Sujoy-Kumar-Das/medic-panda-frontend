import { Box, Link, Stack, Typography } from "@mui/material";

const FooterColumn = ({ title, links }: { title: string; links: string[] }) => (
  <Box>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Stack spacing={1}>
      {links.map((link, index) => (
        <Link
          key={index}
          href="#"
          underline="none"
          color="text.primary"
          sx={{ "&:hover": { color: "text.primary" } }}
        >
          {link}
        </Link>
      ))}
    </Stack>
  </Box>
);

export default FooterColumn;
