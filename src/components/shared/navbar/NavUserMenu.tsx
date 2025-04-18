import { useAuth } from "@/hooks/useAuth";
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

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {user && (
        <DynamicNavUserMenu
          onOpen={handleOpenUserMenu}
          isVerified={user?.isVerified}
          photoUrl={user?.photo}
        />
      )}

      {user && (
        <NavbarUserMenuCard
          onClose={handleCloseUserMenu}
          anchorEl={anchorElUser}
          name={user.name}
          photoUrl={user.photo}
          email={user.email}
          isVerified={user.isVerified}
          isLoading={!user ? true : false}
          role={user.role}
        />
      )}
    </>
  );
}

export default NavUserMenu;
