import DashboardHeaderWithFIlterAndSearchBar from "@/components/shared/dashboard-hearder-with-filter-and-searchbar/DashboardHeaderWithFIlterAndSearchBar";
import randomUID from "@/utils/randomId";
import CategoryModalButton from "./add-category-modal/CategoryModalButton";

export default function CategoryHeader() {
  const mainHeaderOptions = {
    title: "Manage Categories",
    subtitle: "Add, edit, and organize categories easily.",
    children: <CategoryModalButton />,
  };

  const shortcutFilterOptions = [
    {
      id: randomUID(),
      title: "All",
      value: "",
      query: "",
    },
    {
      id: randomUID(),
      title: "Recent",
      value: "",
      query: "",
    },
    {
      id: randomUID(),
      title: "Old",
      value: "",
      query: "",
    },
  ];

  return (
    <DashboardHeaderWithFIlterAndSearchBar
      mainHeaderOptions={mainHeaderOptions}
      shortcutFilterOptions={{ items: shortcutFilterOptions }}
      allFilterOptions={{ items: [] }}
      searchbarOptions={{ query: "" }}
    />
  );
}
