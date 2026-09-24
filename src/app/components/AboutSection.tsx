import { motion } from "motion/react";
import { Award, Target, Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
            <span className="text-sm text-gray-300">👋 Meet the Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">The Duo</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Video Editor Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-300">
              {/* Avatar */}
              <div className="mb-6 relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-50" />
                <img
                  src="https://images.unsplash.com/photo-1653341899122-5a2bda10c094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300"
                  alt="Video Editor"
                  className="relative w-full h-full object-cover rounded-full border-4 border-purple-500/30"
                />
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Ajay</h3>
                <p className="text-purple-400 font-medium mb-1">Video Editor & Motion Graphics Artist</p>
                <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300 mt-2">
                  🎬 1+ Years Experience
                </div>
              </div>

              <p className="text-gray-300 text-center leading-relaxed mb-6">
                Passionate about visual storytelling with expertise in Adobe Premiere Pro, After Effects, and DaVinci Resolve. 
                Specialized in creating compelling narratives that captivate audiences across all platforms.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {["Premiere Pro", "After Effects", "Color Grading", "Motion Design"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Web Developer Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300">
              {/* Avatar */}
              <div className="mb-6 relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50" />
                <img
                  src="https://images.unsplash.com/photo-1653341899122-5a2bda10c094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300"
                  alt="Web Developer"
                  className="relative w-full h-full object-cover rounded-full border-4 border-blue-500/30"
                />
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Aryan</h3>
                <p className="text-blue-400 font-medium mb-1">Full-Stack Web Developer</p>
                <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300 mt-2">
                  💻 1+ Years Experience
                </div>
              </div>

              <p className="text-gray-300 text-center leading-relaxed mb-6">
                Dedicated to building modern, performant web applications using cutting-edge technologies. 
                Focused on creating seamless user experiences with clean code and innovative solutions.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {["React", "Next.js", "TypeScript", "UI/UX Design"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "Committed to delivering the highest quality in every project we undertake",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Always exploring new techniques and technologies to stay ahead",
              },
              {
                icon: Heart,
                title: "Collaboration",
                description: "Working closely with clients to bring their vision to life",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
