import { motion } from "motion/react";
import { Users, Briefcase, TrendingUp, BarChart3 } from "lucide-react";

/**
 * TargetAudienceSection Component
 * High-impact section highlighting for whom the course is designed.
 */
const TargetAudienceSection = () => {
  const audiences = [
    {
      title: "CHỦ DN & QUẢN LÝ",
      desc: "Muốn tối ưu hóa chi phí vận hành, tự động hóa báo cáo và quy trình CSKH chuyên nghiệp.",
      icon: Briefcase,
    },
    {
      title: "NHÂN SỰ & ADMIN",
      desc: "Đang mệt mỏi với các tác vụ nhập liệu, tổng hợp dữ liệu thủ công hàng ngày trên Excel/G-Sheet.",
      icon: Users,
    },
    {
      title: "MARKETER & SALES",
      desc: "Cần tự động hóa luồng leads, quản lý khách hàng đa kênh và phân tích chiến dịch real-time.",
      icon: TrendingUp,
    },
    {
      title: "DATA ANALYST",
      desc: "Mong muốn trang bị kỹ năng AI Automation để nâng cao năng suất và giá trị bản thân trong kỷ nguyên số.",
      icon: BarChart3,
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-black relative">
       {/* Background ambient light */}
       <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-4 block">Đối tượng</span>
              <h2 className="font-heading text-4xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9] italic">
                Khóa học <br /> dành cho <br /> <span className="text-cyan-400">ai?</span>
              </h2>
              <p className="text-white/40 text-lg font-medium leading-relaxed italic">
                Bạn không cần biết code. Chỉ cần bạn có quy trình thủ công và khao khát tự động hóa chúng bằng AI.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8 w-full">
            {audiences.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-10 rounded-[3rem] border-white/5 hover:border-cyan-500/30 transition-all duration-500 group flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-500 shadow-xl">
                  <item.icon className="w-8 h-8 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors italic">
                    {item.title}
                </h3>
                <p className="text-white/40 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
