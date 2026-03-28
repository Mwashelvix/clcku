import heroBg from "@/assets/hero-bg3.jpg";
import clcLogo from "@/assets/clc-logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
        <img src={clcLogo} alt="CLC Logo" className="h-20 w-20 mx-auto mb-6" />
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-4">
          Christian Life Community
        </h1>
        <p className="font-display text-xl sm:text-2xl text-gold mb-2">
          Kenyatta University
        </p>
        <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto mt-6 mb-8">
          An Ignatian community of young Christians growing in faith, serving with love, and finding God in all things.
        </p>

        <blockquote className="italic text-primary-foreground/70 font-body text-base max-w-xl mx-auto mb-10 border-l-2 border-gold pl-4 text-left">
          "Go forth and set the world on fire." — St. Ignatius of Loyola
        </blockquote>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#join"
            className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-lg hover:opacity-90 transition"
          >
            Join Our Community
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
