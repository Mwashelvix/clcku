import { Heart, Globe, Users, BookOpen } from "lucide-react";

const values = [
  { icon: Heart, title: "Faith", desc: "Rooted in Ignatian spirituality and the Spiritual Exercises of St. Ignatius of Loyola." },
  { icon: Users, title: "Community", desc: "A family of university students supporting one another in faith and life." },
  { icon: Globe, title: "Service", desc: "Reaching out to those in need through social action and the Mazingira Afya program." },
  { icon: BookOpen, title: "Growth", desc: "Continuous personal and spiritual formation through reflection and discernment." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2 font-body">Who We Are</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About Christian Life Community
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            The Christian Life Community (CLC) is a global association of lay Christians who adopt an Ignatian model of spirituality. 
            At Kenyatta University, we are part of <strong>CLC in Kenya</strong> and the worldwide <strong>World CLC</strong> network, 
            united by our desire to live the Gospel through faith, community, and mission.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="p-8 rounded-xl bg-gold-light shadow-card">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="font-body text-muted-foreground">
              To form a community of committed Christians who, inspired by Ignatian spirituality, 
              live out their faith through personal growth, communal support, and service to others — 
              especially within the university and broader society.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-sage shadow-card">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="font-body text-muted-foreground">
              A vibrant, Spirit-led community of young people who find God in all things, 
              are agents of positive change, and carry the mission of Christ into every aspect of their lives.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="text-center p-6 rounded-xl bg-card shadow-card hover:shadow-warm transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <v.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
