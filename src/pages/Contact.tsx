import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll respond within 24 hours.");
    setForm({ name: "", email: "", company: "", product: "", quantity: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full h-11 px-4 rounded-lg border border-border bg-card text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <main className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-foreground mb-4">Request a Quote</h1>
          <p className="font-body text-lg text-muted-foreground mb-10">
            Tell us what you need. Include the product, quantity, and any specific requirements. Our team will respond with pricing and specifications within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name *"
                required
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className={inputClass}
              />
            </div>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className={inputClass}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="">Select Product *</option>
                <option value="cotton-tissues">Cotton Tissues</option>
                <option value="guar-gum">Guar Gum</option>
                <option value="rice">Rice</option>
                <option value="honey">Honey</option>
              </select>
              <input
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                placeholder="Estimated Quantity (e.g., 10 MT)"
                className={inputClass}
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Additional requirements or specifications..."
              rows={5}
              className={`${inputClass} h-auto py-3 resize-none`}
            />
            <button
              type="submit"
              className="inline-flex items-center h-11 px-8 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm shadow-sm hover:scale-[1.02] active:scale-[0.97] transition-transform"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
