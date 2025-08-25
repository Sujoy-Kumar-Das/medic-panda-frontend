"use client";

import useProductLayoutContext from "@/hooks/useProductLayoutContext";
import useSearch from "@/hooks/useSearch";
import ViewComfyAltIcon from "@mui/icons-material/ViewComfyAlt";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import { IconButton, Stack } from "@mui/material";

export default function ProductViewLayout() {
  const { value, onChangeLayout } = useProductLayoutContext();

  const layoutValue = value === "row" ? "row" : "grid";

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton onClick={onChangeLayout} size="small">
        <ViewComfyAltIcon
          sx={{
            color: layoutValue === "grid" ? "primary.main" : "text.primary",
          }}
        />
      </IconButton>
      <IconButton onClick={onChangeLayout} size="small">
        <ViewWeekIcon
          sx={{
            color: layoutValue === "row" ? "primary.main" : "text.primary",
          }}
        />
      </IconButton>
    </Stack>
  );
}
