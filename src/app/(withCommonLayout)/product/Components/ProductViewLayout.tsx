"use client";

import useSearch from "@/hooks/useSearch";
import ViewComfyAltIcon from "@mui/icons-material/ViewComfyAlt";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import { IconButton, Stack } from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function ProductViewLayout() {
  const { search } = useSearch();
  const params = useSearchParams();

  const layoutParam = params.get("layout");
  const layoutValue = layoutParam === "column" ? "column" : "grid";

  const handleChangeLayout = (value: "grid" | "column") => {
    search({ query: "layout", value });
  };

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton onClick={() => handleChangeLayout("grid")} size="small">
        <ViewComfyAltIcon
          sx={{
            color: layoutValue === "grid" ? "primary.main" : "text.primary",
          }}
        />
      </IconButton>
      <IconButton onClick={() => handleChangeLayout("column")} size="small">
        <ViewWeekIcon
          sx={{
            color: layoutValue === "column" ? "primary.main" : "text.primary",
          }}
        />
      </IconButton>
    </Stack>
  );
}
