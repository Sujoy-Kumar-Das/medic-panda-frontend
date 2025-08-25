import PandaSelect from "@/components/form/PandaSelect";
import { useGetAllManufactureQuery } from "@/redux/api";
import { IManufacturer } from "@/types/Imanufacturer.type";

export default function SelectProductManufacturer() {
  const { data, isLoading } = useGetAllManufactureQuery(undefined);

  const items = isLoading
    ? [{ id: "loading", title: "Loading manufacturers...", value: "" }]
    : data?.result?.map((item: IManufacturer) => ({
        id: item._id,
        title: item.name,
        value: item._id,
      })) || [];

  return (
    <PandaSelect
      items={items}
      label="Manufacturer"
      name="product.manufacturer"
      disabled={isLoading}
    />
  );
}
