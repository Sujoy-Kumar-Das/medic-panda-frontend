import DashboardHeaderWithFIlterAndSearchBar from "@/components/shared/dashboard-hearder-with-filter-and-searchbar/DashboardHeaderWithFIlterAndSearchBar";
import {
  allOrderFilterItems,
  shortcutOrderFilterOptions,
} from "./filter-items";

export default function OrderHeader() {
  const mainHeaderOptions = {
    title: "Your Orders",
    subtitle:
      "Manage your orders, track their status, and view details for each transaction.",
  };

  return (
    <DashboardHeaderWithFIlterAndSearchBar
      mainHeaderOptions={mainHeaderOptions}
      shortcutFilterOptions={{ items: shortcutOrderFilterOptions }}
      allFilterOptions={{ items: allOrderFilterItems }}
      searchbarOptions={{
        query: "searchTerm",
        placeholder: "Search Your Order",
      }}
    />
  );
}
