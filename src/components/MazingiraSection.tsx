import mazingiraImg from "@/assets/mazingira2.jpg";
import { TreePine, Leaf, Megaphone, BarChart3 } from "lucide-react";

const focuses = [
  { icon: TreePine, title: "Tree Planting", desc: "Regular tree planting drives across different universities and surrounding communities." },
  { icon: Leaf, title: "Clean-Up Campaigns", desc: "Organizing environmental clean-ups to promote a healthy, green campus." },
  { icon: Megaphone, title: "Awareness Campaigns", desc: "Educating students on health, environment, and social responsibility." },
  { icon: BarChart3, title: "Measurable Impact", desc: "Tracking our contribution to a healthier environment and society." },
];

const MazingiraSection = () => {
  return (
    <section id="mazingira" className="py-20 bg-sage">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2 font-body">Youth-Led Initiative</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Mazingira Afya Program
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Mazingira Afya is a flagship youth-led program under CLC in Kenya that brings together young people 
              to champion environmental conservation, public health, and social responsibility. 
              Currently we kickstarted the project by engaging in community clean-ups and sensitization at Kibera slum, but our vision is to expand to other universities and communities across Kenya.
              At KU, we take this mission seriously — caring for God's creation as part of our faith.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {focuses.map((f) => (
                <div key={f.title} className="flex gap-3 items-start p-4 rounded-lg bg-card shadow-card">
                  <f.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-foreground">{f.title}</h4>
                    <p className="font-body text-xs text-muted-foreground mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-warm">
            <img
              src={mazingiraImg}
              alt="Mazingira Afya tree planting"
              className="w-full h-80 lg:h-[28rem] object-cover"
              loading="lazy"
              width={1280}
              height={720}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MazingiraSection;
