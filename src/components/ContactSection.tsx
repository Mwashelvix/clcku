import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import clcLogo from "@/assets/clc-logo.png";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2 font-body">Get in Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Contact Us
          </h2>
          <p className="font-body text-lg text-primary-foreground/70">
            Have questions? Want to visit? Reach out — we'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-14">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display font-bold mb-1">Email</h3>
            <p className="font-body text-sm text-primary-foreground/70">elvismwangi35671@gmail.com</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display font-bold mb-1">Phone</h3>
            <p className="font-body text-sm text-primary-foreground/70">0705705396</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display font-bold mb-1">Location</h3>
            <p className="font-body text-sm text-primary-foreground/70">Kenyatta University, Nairobi, Kenya</p>
          </div>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-6 mb-14">
          <a href="https://www.instagram.com/christianlifecommunityku/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61576796070631" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition">
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <img src={clcLogo} alt="CLC Logo" className="h-8 w-8" />
            <span className="font-display font-bold">CLC – Kenyatta University</span>
          </div>
          <p className="font-body text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Christian Life Community – Kenyatta University. Part of CLC Kenya & World CLC.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
