import { z } from "zod";

export const contactPayloadSchema = z.object({
  jobType: z.string().min(1),
  jobSize: z.string().min(1),
  location: z.string().min(2, "Please enter a town or postcode"),
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  email: z.string().optional(),
});

export type ContactPayload = z.infer<typeof contactPayloadSchema>;

export function normalizeContactPayload(
  data: ContactPayload
): ContactPayload {
  const email =
    data.email && data.email.trim() !== "" ? data.email.trim() : undefined;
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Invalid email address");
  }
  return { ...data, email };
}
