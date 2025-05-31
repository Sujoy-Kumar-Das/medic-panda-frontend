import FormModal from "@/components/modal/FormModal/FormModal";
import useAddManufacturer from "@/hooks/useAddManufacturer";
import { createManufacturerValidationSchema } from "@/schemas/manufacture.schema";
import ManufacturerForm from "../../form/ManufacturerForm";

interface AddManufacturerModalProps {
  onClose: () => void;
}

export default function AddManufacturerModal({
  onClose,
}: AddManufacturerModalProps) {
  const { handlerFunc, isLoading } = useAddManufacturer(onClose);
  return (
    <FormModal
      open
      title="Add Manufacturer"
      subtitle="Provide the necessary information to add a new manufacturer"
      onClose={onClose}
    >
      <ManufacturerForm
        onSubmit={handlerFunc}
        onClose={onClose}
        defaultValues={{}}
        isLoading={isLoading}
        type="create"
        validationSchema={createManufacturerValidationSchema}
      />
    </FormModal>
  );
}
