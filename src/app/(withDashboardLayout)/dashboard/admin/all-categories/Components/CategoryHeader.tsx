import DashboardHeaderWithFIlterAndSearchBar from "@/components/shared/dashboard-hearder-with-filter-and-searchbar/DashboardHeaderWithFIlterAndSearchBar";
import CategoryModalButton from "./modals/add-category-modal/CategoryModalButton";
import {
  categoryAllFilterOptions,
  categoryShortcutFilterOptions,
} from "./category.filter-item";

export default function CategoryHeader() {
  const mainHeaderOptions = {
    title: "Manage Categories",
    subtitle: "Add, edit, and organize categories easily.",
    children: <CategoryModalButton />,
  };

  return (
    <DashboardHeaderWithFIlterAndSearchBar
      mainHeaderOptions={mainHeaderOptions}
      shortcutFilterOptions={{ items: categoryShortcutFilterOptions }}
      allFilterOptions={{ items: categoryAllFilterOptions }}
      searchbarOptions={{ query: "searchTerm" }}
    />
  );
}
