import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/common/image.config";
import { z } from "zod";

const createAccountSchema = z.object({
  name: z
    .string({ required_error: "Name is required." })
    .min(2, { message: "Name should be at least 2 characters long." }),
  photo: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Max file size is 500KB.",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "Only .jpg, .jpeg, .png, and .webp files are accepted.",
    }),
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Please enter a valid email." }),
  password: z
    .string({ required_error: "Password is required." })
    .min(8, { message: "Password should be at least 8 characters long." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[@$!%*?&]/, {
      message: "Password must contain at least one special character.",
    })
    .max(32, {
      message: "Password should not be longer than 32 characters.",
    }),
});

export default createAccountSchema;
