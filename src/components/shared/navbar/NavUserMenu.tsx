import { useAuth } from "@/hooks/useAuth";
import useGetMe from "@/hooks/useGetMe";
import dynamic from "next/dynamic";
import { useState } from "react";
import NavbarUserMenuCard from "./NavbarUserMenuCard";
import NavUserMenuLoaderButton from "./NavuserMenuLoaderButton";

const DynamicNavUserMenu = dynamic(() => import("./NavbarUserMenuButton"), {
  loading: () => <NavUserMenuLoaderButton />,
});

function NavUserMenu() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const { user } = useAuth();

  const { user: userDetails, isLoading } = useGetMe();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {user && userDetails && (
        <DynamicNavUserMenu
          onOpen={handleOpenUserMenu}
          isVerified={userDetails?.isVerified}
          photoUrl={userDetails?.photo}
        />
      )}

      {user && userDetails && (
        <NavbarUserMenuCard
          onClose={handleCloseUserMenu}
          anchorEl={anchorElUser}
          name={userDetails.name}
          photoUrl={userDetails.photo}
          email={userDetails.email}
          isVerified={userDetails.isVerified}
          isLoading={isLoading}
          role={userDetails.role}
        />
      )}
    </>
  );
}

export default NavUserMenu;
