import useUploadImage from "@/hooks/useUploadImage";
import { Avatar, Box, Button, CircularProgress } from "@mui/material";
import Image from "next/image";

export default function UpdateUserImage({ photoLink }: { photoLink: string }) {
  const { handlerFunc, isLoading } = useUploadImage();

  // Change image handler
  const handleChangeImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files?.length) return;

    await handlerFunc(event);
  };

  return (
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
      <Avatar sx={{ height: 100, width: 100, borderRadius: "50%" }}>
        {isLoading ? (
          <CircularProgress
            size={40}
            sx={{
              color: "primary.main",
              display: "flex",
              justifySelf: "center",
              alignItems: "center",
            }}
          />
        ) : (
          <Image
            alt="User image"
            src={photoLink}
            height={100}
            width={100}
            style={{
              width: 100,
              height: 100,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
              border: "2px solid #ffffff",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        )}
      </Avatar>
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
              disabled={isLoading}
            >
              {isLoading ? "Uploading..." : "Change"}
            </Button>
          </label>
        </Box>
      </>
    </Box>
  );
}
