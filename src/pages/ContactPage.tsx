import { useState } from "react";
import { toast } from "sonner";

const MESSAGE_TYPES = [
  "Report a broken link",
  "Suggest a program",
  "General feedback",
  "Partner with us",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", type: MESSAGE_TYPES[0], message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been received.");
    setForm({ name: "", email: "", type: MESSAGE_TYPES[0], message: "" });
  };

  return (
    <div className="container py-12 max-w-2xl">
      <h1 className="font-serif text-3xl md:text-4xl mb-2">Contact Us</h1>
      <p className="text-muted-foreground mb-8">
        Have a correction, suggestion, or question? Please contact us through the form or email at rise_initiative@cornell.edu. We'd love to hear from you.
      </p>

      <div className="rounded-lg border border-secondary/40 bg-secondary/10 p-4 mb-8 text-sm text-muted-foreground">
        <strong className="text-foreground">Please note:</strong> RISE cannot provide eligibility determinations or process applications. We welcome corrections, program suggestions, and general feedback.
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1.5">Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Message Type</label>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="w-full rounded-lg border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {MESSAGE_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Message</label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-lg border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
