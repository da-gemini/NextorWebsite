import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Send } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { siteConfig } from "@/config/site";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(siteConfig.contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      toast.success("Thank you! We'll respond within 24 hours.");
      setForm({ name: "", email: "", company: "", product: "", quantity: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full h-10 px-3.5 rounded-lg border border-border bg-card text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all";

  const { contact } = siteConfig;

  return (
    <PageTransition>
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <h1 className="text-foreground mb-2">Request a Quote</h1>
              <p className="font-body text-sm text-muted-foreground mb-6 max-w-md">
                Tell us what you need — product, quantity, and any specific requirements.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground mb-1 block">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required className={inputClass} />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground mb-1 block">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs font-medium text-foreground mb-1 block">Company</label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Your Company" className={inputClass} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground mb-1 block">Product *</label>
                    <select name="product" value={form.product} onChange={handleChange} required className={inputClass}>
                      <option value="">Select Product</option>
                      <option value="cotton-tissues">Cotton Tissues</option>
                      <option value="guar-gum">Guar Gum</option>
                      <option value="rice">Rice</option>
                      <option value="honey">Honey</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground mb-1 block">Quantity</label>
                    <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g., 10 MT" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs font-medium text-foreground mb-1 block">Requirements</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Specific requirements, certifications, timeline..."
                    rows={3}
                    className={`${inputClass} h-auto py-2.5 resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center h-10 px-6 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm shadow-md hover:shadow-lg hover:bg-primary/90 active:scale-[0.97] transition-all disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit Request"}
                  <Send className="ml-2 group-hover:translate-x-0.5 transition-transform" size={14} />
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="text-foreground text-sm font-display font-semibold mb-3">Contact Information</h3>
                <div className="space-y-3">
                  {[
                    { icon: Mail, label: "Email", value: contact.email },
                    { icon: MapPin, label: "Office", value: contact.address },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="text-primary" size={14} />
                      </div>
                      <div>
                        <div className="font-body text-xs text-muted-foreground">{item.label}</div>
                        <div className="font-body text-sm text-foreground">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/15 rounded-xl p-5">
                <h4 className="font-display font-semibold text-xs text-foreground mb-1.5">Response Time</h4>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  We typically respond within 24 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Contact;
