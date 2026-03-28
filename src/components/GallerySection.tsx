import heroBg from "@/assets/activities8.jpg";
import activitiesImg from "@/assets/activities6.jpg";
import retreatImg from "@/assets/retreat2.jpg";
import socialImg from "@/assets/activities5.jpg";
import mazingiraImg from "@/assets/mazingira2.jpg";

const images = [
  { src: heroBg, alt: "CLC KU community members" },
  { src: activitiesImg, alt: "Bible study session" },
  { src: retreatImg, alt: "Spiritual retreat" },
  { src: socialImg, alt: "Social gathering" },
  { src: mazingiraImg, alt: "Mazingira Afya tree planting" },
  { src: heroBg, alt: "Fellowship moment" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2 font-body">Memories</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Gallery
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Glimpses of our faith journey, community, and service.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden shadow-card hover:shadow-warm transition-shadow ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover ${i === 0 ? "h-64 md:h-full" : "h-48 md:h-56"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
