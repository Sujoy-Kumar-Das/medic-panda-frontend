import SearchBar from "@/components/shared/searchBar/SearchBar";

export default function AllUsersSearchBar() {
  return (
    <SearchBar
      query="email"
      placeholder="Search With Email...."
      sxProps={{ width: 350, height: 50 }}
    />
  );
}
