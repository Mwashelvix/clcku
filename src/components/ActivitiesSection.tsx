import activitiesImg from "@/assets/activities4.jpg";
import socialImg from "@/assets/activities3.jpg";
import { BookOpen, Mountain, Users, Gamepad2, HandHeart, MessageCircle } from "lucide-react";

const activities = [
  { icon: MessageCircle, title: "Weekly Meetings", desc: "Faith sharing, Gospel reflections, and community prayer every week." },
  { icon: Mountain, title: "Retreats & Recollections", desc: "Spiritual retreats that deepen our relationship with God and one another." },
  { icon: BookOpen, title: "Bible Study", desc: "Regular scripture study sessions to grow in knowledge and understanding of the Word." },
  { icon: Users, title: "Leadership Formation", desc: "Mentorship programs that develop servant leaders for the Church and society." },
  { icon: HandHeart, title: "Community Service", desc: "Outreach and social action initiatives serving those in need around Kenyatta University." },
  { icon: Gamepad2, title: "Social Activities", desc: "Sports, hangouts, trips, and fun events to build lasting friendships." },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2 font-body">What We Do</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Activities & Programs
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            From faith formation to fun and fellowship, there's something for every student at CLC KU.
          </p>
        </div>

        {/* Images row */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <img src={activitiesImg} alt="Bible study" loading="lazy" width={1280} height={720} className="rounded-xl object-cover h-64 w-full shadow-card" />
          <img src={socialImg} alt="Social activities" loading="lazy" width={1280} height={720} className="rounded-xl object-cover h-64 w-full shadow-card" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a) => (
            <div key={a.title} className="p-6 rounded-xl bg-card shadow-card hover:shadow-warm transition-shadow border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <a.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{a.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
