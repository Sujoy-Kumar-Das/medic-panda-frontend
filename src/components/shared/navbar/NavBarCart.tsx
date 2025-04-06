"use client";
import useGetCartLength from "@/hooks/useGetCartLength";
import dynamic from "next/dynamic";
import { useState } from "react";
import NavCartCards from "./NavCartCards";
import NavCartLoaderButton from "./NavCartLoaderButton";

const DynamicNavCartButton = dynamic(() => import("./NavCartButton"), {
  loading: () => <NavCartLoaderButton />,
});

export default function NavBarCart() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const { cartLength } = useGetCartLength();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <DynamicNavCartButton
        cartItemLength={cartLength}
        onOpen={handleOpenUserMenu}
      />

      {anchorElUser && (
        <NavCartCards
          anchorElUser={anchorElUser}
          onClose={handleCloseUserMenu}
        />
      )}
    </>
  );
}
