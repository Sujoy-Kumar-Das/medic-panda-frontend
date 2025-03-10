import randomUID from "@/utils/randomId";

export const categoryShortcutFilterOptions = [
  {
    id: randomUID(),
    title: "All",
    value: "",
    query: "",
  },
  {
    id: randomUID(),
    title: "Popular",
    value: true,
    query: "popularity",
  },
  {
    id: randomUID(),
    title: "UnPopular",
    value: false,
    query: "popularity",
  },
];

export const categoryAllFilterOptions = [
  {
    id: randomUID(),
    title: "All",
    value: "",
    query: "",
  },
  {
    id: randomUID(),
    title: "New",
    value: "1",
    query: "createdAt",
  },
  {
    id: randomUID(),
    title: "Old",
    value: "-1",
    query: "createdAt",
  },
  {
    id: randomUID(),
    title: "Popular",
    value: true,
    query: "popularity",
  },
  {
    id: randomUID(),
    title: "UnPopular",
    value: false,
    query: "popularity",
  },
];
