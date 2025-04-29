import DashboardHeaderWithFIlterAndSearchBar from "@/components/shared/dashboard-hearder-with-filter-and-searchbar/DashboardHeaderWithFIlterAndSearchBar";
import {
  orderAllFilterOptions,
  orderShortcutFilterItems,
} from "../../../admin/all-orders/Components/filter-items/order.filter.filter.items";

export default function OrderHeader() {
  const mainHeaderOptions = {
    title: "Your Orders",
    subtitle:
      "Manage your orders, track their status, and view details for each transaction.",
  };

  return (
    <DashboardHeaderWithFIlterAndSearchBar
      mainHeaderOptions={mainHeaderOptions}
      shortcutFilterOptions={{ items: orderShortcutFilterItems }}
      allFilterOptions={{ items: orderAllFilterOptions }}
      searchbarOptions={{
        query: "searchTerm",
        placeholder: "Search Your Order",
      }}
    />
  );
}
