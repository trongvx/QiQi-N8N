import { motion } from "motion/react";
import { Check, ArrowRight, ShieldCheck, Zap, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * PricingSection Component
 * High-impact pricing section with clear CTA and registration workflow.
 */
const PricingSection = ({ onOpenModal }: { onOpenModal?: () => void }) => {
  const steps = [
    {
      icon: <Check className="w-5 h-5 text-cyan-400" />,
      title: "Đăng ký thông tin",
      description: "Điền form đăng ký để chúng tôi đánh giá nhu cầu & trình độ hiện tại của bạn."
    },
    {
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      title: "Nhận tư vấn lộ trình",
      description: "Chuyên gia sẽ gọi điện/Zalo tư vấn lộ trình và demo case study thực tế cho bạn."
    },
    {
      icon: <CreditCard className="w-5 h-5 text-cyan-400" />,
      title: "Thanh toán & Nhập học",
      description: "Hoàn tất học phí và bắt đầu hành trình Master AI Automation ngay."
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-black relative">
       {/* Ambient glow */}
       <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.5em] mb-4 block">ĐẦU TƯ CHO TƯƠNG LAI</span>
                <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight uppercase leading-tight">
                    ĐẦU TƯ MỘT LẦN <br /> <span className="text-cyan-400">LỢI ÍCH TRỌN ĐỜI</span>
                </h2>
                <p className="text-white/40 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                    Sở hữu kỹ năng Automation mạnh mẽ nhất hiện nay với mức chi phí cực kỳ tiếp cận.
                </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {/* Main Pricing Card */}
          <div className="lg:col-span-2 glass p-10 md:p-16 rounded-[3.5rem] border-white/10 relative overflow-hidden group flex flex-col md:flex-row gap-12 items-center">
            {/* Internal decorative glow */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
            
            <div className="flex-1 relative z-10">
              <div className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-cyan-500/20">
                LỚP HỌC NHÓM 4-5 HỌC VIÊN
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight uppercase tracking-tight">CHƯƠNG TRÌNH MASTER N8N AI</h3>
              
              <ul className="space-y-6 mb-12">
                {[
                  "Lộ trình từ Zero đến Master Automation",
                  "Hỗ trợ cài đặt n8n (Self-host/Cloud) miễn phí",
                  "Học nhóm nhỏ tập trung thực hành",
                  "Có video record từng buổi học",
                  "Có file tài liệu hướng dẫn chi tiết",
                  "Nhóm Zalo hỗ trợ trọn đời",
                  "Cập nhật kiến thức AI mới nhất"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 text-white/50 font-medium"
                  >
                    <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span className="group-hover:text-white/80 transition-colors text-sm md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="w-full md:w-80 p-8 bg-white/5 rounded-[3rem] border border-white/10 text-center relative overflow-hidden group/price shadow-2xl backdrop-blur-3xl">
              <div className="absolute top-0 right-0 px-6 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-2xl shadow-lg shadow-red-900/40">GIÁ ƯU ĐÃI</div>
              
              <div className="text-white/20 text-sm mb-2 line-through font-mono">2.500.000 VNĐ</div>
              <div className="text-7xl font-bold text-white mb-2 tracking-tight">
                999K
              </div>
              <div className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] mt-4 mb-8">GIÁ ƯU ĐÃI THÁNG NÀY</div>
              
              <button 
                onClick={onOpenModal || (() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' }))}
                className="w-full py-5 bg-cyan-400 text-black font-black rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:bg-white hover:scale-105 transition-all uppercase tracking-widest text-sm mb-8"
              >
                ĐĂNG KÝ NGAY
              </button>

              <div className="flex flex-col gap-2 text-center">
                  <p className="text-[10px] text-white/30 uppercase font-black tracking-widest leading-relaxed">
                    HOÀN TRẢ 100% NẾU KHÔNG HÀI LÒNG <br /> HỖ TRỢ TRỰC TIẾP QUA ZALO
                  </p>
              </div>
            </div>
          </div>

          {/* Workflow Steps Card */}
          <div className="glass p-12 rounded-[3.5rem] border-white/5 flex flex-col justify-between">
            <div>
                <h4 className="font-heading text-xl font-bold mb-12 text-white uppercase tracking-widest text-center">QUY TRÌNH ĐĂNG KÝ</h4>
                <div className="space-y-12 relative px-4">
                  <div className="absolute left-[34px] top-12 bottom-12 w-[1px] bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent" />
                  {steps.map((step, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-8 items-start relative z-10 group/step"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/step:bg-cyan-400 group-hover/step:text-black transition-all duration-300 shadow-xl">
                        {step.icon}
                      </div>
                      <div>
                        <h5 className="font-bold text-white text-sm uppercase tracking-tight mb-2 group-hover/step:text-cyan-400 transition-colors uppercase">{step.title}</h5>
                        <p className="text-xs text-white/30 leading-relaxed font-medium">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
            </div>
            
            <div className="mt-12 p-6 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 text-center">
                <p className="text-[10px] font-bold text-cyan-400/60 uppercase tracking-widest">TỰ ĐỘNG HÓA CÔNG VIỆC CỦA BẠN TRONG 7 NGÀY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
