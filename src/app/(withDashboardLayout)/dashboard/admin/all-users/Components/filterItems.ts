export const filterItemsData = [
  { title: "All", value: "", query: "" },
  { title: "Admin", value: "admin", query: "role" },
  { title: "User", value: "user", query: "role" },
  { title: "Active", value: false, query: "isBlocked" },
  { title: "Blocked", value: true, query: "isBlocked" },
  { title: "Verified", value: true, query: "isVerified" },
  { title: "Unverified", value: false, query: "isVerified" },
].map((item) => ({ ...item, id: crypto.randomUUID() }));
