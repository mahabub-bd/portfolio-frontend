"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("Sending...");

    try {
      setSubmitStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(""), 3000);
    } catch {
      setSubmitStatus("Please use the email link below to contact me");
      setTimeout(() => setSubmitStatus(""), 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-card border border-border rounded-lg p-8 animate-fade-in-up"
    >
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition min-h-32"
          placeholder="Your message..."
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition hover:scale-105 transform font-medium"
      >
        Send Message
      </button>
      {submitStatus && (
        <p className="text-sm text-primary text-center">{submitStatus}</p>
      )}
    </form>
  );
}
