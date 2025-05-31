import DashboardHeaderWithFIlterAndSearchBar from "@/components/shared/dashboard-hearder-with-filter-and-searchbar/DashboardHeaderWithFIlterAndSearchBar";
import { Box } from "@mui/material";
import {
  orderAllFilterOptions,
  orderShortcutFilterItems,
} from "./filter-items/order.filter.filter.items";

export default function OrderHeader() {
  const mainHeaderProps = {
    title: "Order Management Dashboard",
    subtitle: "View, manage, and track all customer orders in real-time.",
  };
  return (
    <Box>
      <DashboardHeaderWithFIlterAndSearchBar
        mainHeaderOptions={mainHeaderProps}
        shortcutFilterOptions={{ items: orderShortcutFilterItems }}
        allFilterOptions={{ items: orderAllFilterOptions }}
        searchbarOptions={{
          query: "searchTerm",
          placeholder: "Search By Order ID",
        }}
      />
    </Box>
  );
}
