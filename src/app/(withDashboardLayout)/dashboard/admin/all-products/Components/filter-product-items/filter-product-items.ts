import randomUID from "@/utils/randomId";

export const shortcutFilterOptions = [
  { title: "All", query: "", value: "" },
  { title: "Stock", query: "stockStatus", value: true },
  { title: "Out Of Stock", query: "stockStatus", value: false },
].map((item) => ({ id: randomUID(), ...item }));
