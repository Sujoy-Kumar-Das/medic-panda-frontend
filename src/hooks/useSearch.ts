import { usePathname, useRouter, useSearchParams } from "next/navigation";

/**
 * Custom hook to update search query parameters in the URL.
 * @returns {Object} search - Function to update or remove query parameters.
 */
export default function useSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const search = ({ query, value }: { query: string; value?: string }) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(query, value);
    } else {
      params.delete(query);
    }

    const newQueryString = params.toString();
    replace(newQueryString ? `${pathName}?${newQueryString}` : pathName);
  };

  return { search };
}
