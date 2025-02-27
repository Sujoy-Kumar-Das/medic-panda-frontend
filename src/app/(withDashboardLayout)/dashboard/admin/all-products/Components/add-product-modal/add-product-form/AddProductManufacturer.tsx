import PandaSelect from "@/components/form/PandaSelect";
import { useGetAllManufactureQuery } from "@/redux/api/manufacture.api";
import { IManufacturer } from "@/types/Imanufacturer.type";

export default function AddProductManufacturer() {
  const { data } = useGetAllManufactureQuery(undefined);

  const items = data?.map((item: IManufacturer) => ({
    id: item._id,
    title: item.name,
    value: item._id,
  }));

  return (
    <PandaSelect
      items={items}
      label="Manufacturer"
      name="product.manufacturer"
    />
  );
}
