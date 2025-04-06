import { useAuth } from "@/hooks/useAuth";
import Person2Icon from "@mui/icons-material/Person2";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";

interface NavbarUserMenuButtonProps {
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  photoUrl?: string;
  isVerified?: boolean;
}

export default function NavbarUserMenuButton({
  onOpen,
  photoUrl,
  isVerified,
}: NavbarUserMenuButtonProps) {
  return (
    <IconButton
      onClick={onOpen}
      sx={{
        p: 0,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      {photoUrl ? (
        <Image
          alt="User Avatar"
          src={photoUrl}
          height={40}
          width={40}
          style={{
            borderRadius: "50%",
            border: isVerified ? "2px solid #339aff" : "2px solid black",
          }}
        />
      ) : (
        <Person2Icon sx={{ fontSize: 40 }} />
      )}
    </IconButton>
  );
}
