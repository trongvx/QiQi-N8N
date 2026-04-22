import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

/**
 * FinalCTA Component
 * High-impact closing call to action with cinematic visuals.
 */
const FinalCTA = ({ onOpenModal }: { onOpenModal?: () => void }) => {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto glass p-12 md:p-24 rounded-[4rem] border border-white/10 relative overflow-hidden text-center">
            {/* Inner background glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-400/20 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
            >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                    <button 
                        onClick={onOpenModal || (() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' }))}
                        className="w-full sm:w-auto px-16 py-8 bg-cyan-400 text-black font-black rounded-[2rem] hover:bg-white transition-all uppercase tracking-[0.2em] text-2xl flex items-center justify-center gap-4 shadow-[0_0_60px_rgba(34,211,238,0.4)] active:scale-95"
                    >
                        ĐĂNG KÝ NGAY <ArrowRight className="w-8 h-8" />
                    </button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-10 text-white/30 text-[10px] font-black uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Cam kết kết quả
                    </div>
                    <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Hỗ trợ trọn đời
                    </div>
                    <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Tài liệu độc quyền
                    </div>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
