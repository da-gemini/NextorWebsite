import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
      // TODO: Connect to backend to send email
      toast.success("Thank you! We'll respond within 24 hours.");
      setForm({ name: "", email: "", company: "", product: "", quantity: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full h-11 px-4 rounded-lg border border-border bg-card text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200";

  const { contact } = siteConfig;

  return (
    <PageTransition>
      <main className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <h1 className="text-foreground mb-3">Request a Quote</h1>
              <p className="font-body text-sm text-muted-foreground mb-8 max-w-lg">
                Tell us what you need. Include the product, quantity, and any specific requirements.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground mb-1.5 block">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required className={inputClass} />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground mb-1.5 block">Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs font-medium text-foreground mb-1.5 block">Company Name</label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Your Company" className={inputClass} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground mb-1.5 block">Product *</label>
                    <select name="product" value={form.product} onChange={handleChange} required className={inputClass}>
                      <option value="">Select Product</option>
                      <option value="cotton-tissues">Cotton Tissues</option>
                      <option value="guar-gum">Guar Gum</option>
                      <option value="rice">Rice</option>
                      <option value="honey">Honey</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground mb-1.5 block">Estimated Quantity</label>
                    <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g., 10 MT" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs font-medium text-foreground mb-1.5 block">Additional Requirements</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Specific requirements, certifications, delivery timeline..."
                    rows={4}
                    className={`${inputClass} h-auto py-3 resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center h-11 px-7 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm shadow-md hover:shadow-lg hover:bg-primary/90 active:scale-[0.97] transition-all duration-200 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit Request"}
                  <Send className="ml-2 group-hover:translate-x-0.5 transition-transform" size={15} />
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-foreground text-base font-display font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: contact.email },
                    { icon: Phone, label: "Phone", value: contact.phone },
                    { icon: MapPin, label: "Office", value: contact.address },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="text-primary" size={15} />
                      </div>
                      <div>
                        <div className="font-body text-xs text-muted-foreground">{item.label}</div>
                        <div className="font-body text-sm text-foreground">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/15 rounded-xl p-6">
                <h4 className="font-display font-semibold text-sm text-foreground mb-2">Response Time</h4>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  We typically respond within 24 hours on business days. For urgent requirements, please mention it in your message.
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
