import { Box } from "@mui/material";
import { ReactNode } from "react";

interface ReplyContainerProps {
  children: ReactNode;
}

export default function ReplyContainer({ children }: ReplyContainerProps) {
  return (
    <Box
      width="95%"
      marginLeft="auto"
      marginTop={3}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      {children}
    </Box>
  );
}
