import DashboardHeaderWithFIlterAndSearchBar from "@/components/shared/dashboard-hearder-with-filter-and-searchbar/DashboardHeaderWithFIlterAndSearchBar";
import randomUID from "@/utils/randomId";
import AddManufacturerButton from "./add-manufacturer-modal/AddManufacturerButton";

export default function ManufacturerHeader() {
  const mainHeaderOptions = {
    title: "Manufacturer Management",
    subtitle:
      "View, add, and manage manufacturers for your online pharmacy effortlessly",
    children: <AddManufacturerButton />,
  };
  const shortcutFilterOptions = [
    { id: randomUID(), query: "", title: "All", value: "ffff" },
    { id: randomUID(), query: "createdAt", title: "New", value: "aaaa" },
    { id: randomUID(), query: "createdAt", title: "Old", value: "hhhhh" },
  ];

  return (
    <DashboardHeaderWithFIlterAndSearchBar
      mainHeaderOptions={mainHeaderOptions}
      shortcutFilterOptions={{ items: shortcutFilterOptions }}
      allFilterOptions={{ items: shortcutFilterOptions }}
      searchbarOptions={{ query: "" }}
    />
  );
}
