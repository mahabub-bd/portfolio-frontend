"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitStatus("Sending...");

    try {
      // TODO: Implement actual form submission logic here
      console.log("Form data:", data);

      setSubmitStatus("Message sent successfully!");
      reset();
      setTimeout(() => setSubmitStatus(""), 3000);
    } catch {
      setSubmitStatus("Please use the email link below to contact me");
      setTimeout(() => setSubmitStatus(""), 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-card border border-border rounded-lg shadow-lg p-4 sm:p-8 animate-fade-in-up"
    >
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          {...register("name")}
          type="text"
          className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          {...register("message")}
          className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition min-h-32"
          placeholder="Your message..."
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition hover:scale-105 transform font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {submitStatus && (
        <p className="text-sm text-primary text-center">{submitStatus}</p>
      )}
    </form>
  );
}
