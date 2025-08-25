"use client";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
export default function NavSearchCompo() {
  const router = useRouter();

  const handleNavSearch = () => {
    router.push("/");
  };

  return (
    <IconButton
      onClick={handleNavSearch}
      sx={{
        color: "primary.main",
      }}
    >
      <SearchIcon />
    </IconButton>
  );
}
