import { Calendar, Clock, MapPin } from "lucide-react";

const schedule = [
  { day: "Every Thursday", time: "6:00 PM – 8:00 PM", event: "Weekly Community Meeting", location: "Finance Room (Parish office)" },
  { day: "Every Saturday", time: "8:30 PM – 9:30 PM", event: "Upskilling & Personal Branding (Soft skills, Leadership & Personal Branding 101)", location: "Online" },
  { day: "Every Tuesday", time: "8:00 PM – 9:00 PM", event: "Social & Wellness", location: "Online" },
];

const upcoming = [
  { date: "May 9, 2026", title: "Mwangaza Day of Prayer", desc: "“Come and Have Breakfast” (Jn.21:12) presided by Fr. Patrick Ng’ang’a, S.J." },
  { date: "April 18, 2026", title: "Mazingira Afya Clean-Up Day", desc: "Join us for our clean-up drive at Kibera. #Care of our common home!" },
  { date: "May 7, 2026", title: "Group's Election", desc: "Stay tuned for our upcoming group elections—your participation matters!" },
  { date: "May 11, 2026", title: "CLC-KU Funday", desc: "Join us for a day of community, connection, and fun. Stay tuned for more details on activities and how to register. We can’t wait to celebrate with you!" },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2 font-body">Stay Connected</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Events & Meetings
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Weekly Schedule */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" /> Weekly Schedule
            </h3>
            <div className="space-y-4">
              {schedule.map((s) => (
                <div key={s.event} className="p-5 rounded-xl bg-card shadow-card border border-border">
                  <p className="font-display font-bold text-foreground">{s.event}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm font-body text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {s.day}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {s.time}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {s.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-secondary" /> Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcoming.map((e) => (
                <div key={e.title} className="p-5 rounded-xl bg-card shadow-card border border-border flex gap-4">
                  <div className="shrink-0 w-16 text-center">
                    <p className="text-xs font-body text-muted-foreground">{e.date.split(",")[0].split(" ")[0]}</p>
                    <p className="text-2xl font-display font-bold text-primary">{e.date.split(" ")[1].replace(",", "")}</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">{e.title}</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">{e.desc}</p>
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

export default EventsSection;
