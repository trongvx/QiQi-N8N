import { motion } from "motion/react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

/**
 * HeroSection Component
 * The high-impact cinematic entrance of the landing page.
 */
const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-16">
      {/* Background Cinematic Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-white/10 mb-10">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.4em]">KHÓA HỌC ĐÀO TẠO AI AUTOMATION THỰC CHIẾN</span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8 tracking-tight uppercase">
                TỰ ĐỘNG HÓA <br />
                <span className="text-cyan-400">VỚI N8N & AI</span>
            </h1>

            <p className="text-base md:text-lg text-white/40 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Biến Google Sheets thành trung tâm điều hành. Tiết kiệm 40h/tuần. Lớp nhóm 4-5 học viên, 100% không cần code.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-6 bg-cyan-400 text-black font-bold rounded-[1.5rem] text-lg uppercase tracking-widest shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all hover:bg-white active:scale-95"
              >
                ĐĂNG KÝ TƯ VẤN <ArrowRight className="ml-2 w-5 h-5 inline-block" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-6 glass border-white/10 text-white font-bold rounded-[1.5rem] text-lg uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                <Play className="mr-2 w-5 h-5 inline-block fill-current" /> XEM DEMO
              </motion.button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 mt-20 text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> No-code 100%
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Dự án thực tế
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Hỗ trợ vĩnh viễn
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden xl:block" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden xl:block" />
    </section>
  );
};

export default HeroSection;
