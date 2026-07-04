import { z } from "zod";

export const BookingSchema = z.object({
  service: z.object({
    id: z.string(),
    name: z.string(),
    price: z.string().optional()
  }),
  stylist: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string().optional()
  }),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Date must be in YYYY-MM-DD format"
  }),
  time: z.string().min(1, { message: "Time slot is required" }),
  client: z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    phone: z.string().regex(/^[6-9]\d{9}$|^[+]\d{10,12}$/, {
      message: "Please enter a valid 10-digit mobile number"
    }),
    email: z.string().email({ message: "Invalid email address" }).or(z.literal("")),
    notes: z.string().optional()
  })
});

export const NewsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" })
});

export type BookingInput = z.infer<typeof BookingSchema>;
export type NewsletterInput = z.infer<typeof NewsletterSchema>;
