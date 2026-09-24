import { motion } from "motion/react";
import { Video, Wand2, Palette, Layers, Code, Database, Smartphone, Zap } from "lucide-react";
import { useState } from "react";

const videoSkills = [
  { icon: Video, name: "Adobe Premiere Pro", level: 95 },
  { icon: Wand2, name: "After Effects", level: 92 },
  { icon: Palette, name: "Color Grading", level: 88 },
  { icon: Layers, name: "DaVinci Resolve", level: 90 },
  { icon: Wand2, name: "Motion Graphics", level: 87 },
  { icon: Video, name: "Final Cut Pro", level: 85 },
];

const webSkills = [
  { icon: Code, name: "React / Next.js", level: 95 },
  { icon: Palette, name: "UI/UX Design", level: 90 },
  { icon: Database, name: "Backend Development", level: 88 },
  { icon: Smartphone, name: "Responsive Design", level: 93 },
  { icon: Zap, name: "Performance Optimization", level: 89 },
  { icon: Code, name: "TypeScript", level: 91 },
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"video" | "web">("video");

  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
            <span className="text-sm text-gray-300">🚀 Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mastering the tools and technologies that bring ideas to life
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <button
              onClick={() => setActiveTab("video")}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeTab === "video"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              🎬 Video & Motion
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeTab === "web"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              💻 Web & Development
            </button>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {(activeTab === "video" ? videoSkills : webSkills).map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeTab === "video"
                        ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                        : "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        activeTab === "video" ? "text-purple-400" : "text-blue-400"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      activeTab === "video"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : "bg-gradient-to-r from-blue-500 to-cyan-500"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { value: "200+", label: "Projects Completed" },
            { value: "50+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
