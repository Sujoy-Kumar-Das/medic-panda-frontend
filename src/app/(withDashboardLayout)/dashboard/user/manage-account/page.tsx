import {
  AppRegistrationOutlined as AppRegistrationOutlinedIcon,
  CallOutlined as CallOutlinedIcon,
  EmailOutlined as EmailOutlinedIcon,
  HomeOutlined as HomeOutlinedIcon,
  KeyOutlined as KeyOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  SignpostOutlined as SignpostOutlinedIcon,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export default function Page() {
  return (
    <Container>
      <Box mb={3}>
        <Typography component="h1" variant="h4" color="text.primary">
          Identification
        </Typography>
        <Typography component="h1" variant="h6" color="text.secondary">
          Verify Your Identity
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography color="text.secondary" fontSize="16px" mb="2px">
            Full Name
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ bgcolor: "background.paper" }}
            p={1}
            borderRadius="6px"
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <PersonOutlineOutlinedIcon
                sx={{ color: "text.secondary", fontSize: "30px" }}
              />
              <Typography color="text.secondary" fontSize="16px">
                Sujoy Kumar Das
              </Typography>
            </Stack>
            <IconButton color="info" sx={{ height: "20px", width: "20px" }}>
              <AppRegistrationOutlinedIcon />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography color="text.secondary" fontSize="16px" mb="2px">
            Email
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ bgcolor: "background.paper" }}
            p={1}
            borderRadius="6px"
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <EmailOutlinedIcon
                sx={{ color: "text.secondary", fontSize: "30px", p: "0px" }}
              />
              <Typography color="text.secondary" fontSize="16px">
                sujoykumardas75@gmail.com
              </Typography>
            </Stack>
            <IconButton color="info" sx={{ height: "20px", width: "20px" }}>
              <AppRegistrationOutlinedIcon />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography color="text.secondary" fontSize="16px" mb="2px">
            Contact Number
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ bgcolor: "background.paper" }}
            p={1}
            borderRadius="6px"
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <CallOutlinedIcon
                sx={{ color: "text.secondary", fontSize: "30px" }}
              />
              <Typography color="text.secondary" fontSize="16px">
                01319263016
              </Typography>
            </Stack>
            <IconButton color="info" sx={{ height: "20px", width: "20px" }}>
              <AppRegistrationOutlinedIcon />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography color="text.secondary" fontSize="16px" mb="2px">
            Password
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ bgcolor: "background.paper" }}
            p={1}
            borderRadius="6px"
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <KeyOutlinedIcon
                sx={{ color: "text.secondary", fontSize: "30px" }}
              />
              <Typography color="text.secondary" fontSize="16px">
                ********
              </Typography>
            </Stack>
            <IconButton color="info" sx={{ height: "20px", width: "20px" }}>
              <AppRegistrationOutlinedIcon />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography color="text.secondary" fontSize="16px" mb="2px">
            Address
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ bgcolor: "background.paper" }}
            p={1}
            borderRadius="6px"
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <HomeOutlinedIcon
                sx={{ color: "text.secondary", fontSize: "30px" }}
              />
              <Typography color="text.secondary" fontSize="16px">
                Puran Bazar,Chandpur
              </Typography>
            </Stack>
            <IconButton color="info" sx={{ height: "20px", width: "20px" }}>
              <AppRegistrationOutlinedIcon />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography color="text.secondary" fontSize="16px" mb="2px">
            Postal Code
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ bgcolor: "background.paper" }}
            p={1}
            borderRadius="6px"
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <SignpostOutlinedIcon
                sx={{ color: "text.secondary", fontSize: "30px" }}
              />
              <Typography color="text.secondary" fontSize="16px">
                3600
              </Typography>
            </Stack>
            <IconButton color="info" sx={{ height: "20px", width: "20px" }}>
              <AppRegistrationOutlinedIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
