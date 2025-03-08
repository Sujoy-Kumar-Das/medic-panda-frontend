"use client";

import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import {
  CallOutlined as CallOutlinedIcon,
  HomeOutlined as HomeOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  SignpostOutlined as SignpostOutlinedIcon,
  Verified,
} from "@mui/icons-material";
import ApartmentIcon from "@mui/icons-material/Apartment";
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
import { useState } from "react";
import UpdateUserImage from "./UpdateUserImage";
import UpdateUserInfoModal from "./UpdateUserInfoModal";
import UserInfoCard from "./UserInfoCard";

interface Field {
  label: string;
  value: string;
}

function UserInfoCompo({ data: user }: { data: any }) {
  // state for handle modal
  const [openModal, setOpenModal] = useState(false);
  const [currentField, setCurrentField] = useState<Field | null>(null);

  const handleOpenModal = (field: Field) => {
    setCurrentField(field);
    setOpenModal(true);
  };

  // user fields array
  const userFields = [
    {
      label: "Full Name",
      name: "name",
      icon: PersonOutlineOutlinedIcon,
      value: user?.name,
    },
    {
      label: "Contact",
      name: "contact",
      icon: CallOutlinedIcon,
      value: user?.contact,
    },
    {
      label: "City",
      icon: ApartmentIcon,
      value: user?.address?.city,
      name: "address.city",
    },
    {
      label: "Street",
      icon: HomeOutlinedIcon,
      value: user?.address?.street,
      name: "address.street",
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

  return (
    <Container>
      <Stack direction="row" justifyContent="center" mt={3} mb={4}>
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
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Stack direction="row" alignItems="center" gap={3}>
              {/* Image with upload hover */}
              <UpdateUserImage photoLink={user?.photo} />

              {/* User Info */}
              <Box>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Typography
                    variant="h4"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    Welcome, {user?.name || "User"}!
                  </Typography>
                  {user?.user?.isVerified && (
                    <Tooltip title="Verified">
                      <Verified
                        sx={{
                          fontSize: 28,
                          color: "#007bff",
                          background: "#fff",
                          borderRadius: "50%",
                          padding: "2px",
                          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      />
                    </Tooltip>
                  )}
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

          <Grid container spacing={3}>
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

const UserInfoHOC = HandleLoadingErrorAndNoData(UserInfoCompo);

export default UserInfoHOC;
