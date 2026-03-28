import retreatImg from "@/assets/retreat2.jpg";
import { Flame, Search, Star } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "Spiritual Exercises",
    desc: "A transformative retreat experience developed by St. Ignatius of Loyola, helping us encounter God through prayer, reflection, and self-examination.",
  },
  {
    icon: Search,
    title: "Discernment",
    desc: "Learning to recognize God's voice in our daily decisions, relationships, and studies — making choices that align with His will.",
  },
  {
    icon: Star,
    title: "Finding God in All Things",
    desc: "The Ignatian invitation to see the divine presence in every moment — in lectures, friendships, nature, and even challenges.",
  },
];

const SpiritualitySection = () => {
  return (
    <section id="spirituality" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-warm">
            <img
              src={retreatImg}
              alt="Spiritual retreat"
              className="w-full h-80 lg:h-[28rem] object-cover"
              loading="lazy"
              width={1280}
              height={720}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            <p className="absolute bottom-6 left-6 font-display text-xl text-primary-foreground italic">
              "In all things, to love and to serve."
            </p>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2 font-body">Our Spirituality</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ignatian Spirituality
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
              Our spiritual life is grounded in the rich tradition of St. Ignatius of Loyola. 
              We practice contemplation, communal discernment, and the daily Examen — 
              simple yet profound tools for growing closer to God.
            </p>

            <div className="space-y-6">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">{p.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualitySection;
