"use client";

import DashboardLoader from "@/components/shared/loader/DashboardLoader";
import { useUpdateCustomerInfoMutation } from "@/redux/api/customer.api";
import { useGetMeQuery } from "@/redux/api/myProfile.api";
import { imageUploader } from "@/utils/imageUploader";
import {
  HomeOutlined as HomeOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  SignpostOutlined as SignpostOutlinedIcon,
  CallOutlined as CallOutlinedIcon,
  Verified,
} from "@mui/icons-material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PublicIcon from "@mui/icons-material/Public";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import UpdateUserInfoModal from "./Components/UpdateUserInfoModal";
import UserInfoCard from "./Components/UserInfoCard";

interface Field {
  label: string;
  value: string;
}

export default function MyProfilePage() {
  // get user data
  const { data, isLoading } = useGetMeQuery(undefined);
  // state for handle modal
  const [openModal, setOpenModal] = useState(false);
  const [currentField, setCurrentField] = useState<Field | null>(null);

  // update user redux hook
  const [updateCustomerImage, { isLoading: imageLoading }] =
    useUpdateCustomerInfoMutation();

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

  // Change image handler
  const handleChangeImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const file = event.target.files?.[0];

      if (!file) {
        toast.error("No file selected. Please choose an image.");
        return;
      }

      const imageURL = await imageUploader(file);

      if (!imageURL) {
        toast.error("Image upload failed. Please try again.");
        return;
      }

      const res = await updateCustomerImage({ photo: imageURL }).unwrap();

      if (res?.success) {
        toast.success("Profile image uploaded successfully.");
      } else {
        toast.error("Failed to update profile image.");
      }
    } catch (error) {
      toast.error(
        "An error occurred while uploading the image. Please try again."
      );
    }
  };

  if (isLoading) {
    return <DashboardLoader />;
  }

  return (
    <Container maxWidth="xl" sx={{ width: "100%" }}>
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
              <Box
                sx={{
                  position: "relative",
                  width: 100,
                  height: 100,
                  "&:hover .upload-btn": {
                    opacity: 1,
                    visibility: "visible",
                  },
                }}
              >
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
                <>
                  <Box
                    className="upload-btn"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      opacity: 0,
                      visibility: "hidden",
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    <input
                      accept="image/*"
                      id="upload-image"
                      type="file"
                      name="photo"
                      style={{ display: "none" }}
                      onChange={handleChangeImage}
                    />
                    <label htmlFor="upload-image">
                      <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        sx={{
                          padding: "6px 12px",
                          borderRadius: "50px",
                        }}
                      >
                        Change
                      </Button>
                    </label>
                  </Box>
                </>
              </Box>

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
