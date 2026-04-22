import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

/**
 * VideoDemoSection Component
 * Cinematic video showcase with scroll-triggered lazy loading.
 */
const VideoDemoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          setHasPlayed(true);
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasPlayed]);

  const videoSrc = hasPlayed
    ? "https://www.youtube.com/embed/zjp9r7OJmEk?autoplay=0&controls=1&rel=0"
    : "";

  return (
    <section id="demo" className="relative bg-black overflow-hidden py-16 md:py-24">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6 font-black uppercase tracking-[0.2em] text-cyan-400 text-[10px]">
              <Play className="w-3 h-3 text-cyan-400 fill-current" />
              Thành quả thực tế
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight uppercase tracking-tight">
              SỨC MẠNH CỦA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">AI AUTOMATION</span>
            </h2>
            <p className="text-white/40 mt-8 text-base md:text-lg w-full font-medium">
              Video ngắn mô tả cách n8n & Gemini tự động hóa hoàn toàn quy trình xử lý dữ liệu.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="relative max-w-5xl mx-auto group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

          <div className="relative aspect-video rounded-[3rem] overflow-hidden glass border border-white/10 shadow-2xl bg-black/40">
            {!hasPlayed && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10 cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-8 border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-500">
                  <Play className="w-10 h-10 text-black fill-current ml-1" />
                </div>
              </div>
            )}

            {hasPlayed && (
              <iframe
                width="100%"
                height="100%"
                src={videoSrc}
                title="n8n AI Automation Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            )}
          </div>
        </motion.div>

        <div className="mt-24 text-center">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">
            Hệ thống báo cáo tự chuyển đổi dữ liệu • Real-time Dashboard • AI Insight
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoDemoSection;
