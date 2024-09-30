"use client";
import ErrorPage from "@/components/shared/error/Error";
import Header from "@/components/shared/header/Header";
import Loader from "@/components/shared/loader/Loader";
import { useGetUserMetaQuery } from "@/redux/api/meta.api";
import { useGetMeQuery } from "@/redux/api/myProfile.api";
import { IGenericErrorResponse } from "@/types";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { keyframes } from "@mui/system";

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

const cardColors = [
  {
    gradient: "linear-gradient(135deg, #42a5f5, #478ed1)",
    title: "Total Orders",
  },
  {
    gradient: "linear-gradient(135deg, #66bb6a, #43a047)",
    title: "Wishlist Items",
  },
  {
    gradient: "linear-gradient(135deg, #ffa726, #fb8c00)",
    title: "Cart Items",
  },
  {
    gradient: "linear-gradient(135deg, #ef5350, #e53935)",
    title: "Total Purchase",
  },
  {
    gradient: "linear-gradient(135deg, #ab47bc, #8e24aa)",
    title: "Completed Orders",
  },
  {
    gradient: "linear-gradient(135deg, #26c6da, #00acc1)",
    title: "Pending Orders",
  },
  {
    gradient: "linear-gradient(135deg, #ff7043, #f4511e)",
    title: "Returned Orders",
  },
  {
    gradient: "linear-gradient(135deg, #8d6e63, #6d4c41)",
    title: "Unpaid Orders",
  },
];

export default function UserDashboard() {
  const { data, isLoading, error } = useGetUserMetaQuery(undefined);
  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useGetMeQuery(undefined);

  const userMetaData = [
    { value: data?.totalOrders || 0, ...cardColors[0] },
    { value: data?.wishListItem || 0, ...cardColors[1] },
    { value: data?.cartItem || 0, ...cardColors[2] },
    { value: `$ ${data?.totalPurchasePrice || 0}`, ...cardColors[3] },
    { value: data?.completedOrders || 0, ...cardColors[4] },
    { value: data?.pendingOrders || 0, ...cardColors[5] },
    { value: data?.returnedOrders || 0, ...cardColors[6] },
    { value: data?.unPaidOrders || 0, ...cardColors[7] },
  ];

  const chartData = data?.monthlyOrderStats?.map((item: any) => ({
    name: item.date,
    total: Number(item.totalPurchasePrice).toFixed(2),
  }));

  // If data is still loading, show the loader
  if (isLoading || userLoading) {
    return <Loader />;
  }

  // Handle error
  if (error || userError) {
    const allErrors =
      (error as IGenericErrorResponse) || (userError as IGenericErrorResponse);

    return <ErrorPage error={allErrors} />;
  }

  return (
    <Container>
      <Header
        title={`Welcome, ${user?.name}!`}
        subtitle="Here’s a quick overview of your current stats and metrics. Explore the
          dashboard to get more insights about your account."
      />

      <Box sx={{ py: 2 }}>
        <Grid container spacing={3}>
          {userMetaData?.map((card, index) => (
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
              <Card
                sx={{
                  background: card.gradient,
                  height: 150,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" align="center" color="white">
                    {card.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    align="center"
                    color="white"
                  >
                    {card.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
