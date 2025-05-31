import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface OrderInfoProps {
  title: string;
  items: {
    id: string;
    title: string;
    value: String;
  }[];
}

export default function OrderInfo({ title, items }: OrderInfoProps) {
  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>

      {items.map((item) => (
        <>
          {item.title === "thumbnail" ? (
            <Image
              src={item.value as string}
              alt={item.title}
              height={50}
              width={50}
            />
          ) : (
            <Typography key={item.id} variant="body2">
              <strong>{item.title}:</strong> {item.value ?? "N/A"}
            </Typography>
          )}
        </>
      ))}
    </Box>
  );
}
