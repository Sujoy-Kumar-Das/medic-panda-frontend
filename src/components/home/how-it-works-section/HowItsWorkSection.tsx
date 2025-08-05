import CommonContainer from "@/components/shared/common-container/CommonContainer";
import CommonHeader from "@/components/shared/header/CommonHeader";
import { howItWorksData } from "@/lib/data/how-its-works-data";
import { Avatar, Box, Grid, Typography } from "@mui/material";
export default function HowItWorksSection() {
  return (
    <CommonContainer sx={{ backgroundColor: "background.paper" }}>
      <CommonHeader
        title="How It Works"
        subtitle="Getting your medicines has never been easier"
      />

      <Grid container spacing={4}>
        {howItWorksData.map(({ id, title, description, icon: Icon, color }) => (
          <Grid item xs={12} md={4} key={id}>
            <Box
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 4,
                height: "100%",
                position: "relative",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: `background.default`,
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 2,
                }}
              >
                <Icon sx={{ fontSize: 40, color }} />
              </Avatar>
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 130,
                  width: 36,
                  height: 36,
                  bgcolor: "background.paper",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  color: `${color}`,
                  boxShadow: 3,
                }}
              >
                {id}
              </Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </CommonContainer>
  );
}
