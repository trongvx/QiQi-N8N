import { motion } from "motion/react";
import { Clock, ShieldCheck, Rocket, BarChart3 } from "lucide-react";

/**
 * OutcomesSection Component
 * Featuring specialized icons and high-impact typography.
 */
const OutcomesSection = () => {
  const outcomes = [
    {
      title: "TIẾT KIỆM 80% THỜI GIAN",
      desc: "Thay thế các tác vụ thủ công lặp đi lặp lại bằng các AI Agent hoạt động 24/7 không mệt mỏi.",
      icon: Clock
    },
    {
      title: "BÁO CÁO REAL-TIME",
      desc: "Dữ liệu tự động đổ về Dashboard tập trung, giúp đưa ra quyết định kinh doanh chuẩn xác ngay lập tức.",
      icon: BarChart3
    },
    {
      title: "CHÍNH XÁC TUYỆT ĐỐI",
      desc: "Loại bỏ hoàn toàn sai sót do con người trong việc nhập liệu và tổng hợp số liệu phức tạp.",
      icon: ShieldCheck
    },
    {
      title: "LÀM CHỦ AI AGENT",
      desc: "Tự tay xây dựng hệ thống CSKH và Lead Generation tự động hóa hoàn toàn mà không cần biết code.",
      icon: Rocket
    }
  ];

  return (
    <section id="outcomes" className="py-16 md:py-24 bg-black relative">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-4 block">Giá trị nhận được</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                THAY ĐỔI HOÀN TOÀN <br /> <span className="text-cyan-400">HIỆU SUẤT CÔNG VIỆC</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass p-8 rounded-[2rem] border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(6,182,212,0.1)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-8 border border-cyan-500/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <item.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight leading-tight group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/40 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
