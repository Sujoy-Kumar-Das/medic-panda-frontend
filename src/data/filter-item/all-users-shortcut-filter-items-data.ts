import randomUID from "@/utils/randomId";

const shortcutFilterItemsData = [
  { title: "All", value: false, query: "" },
  { title: "Active", value: false, query: "isBlocked" },
  { title: "InActive", value: true, query: "isBlocked" },
].map((item) => ({ id: randomUID(), ...item }));

export default shortcutFilterItemsData;
