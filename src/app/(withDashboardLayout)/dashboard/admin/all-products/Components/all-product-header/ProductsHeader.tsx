import DashboardHeaderWithFIlterAndSearchBar from "@/components/shared/dashboard-hearder-with-filter-and-searchbar/DashboardHeaderWithFIlterAndSearchBar";
import OpenAddProductModalButton from "../add-product-modal/AddProductModalButton";
import { shortcutFilterOptions } from "../filter-product-items/filter-product-items";
import useGetAllFilterCategories from "../../../../../../../hooks/useGetAllFilterCategories";

export default function ProductsHeader() {
  const { items } = useGetAllFilterCategories();
  const mainHeaderOptions = {
    title: "Manage Products",
    subtitle:
      "View, edit, and organize all products in your store effortlessly",
    children: <OpenAddProductModalButton />,
  };
  return (
    <DashboardHeaderWithFIlterAndSearchBar
      mainHeaderOptions={mainHeaderOptions}
      allFilterOptions={{ items }}
      shortcutFilterOptions={{ items: shortcutFilterOptions }}
      searchbarOptions={{ query: "name" }}
    />
  );
}
