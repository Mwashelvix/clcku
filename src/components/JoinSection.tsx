import { useState } from "react";
import { CheckCircle, UserPlus, Heart, BookOpen, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const benefits = [
  { icon: Heart, text: "Grow deeper in your faith through Ignatian spirituality" },
  { icon: Users, text: "Join a supportive community of like-minded students" },
  { icon: BookOpen, text: "Access retreats, Bible studies, and formation programs" },
  { icon: UserPlus, text: "Develop leadership skills and serve the community" },
];

const JoinSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      full_name: formData.get("full_name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      year_of_study: formData.get("year_of_study") as string,
      message: formData.get("message") as string,
    };

    try {
      const { error } = await supabase.functions.invoke("notify-join-request", {
        body: data,
      });

      if (error) throw error;
      setSubmitted(true);
      toast.success("Your request has been submitted!");
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="join" className="py-20 bg-gold-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2 font-body">Become Part of the Family</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Join CLC Kenyatta University
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're a first-year or a returning student, everyone is welcome! 
              Come as you are — all you need is an open heart and a desire to grow in faith.
            </p>

            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-3">
                  <b.icon className="w-5 h-5 text-secondary shrink-0" />
                  <p className="font-body text-foreground">{b.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-8 shadow-warm">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="font-body text-muted-foreground">We'll be in touch soon. Welcome to the CLC family!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Express Your Interest</h3>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1">Full Name</label>
                  <input
                    name="full_name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                    placeholder="your.email@gmail.com"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1">Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                    placeholder="0705705396"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1">Year of Study</label>
                  <select
                    name="year_of_study"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                  >
                    <option value="">Select year</option>
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                    <option>5th Year</option>
                    <option>Postgraduate</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1">Message (Optional)</label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-lg hover:opacity-90 transition disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
