import FormModal from "@/components/modal/FormModal/FormModal";
import useEditManufacturer from "@/hooks/useEditManufacturer";
import { createManufacturerValidationSchema } from "@/schemas/manufacture.schema";
import { IManufacturer } from "@/types/Imanufacturer.type";
import ManufacturerForm from "../form/ManufacturerForm";

interface ManufacturerEditModalProps {
  onClose: () => void;
  manufacturer: IManufacturer;
}

export default function ManufacturerEditModal({
  onClose,
  manufacturer,
}: ManufacturerEditModalProps) {
  const { handlerFunc, isLoading } = useEditManufacturer(onClose);
  return (
    <FormModal
      open
      onClose={onClose}
      title="Edit Manufacturer"
      subtitle="Modify the information of the manufacturer below"
    >
      <ManufacturerForm
        onSubmit={(data) => handlerFunc(manufacturer._id, data)}
        onClose={onClose}
        defaultValues={manufacturer}
        isLoading={isLoading}
        type="edit"
        validationSchema={createManufacturerValidationSchema}
      />
    </FormModal>
  );
}
