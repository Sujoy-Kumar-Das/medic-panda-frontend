import { FieldValues } from "react-hook-form";
import { AnyZodObject } from "zod";

export interface IAddAndEditFormProps {
  onSubmit: (data: FieldValues) => Promise<void>;
  onClose: () => void;
  validationSchema: AnyZodObject;
  isLoading: boolean;
  type: "create" | "edit";
  defaultValues: object;
}
