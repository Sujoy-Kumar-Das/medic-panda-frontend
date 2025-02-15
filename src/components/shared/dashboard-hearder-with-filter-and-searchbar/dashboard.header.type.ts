import { IFilterItem } from "@/types/filter-item";
import { ReactNode } from "react";

export interface ISearchOptions {
  query: string;
  placeholder?: string;
}

export interface IAllFilterSearchOptions {
  items: IFilterItem[];
  placeholder?: string;
}

export interface IMainHeaderOptions {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export interface IShortcutFilterOptions {
  items: IFilterItem[];
}

export interface IDashboardHeaderWithFIlterAndSearchBar {
  mainHeaderOptions: IMainHeaderOptions;
  shortcutFilterOptions: IShortcutFilterOptions;
  allFilterOptions: IAllFilterSearchOptions;
  searchbarOptions: ISearchOptions;
}
