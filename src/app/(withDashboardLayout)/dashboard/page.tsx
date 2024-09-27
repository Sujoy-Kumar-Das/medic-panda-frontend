"use client";

import DashboardLoader from "@/components/shared/loader/DashboardLoader";
import { useGetMeQuery } from "@/redux/api/myProfile.api";
import {
  HomeOutlined as HomeOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  SignpostOutlined as SignpostOutlinedIcon,
  Verified,
} from "@mui/icons-material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DangerousIcon from "@mui/icons-material/Dangerous";
import PublicIcon from "@mui/icons-material/Public";
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import UpdateUserInfoModal from "./Components/UpdateUserInfoModal";
import UserInfoCard from "./Components/UserInfoCard";

interface Field {
  label: string;
  value: string;
}

export default function MyProfilePage() {
  const { data, isLoading } = useGetMeQuery(undefined);
  const [openModal, setOpenModal] = useState(false);
  const [currentField, setCurrentField] = useState<Field | null>(null);

  const handleOpenModal = (field: Field) => {
    setCurrentField(field);
    setOpenModal(true);
  };

  const user = data?.data;

  const userFields = [
    {
      label: "Full Name",
      name: "name",
      icon: PersonOutlineOutlinedIcon,
      value: user?.name,
    },
    {
      label: "City",
      icon: ApartmentIcon,
      value: user?.address?.city,
      name: "address.city",
    },
    {
      label: "State",
      icon: HomeOutlinedIcon,
      value: user?.address?.state,
      name: "address.state",
    },
    {
      label: "Postal Code",
      icon: SignpostOutlinedIcon,
      value: user?.address?.postalCode,
      name: "address.postalCode",
    },
    {
      label: "Country",
      icon: PublicIcon,
      value: user?.address?.country,
      name: "address.country",
    },
  ];

  if (isLoading) {
    return <DashboardLoader />;
  }

  return (
    <Container maxWidth="xl" sx={{ width: "100%" }}>
      <Stack direction="row" justifyContent="center" py={3}>
        <Box sx={{ width: "100%" }}>
          <Paper
            sx={{
              padding: 4,
              background: "linear-gradient(135deg, #007bff, #00c8ff)",
              borderRadius: 3,
              color: "#ffffff",
              boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
              marginBottom: 4,
              width: "100%",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              gap={3}
              position="relative"
            >
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Image
                  alt="User image"
                  src={user?.photo}
                  height={100}
                  width={100}
                  style={{
                    width: 100,
                    height: 100,
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
                    border: "2px solid #ffffff",
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "50%",
                  }}
                />
                {user.user.isVerified ? (
                  <Tooltip title="Verified">
                    <Verified
                      sx={{
                        fontSize: 28,
                        color: "#007bff",
                        position: "absolute",
                        top: -1,
                        right: -5,
                        background: "#fff",
                        borderRadius: "50%",
                        padding: "2px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  </Tooltip>
                ) : (
                  <Tooltip title="Verified">
                    <DangerousIcon
                      sx={{
                        fontSize: 28,
                        color: "red",
                        position: "absolute",
                        top: -1,
                        right: -5,
                        background: "#fff",
                        borderRadius: "50%",
                        padding: "2px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  </Tooltip>
                )}
              </Box>
              <Box>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Typography variant="h4" gutterBottom>
                    Welcome, {user?.name || "User"}!
                  </Typography>
                </Stack>
                <Typography variant="subtitle1" sx={{ textTransform: "none" }}>
                  {user?.user?.email || "No Email Provided"}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ textTransform: "uppercase" }}
                >
                  {user?.user?.role || "N/A"}
                </Typography>
              </Box>
            </Stack>
          </Paper>
          <Grid container spacing={2}>
            {userFields.map((field, index) => (
              <UserInfoCard
                key={index}
                icon={field.icon}
                label={field.label}
                value={field.value}
                onEdit={() =>
                  handleOpenModal({
                    label: field.label,
                    value: field.name || "",
                  })
                }
              />
            ))}
          </Grid>
        </Box>
      </Stack>
      {currentField && (
        <UpdateUserInfoModal
          open={openModal}
          setOpen={setOpenModal}
          label={currentField.label}
          name={currentField.value}
        />
      )}
    </Container>
  );
}
