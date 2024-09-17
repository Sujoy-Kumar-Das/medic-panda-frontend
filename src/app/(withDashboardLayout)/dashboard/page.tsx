"use client";

import DashboardLoader from "@/components/shared/loader/DashboardLoader";
import { useGetMeQuery } from "@/redux/api/myProfile.api";
import {
  CallOutlined as CallOutlinedIcon,
  EmailOutlined as EmailOutlinedIcon,
  HomeOutlined as HomeOutlinedIcon,
  KeyOutlined as KeyOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  SignpostOutlined as SignpostOutlinedIcon,
  Verified,
} from "@mui/icons-material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PublicIcon from "@mui/icons-material/Public";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import UpdateUserInfoModal from "./Components/UpdateUserInfoModal";
import UserInfoCard from "./Components/UserInfoCard";

interface Field {
  label: string;
  value: string;
}

export default function MyProfilePage() {
  const { data: user, isLoading } = useGetMeQuery(undefined);
  const [openModal, setOpenModal] = useState(false);
  const [currentField, setCurrentField] = useState<Field | null>(null);

  if (isLoading) {
    return <DashboardLoader />;
  }

  const handleOpenModal = (field: Field) => {
    setCurrentField(field);
    setOpenModal(true);
  };

  const userFields = [
    { label: "Full Name", icon: PersonOutlineOutlinedIcon, value: user?.name },
    { label: "Email", icon: EmailOutlinedIcon, value: user?.user?.email },
    { label: "Contact Number", icon: CallOutlinedIcon, value: user?.contact },
    { label: "Password", icon: KeyOutlinedIcon, value: "********" },
    { label: "City", icon: ApartmentIcon, value: user?.address?.city },
    { label: "State", icon: HomeOutlinedIcon, value: user?.address?.state },
    {
      label: "Postal Code",
      icon: SignpostOutlinedIcon,
      value: user?.address?.postalCode,
    },
    { label: "Country", icon: PublicIcon, value: user?.address?.country },
  ];

  return (
    <Container>
      <Stack direction="row" justifyContent="center" py={3}>
        <Box>
          <Paper
            sx={{
              padding: 4,
              background: "linear-gradient(135deg, #007bff, #00c8ff)",
              borderRadius: 3,
              color: "#ffffff",
              boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
              marginBottom: 4,
            }}
          >
            <Stack direction="row" alignItems="center" gap={3}>
              <Avatar
                alt={user?.name}
                src={user?.photo || "/default-avatar.png"}
                sx={{
                  width: 80,
                  height: 80,
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
                  border: "3px solid #ffffff",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
              <Box>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Typography variant="h4" gutterBottom>
                    Welcome, {user?.name || "User"}!
                  </Typography>
                  <Verified fontSize="large" />
                </Stack>
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
                    value: field.value || "",
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
          value={currentField.value}
        />
      )}
    </Container>
  );
}
