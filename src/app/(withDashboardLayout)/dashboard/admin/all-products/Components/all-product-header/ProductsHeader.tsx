import DashboardHeaderWithFIlterAndSearchBar from "@/components/shared/dashboard-hearder-with-filter-and-searchbar/DashboardHeaderWithFIlterAndSearchBar";
import useGetAllFilterCategories from "../../../../../../../hooks/useGetAllFilterCategories";
import OpenAddProductModalButton from "../modals/add/AddProductModalButton";
import { shortcutFilterOptions } from "../filter-product-items/filter-product-items";

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
      searchbarOptions={{ query: "searchTerm" }}
    />
  );
}
