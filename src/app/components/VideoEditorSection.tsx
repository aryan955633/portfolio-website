import { motion } from "motion/react";
import { Video, Film, TrendingUp, Briefcase, Sparkles, ShoppingBag, Cpu, Wand2 } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Promotional Videos",
    description: "High-impact brand videos that tell your story",
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: TrendingUp,
    title: "Social Media Reels",
    description: "Engaging short-form content for maximum reach",
    image: "https://images.unsplash.com/photo-1759393852314-59dc00faeed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: Film,
    title: "YouTube Editing",
    description: "Professional editing for content creators",
    image: "https://images.unsplash.com/photo-1762028895584-8a1790be85f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: Briefcase,
    title: "Corporate Videos",
    description: "Polished presentations for business impact",
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Dynamic animations that captivate audiences",
    image: "https://images.unsplash.com/photo-1740174459682-4dd3f72e2512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: ShoppingBag,
    title: "Product Ads",
    description: "Compelling commercials that drive sales",
    image: "https://images.unsplash.com/photo-1677260304441-e2d8ebb0d4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: Cpu,
    title: "CGI Videos",
    description: "Stunning 3D visuals and effects",
    image: "https://images.unsplash.com/photo-1740174459682-4dd3f72e2512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: Wand2,
    title: "AI Generated Content",
    description: "Cutting-edge AI-powered video creation",
    image: "https://images.unsplash.com/photo-1759393852314-59dc00faeed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
];

export function VideoEditorSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-purple-500/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-sm text-purple-400">🎬 Video Production</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Visual Storytelling <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              That Captivates
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From concept to final cut, we create stunning video content that resonates with your audience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
              >
                {/* Image background */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-purple-500/20 backdrop-blur-md border border-purple-500/30 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/0 group-hover:border-purple-500/30 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
