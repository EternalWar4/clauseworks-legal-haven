import { useState, FormEvent } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you for your inquiry. We will get back to you shortly.");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-display text-3xl font-bold mb-6">Get in Touch</h3>
            <p className="opacity-90 mb-8 font-body text-lg text-justify">
              Have a legal matter you'd like to discuss? Our team is ready to assist you with expert
              legal guidance and representation.
            </p>
            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Address", value: "New Delhi, India" },
                { icon: Phone, label: "Phone", value: "+91 9354129891" },
                { icon: Mail, label: "Email", value: "nikhilgoeloffice@gmail.com" },
                { icon: Clock, label: "Office Hours", value: "Mon–Fri: 9:30 AM – 6:00 PM\nSat: 10:00 AM – 2:00 PM" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <c.icon className="w-6 h-6 text-accent mt-0.5 shrink-0" />
                  <div>
                    <strong className="block font-body">{c.label}</strong>
                    <span className="opacity-90 font-body whitespace-pre-line">{c.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card text-card-foreground p-8 rounded-lg shadow-xl">
            <h3 className="font-display text-xl font-semibold text-primary mb-6">
              Request a Consultation
            </h3>
            {submitted && (
              <div className="bg-secondary text-secondary-foreground p-3 rounded mb-4 text-sm font-body border border-accent">
                Thank you for your inquiry. We will get back to you shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: "name", label: "Full Name *", type: "text" },
                { id: "email", label: "Email Address *", type: "email" },
                { id: "phone", label: "Phone Number *", type: "tel" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block mb-1.5 font-medium text-sm font-body">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    className="w-full p-3 border border-border rounded text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="practice" className="block mb-1.5 font-medium text-sm font-body">
                  Practice Area
                </label>
                <select
                  id="practice"
                  className="w-full p-3 border border-border rounded text-foreground font-body focus:outline-none focus:border-primary transition-colors bg-background"
                >
                  <option value="">Select Practice Area</option>
                  <option value="litigation">Litigation</option>
                  <option value="arbitration">Arbitration</option>
                  <option value="company-law">Company Law</option>
                  <option value="civil-suits">Civil Suits</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-1.5 font-medium text-sm font-body">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Please briefly describe your legal matter"
                  className="w-full p-3 border border-border rounded text-foreground font-body focus:outline-none focus:border-primary transition-colors resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold rounded transition-all hover:-translate-y-0.5 hover:shadow-lg font-body"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
