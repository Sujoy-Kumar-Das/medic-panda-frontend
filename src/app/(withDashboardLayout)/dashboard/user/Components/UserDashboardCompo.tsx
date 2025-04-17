import Header from "@/components/shared/header/Header";
import { Container } from "@mui/material";
import UserDashboardMetaCards from "./UserDashboardMetaCards";

function UserDashboardCompo({ data }: { data: any }) {
  return (
    <Container>
      <Header
        title={`Hello! Here’s your dashboard overview.`}
        subtitle="Here’s a quick overview of your current stats and metrics. Explore the
      dashboard to get more insights about your account."
      />

      <UserDashboardMetaCards data={data} />
    </Container>
  );
}

export default UserDashboardCompo;
