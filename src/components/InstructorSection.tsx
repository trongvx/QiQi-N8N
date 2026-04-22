import { motion } from "motion/react";
import { Quote, Facebook, Youtube } from "lucide-react";

/**
 * InstructorSection Component
 * Showcasing the instructor with a professional, cinematic presentation.
 */
const InstructorSection = () => {
  return (
    <section id="instructor" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
              <span className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em]">Kinh nghiệm thực chiến</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight uppercase leading-none">
                HỌC TỪ CHUYÊN GIA <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">THỰC CHIẾN</span>
            </h2>

            <div className="relative p-8 rounded-[2.5rem] glass border border-white/10 mb-10 text-white/70 leading-relaxed font-medium">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-purple-500 opacity-20" />
              "Không học để biết - học để làm ra kết quả<br />Không lý thuyết suông, đi vào thực tiễn áp dụng cho doanh nghiệp của bạn"
            </div>

            <div className="space-y-6">
              {[
                "ADMIN CỘNG ĐỒNG N8N VIỆT NAM (11K+ THÀNH VIÊN)",
                "5+ NĂM XÂY DỰNG HỆ THỐNG CRM & AUTO-REPORTING CHO SMES",
                "TRIỂN KHAI VÀ VẬN HÀNH 400+ WORKFLOW N8N & AI AUTOMATION"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2.5 shadow-[0_0_10px_#bd00ff]" />
                  <p className="text-white/80 font-bold uppercase tracking-tight text-sm md:text-base">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/30 via-cyan-500/20 to-transparent rounded-[3.5rem] blur-3xl opacity-30 animate-pulse pointer-events-none" />
            
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://lh3.googleusercontent.com/d/180DshNanUiFV5ykQc5BtiNWWrp7IAluT"
                alt="Instructor Minh Quý"
                className="w-full aspect-[4/5] object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <p className="text-3xl font-bold text-white uppercase tracking-tight">Minh Quý</p>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <a 
                    href="https://www.facebook.com/minh.quy.121" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-all hover:translate-x-1"
                  >
                    <Facebook className="w-5 h-5 text-purple-400" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Facebook</span>
                  </a>
                  <a 
                    href="https://www.youtube.com/@qihocai" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-all hover:translate-x-1"
                  >
                    <Youtube className="w-5 h-5 text-red-500" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Youtube</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
