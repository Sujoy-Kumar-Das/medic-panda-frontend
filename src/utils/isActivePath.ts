import { ReadonlyURLSearchParams } from "next/navigation";

interface isActivePathItem {
  query: string;
  value: boolean | string;
}

interface isActivePathParams {
  item: isActivePathItem;
  searchParams: ReadonlyURLSearchParams;
}

const isActivePath = ({ item, searchParams }: isActivePathParams) => {
  if (!item.query) return !searchParams.toString(); // 'All' is active when no query params exist

  const queryValue = searchParams.get(item.query);
  return queryValue === String(item.value);
};

export default isActivePath;
