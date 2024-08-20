import DeleteIcon from "@mui/icons-material/Delete";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
export default function NotificationPage() {
  return (
    <Container>
      <Box mb={3}>
        <Typography component="h1" variant="h4" color="text.primary">
          Notification{" "}
        </Typography>
        <Typography component="h1" variant="h6" color="text.secondary">
          Manage your notification settings{" "}
        </Typography>
      </Box>

      <Box sx={{ bgcolor: "background.paper" }} p={1} borderRadius="6px">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <NotificationsActiveIcon
              sx={{ color: "primary.main", fontSize: "30px" }}
            />
            <Typography color="text.primary" fontSize="16px">
              01319263016
            </Typography>
          </Stack>
          <IconButton color="info" sx={{ height: "20px", width: "20px" }}>
            <DeleteIcon />
          </IconButton>
        </Stack>
        <Typography color="text.secondary" fontSize="14px" mt={1}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
          porro!
        </Typography>
      </Box>
    </Container>
  );
}
