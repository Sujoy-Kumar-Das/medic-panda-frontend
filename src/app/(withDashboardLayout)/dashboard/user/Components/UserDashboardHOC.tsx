import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import Header from "@/components/shared/header/Header";
import { Box, Container, Grid } from "@mui/material";
import { keyframes } from "@mui/system";
import UserDashboardCard from "./UserDashboardCard";

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

function UserDashboardCompo({
  data: { user, userMetaData },
}: {
  data: { user: any; userMetaData: any };
}) {
  return (
    <Container>
      <Header
        title={`Welcome, ${user?.name}!`}
        subtitle="Here’s a quick overview of your current stats and metrics. Explore the
      dashboard to get more insights about your account."
      />

      <Box sx={{ py: 2 }}>
        <Grid container spacing={3}>
          {userMetaData?.map((card: any, index: number) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{
                animation: `${fadeUp} 0.6s ease-in-out`,
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
                opacity: 0,
              }}
            >
              <UserDashboardCard
                title={card.title}
                value={card.value}
                gradient={card.gradient}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

const UserDashboardWithHOC = HandleLoadingErrorAndNoData(UserDashboardCompo);

export default UserDashboardWithHOC;
