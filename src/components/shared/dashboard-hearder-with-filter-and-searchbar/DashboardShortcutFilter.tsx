import ShortcutFIlterButtons from "../shorcut-filter-button/ShortcutFIlterButtons";
import { IShortcutFilterOptions } from "./dashboard.header.type";

function DashboardShortcutFilter({ items }: IShortcutFilterOptions) {
  return <ShortcutFIlterButtons filterItems={items} />;
}

export default DashboardShortcutFilter;
