"use client";
import { useAuth } from "@/hooks/useAuth";
import useSocket from "@/hooks/useSocket";
import { useGetAllCartProductsQuery } from "@/redux/api/addToCart.api";
import { ICartItemLocal } from "@/redux/features/cart.slice";
import { useAppSelector } from "@/redux/hooks";
import { ICart } from "@/types";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import CartItems from "./CartItems";
import NavCartLoaderButton from "./NavCartLoaderButton";

const NavCartButton = dynamic(() => import("./NavCartButton"), {
  loading: () => <NavCartLoaderButton />,
});

interface ICartData {
  id: string;
  name: string;
  thumbnail: string;
  total: number;
  quantity: number;
}

export default function NavBarCart() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const [cartData, setCartData] = useState<ICartData[] | undefined>(undefined);

  // get carts from local storage via redux state
  const { carts } = useAppSelector((state) => state.cart);

  // get carts from server via rtk query
  const { data, isLoading, refetch } = useGetAllCartProductsQuery(undefined);

  // auth state from context api
  const { user } = useAuth();

  useEffect(() => {
    if (user && user.userId && data?.length) {
      setCartData(
        data.map((cart: ICart) => ({
          id: cart?.product?._id,
          name: cart?.product?.name,
          thumbnail: cart?.product?.thumbnail,
          total: cart.totalPrice,
          quantity: cart.quantity,
        }))
      );
    } else if (!user && carts.length) {
      setCartData(
        carts.map((cart: ICartItemLocal) => ({
          id: cart.id,
          name: cart?.name,
          thumbnail: cart.thumbnail,
          total: cart.totalPrice,
          quantity: cart.quantity,
        }))
      );
    } else {
      setCartData(undefined);
    }
  }, [carts, data, user]);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useSocket(["order"], () => {
    refetch();
  });

  return (
    <>
      <NavCartButton
        cartItemLength={Number(cartData?.length)}
        handleOpenUserMenu={handleOpenUserMenu}
      />

      <CartItems
        anchorElUser={anchorElUser}
        handleCloseUserMenu={handleCloseUserMenu}
        carts={cartData}
        isLoading={isLoading}
      />
    </>
  );
}
