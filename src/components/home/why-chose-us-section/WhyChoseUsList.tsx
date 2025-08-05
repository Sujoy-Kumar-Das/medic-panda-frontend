import { whyChooseData } from "@/lib/data/why-chose-us-data";
import { Avatar, Grid, Paper, Typography } from "@mui/material";

export default function WhyChoseUsList() {
  return (
    <Grid container spacing={4}>
      {whyChooseData.map(({ id, title, description, icon: Icon, color }) => (
        <Grid item xs={12} sm={6} md={3} key={id}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              textAlign: "center",
              borderRadius: 4,
              transition: "0.3s",
              height: 220,
              "&:hover": {
                boxShadow: 6,
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: `background.default`,
                color: `${color}`,
                width: 56,
                height: 56,
                mb: 2,
                mx: "auto",
              }}
            >
              <Icon fontSize="medium" />
            </Avatar>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
