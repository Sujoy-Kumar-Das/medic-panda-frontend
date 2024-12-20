import CustomModal from "@/components/customModal/CustomModal";
import { ICategory } from "@/types";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface ICategoryModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: ICategory[];
}

export default function CategoryModal({
  open,
  setOpen,
  data,
}: ICategoryModalProps) {
  return (
    <CustomModal open={open} setOpen={setOpen} closeBtn={false}>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            color={"text.primary"}
            fontWeight={"bold"}
            mt={2}
            textAlign={"center"}
          >
            Categories
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Stack direction={"column"} spacing={1}>
            <Typography
              component={Link}
              textAlign={"center"}
              href={`/product`}
              onClick={() => setOpen((prev) => !prev)}
              sx={{
                textDecoration: "none",
                color: "text.secondary",
                fontSize: 18,
                fontWeight: "500",
                display: "block",
                transition: "color 0.3s",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              All
            </Typography>
            {data?.map((item) => (
              <Typography
                key={item._id}
                component={Link}
                textAlign={"center"}
                href={`/product?category=${item._id}`}
                onClick={() => setOpen((prev) => !prev)}
                sx={{
                  textDecoration: "none",
                  color: "text.secondary",
                  fontSize: 18,
                  fontWeight: "500",
                  display: "block",
                  transition: "color 0.3s",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {item.name}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Box>
    </CustomModal>
  );
}
