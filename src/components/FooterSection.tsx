import { Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";

/**
 * FooterSection Component
 * Elegant dark footer with social links and contact info.
 */
const FooterSection = () => {
  return (
    <footer className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-cyan-400 flex items-center justify-center font-black italic shadow-[0_0_20px_rgba(34,211,238,0.3)] text-black text-xl">
                n
              </div>
              <span className="font-heading font-black text-3xl tracking-tighter text-white uppercase italic">AI Automation</span>
            </div>
            <p className="text-white/30 max-w-sm leading-relaxed mb-10 font-medium italic text-lg">
              Chuyên gia đào tạo tự động hoá quy trình doanh nghiệp hàng đầu Việt Nam. Tập trung vào thực chiến, n8n và các giải pháp AI thông minh nhất.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/minh.quy.121" },
                { Icon: Youtube, href: "https://www.youtube.com/@qihocai" }
              ].map(({ Icon, href }, idx) => (
                <motion.a 
                    key={idx} 
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: "#22d3ee", color: "#000" }}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center border-white/10 text-white/40 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-black text-white mb-8 uppercase tracking-[0.4em] text-[10px]">Hệ thống</h4>
            <ul className="space-y-6 text-xs font-black uppercase tracking-widest text-white/30">
              <li><a href="#demo" className="hover:text-cyan-400 transition-colors italic">Trải nghiệm Demo</a></li>
              <li><a href="#curriculum" className="hover:text-cyan-400 transition-colors italic">Chương trình học</a></li>
              <li><a href="#registration" className="hover:text-cyan-400 transition-colors italic">Đăng ký tư vấn</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors italic">Bảng giá ưu đãi</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-black text-white mb-8 uppercase tracking-[0.4em] text-[10px]">Liên hệ</h4>
            <ul className="space-y-6 text-xs font-black uppercase tracking-widest text-white/30 italic">
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-cyan-400" /> minhquyueh@gmail.com</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-cyan-400" /> 0377 5200 66</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-cyan-400" /> HỒ CHÍ MINH, VIỆT NAM</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-white/10 font-black tracking-[0.5em] uppercase">
            © 2026 n8n AI AUTOMATION COURSE • ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-2 text-[10px] text-white/10 font-black tracking-[0.5em] uppercase">
            CRAFTED BY <span className="text-cyan-400/30">QUY VO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
