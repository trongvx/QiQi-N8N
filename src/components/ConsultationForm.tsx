import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Mail, Phone, MessageSquare, Send, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";

/**
 * ConsultationForm Component
 * A high-impact registration form with validation states and cinematic feedback.
 */
const ConsultationForm = ({ isModal = false }: { isModal?: boolean }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    note: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    const successContent = (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full text-center px-6"
      >
        <div className="w-32 h-32 rounded-full bg-cyan-400/20 flex items-center justify-center mx-auto mb-10 border border-cyan-400/30">
          <CheckCircle2 className="w-16 h-16 text-cyan-400" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-6">XÁC NHẬN</h2>
        <p className="text-white/40 text-xl font-medium mb-12">
          Thông tin của bạn đã được gửi đến hệ thống bảo mật. Đội ngũ hỗ trợ sẽ liên hệ với bạn trong vòng 24h tới.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="px-10 py-5 glass border-white/10 text-white font-bold uppercase tracking-widest rounded-2xl hover:bg-white hover:text-black transition-all flex items-center gap-3 mx-auto group"
        >
          QUAY LẠI <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    );

    if (isModal) return successContent;

    return (
      <section id="registration" className="py-24 bg-black min-h-[600px] flex items-center justify-center">
        {successContent}
      </section>
    );
  }

  const formPart = (
    <div className={`flex flex-col items-center justify-center text-center ${isModal ? 'max-w-4xl mx-auto' : 'max-w-3xl mx-auto'}`}>
      {/* Right Side: Form */}
      <div className="w-full">
        <motion.div
          initial={isModal ? { opacity: 0, y: 10 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          className={`${isModal ? 'p-2 md:p-4' : 'glass p-10 md:p-20 rounded-[4rem] border-white/10 relative overflow-hidden shadow-2xl'}`}
        >
            <div className="mb-12 text-center text-balance px-4">
              <h2 className="text-3xl md:text-6xl font-bold text-white uppercase tracking-tight mb-4">ĐĂNG KÝ TƯ VẤN</h2>
              <p className="text-white/40 text-lg font-medium">Đội ngũ hỗ trợ sẽ liên hệ với bạn trong vòng 24h.</p>
            </div>
          <form onSubmit={handleSubmit} className="relative z-10 space-y-10 text-left">
                <div className="space-y-6">
                  <div className="group/input relative">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] ml-2 mb-2 block transition-colors group-focus-within/input:text-cyan-400">Họ & Tên</label>
                    <div className="relative">
                        <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within/input:text-cyan-400 transition-colors" />
                        <input 
                            required
                            type="text"
                            placeholder="Võ Đăng Quy"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-8 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/10"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group/input relative">
                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] ml-2 mb-2 block transition-colors group-focus-within/input:text-cyan-400">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within/input:text-cyan-400 transition-colors" />
                            <input 
                                required
                                type="email"
                                placeholder="name@company.com"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-8 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/10"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="group/input relative">
                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] ml-2 mb-2 block transition-colors group-focus-within/input:text-cyan-400">Số điện thoại</label>
                        <div className="relative">
                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within/input:text-cyan-400 transition-colors" />
                            <input 
                                required
                                type="tel"
                                placeholder="09xx xxx xxx"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-8 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/10"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                    </div>
                  </div>

                  <div className="group/input relative">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] ml-2 mb-2 block transition-colors group-focus-within/input:text-cyan-400">Yêu cầu đặc biệt</label>
                    <div className="relative">
                        <MessageSquare className="absolute left-6 top-8 w-5 h-5 text-white/20 group-focus-within/input:text-cyan-400 transition-colors" />
                        <textarea 
                            rows={4}
                            placeholder="Tôi muốn tự động hóa quy trình quản lý báo cáo Facebook Ads..."
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-8 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/10 resize-none"
                            value={formData.note}
                            onChange={(e) => setFormData({...formData, note: e.target.value})}
                        />
                    </div>
                  </div>
                </div>

                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full py-10 bg-cyan-400 text-black font-black uppercase tracking-[0.2em] rounded-3xl shadow-[0_0_50px_rgba(34,211,238,0.4)] hover:bg-white hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center gap-4 text-2xl"
                >
                    GỬI YÊU CẦU <Send className="w-8 h-8" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
  );

  if (isModal) return formPart;

  return (
    <section id="registration" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {formPart}
      </div>
    </section>
  );
};

export default ConsultationForm;
