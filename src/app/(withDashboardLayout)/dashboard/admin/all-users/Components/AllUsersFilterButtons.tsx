import { Button, Stack } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const rowFilterItems = [
  { id: 0, title: "All", value: false, query: "" },
  { id: 1, title: "Active", value: false, query: "isBlocked" },
  { id: 2, title: "InActive", value: true, query: "isBlocked" },
];

export default function AllUsersFilterButtons() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  // Handle filter users
  const filteredDataHandler = (filterItem: {
    query: string;
    value: boolean;
  }) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!filterItem.query) {
      // Clear all possible filters
      rowFilterItems.forEach((item) => params.delete(item.query));
    } else {
      params.set(filterItem.query, String(filterItem.value));
    }

    replace(`${pathName}?${params.toString()}`);
  };

  // Check if a button is active
  const isActive = (item: { query: string; value: boolean }) => {
    if (!item.query) return !searchParams.toString(); // 'All' is active when no query params exist
    const queryValue = searchParams.get(item.query);
    return queryValue === String(item.value);
  };

  return (
    <Stack direction="row" alignItems="center" gap={2}>
      {rowFilterItems.map((item) => (
        <Button
          size="small"
          key={item.id}
          sx={{
            bgcolor: isActive(item) ? "primary.main" : "background.default",
            color: isActive(item) ? "white" : "text.primary",
            boxShadow: "none",
            borderRadius: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: isActive(item) ? "primary.dark" : "background.paper",
              boxShadow: "none",
            },
          }}
          onClick={() =>
            filteredDataHandler({ query: item.query, value: item.value })
          }
        >
          {item.title}
        </Button>
      ))}
    </Stack>
  );
}
