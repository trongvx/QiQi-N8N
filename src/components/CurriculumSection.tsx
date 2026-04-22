import React from "react";
import { motion } from "motion/react";
import { 
  Target, 
  Brain, 
  Bot, 
  BarChart3, 
  Rocket, 
  ChevronRight, 
  ArrowRight 
} from "lucide-react";

/**
 * CurriculumSection Component
 * Featuring a timeline-style curriculum board with high-impact styling.
 */
const CurriculumSection = () => {
  const modules = [
    {
      id: "01",
      title: "BUỔI 1: KHÁI NIỆM CƠ BẢN",
      topics: [
        "n8n là gì?",
        "Khái niệm về API?",
        "Cài đặt n8n trên chính máy tính của bạn/vps hoặc n8n.io",
        "Các khái niệm trigger/node"
      ],
      icon: <Target className="w-8 h-8 text-cyan-400" />
    },
    {
      id: "02",
      title: "BUỔI 2: THỰC HÀNH LÀM SẠCH DỮ LIỆU",
      topics: [
        "Credentials GGSheet, GGDrive, các công cụ của google",
        "Mẹo làm sạch dữ liệu với các hàm IMPORTRANGE, QUERY",
        "Xử lý dữ liệu rời rạc",
        "Xây dựng Agent trực tiếp n8n để phân tích số liệu"
      ],
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />
    },
    {
      id: "03",
      title: "BUỔI 3: TRIỂN KHAI TRỢ LÝ ĐA KÊNH (THE ASSISTANT)",
      topics: [
        "Kết nối trợ lý với Telegram",
        "Xây dựng bộ nhớ, System prompt cho AI Agent"
      ],
      icon: <Bot className="w-8 h-8 text-cyan-400" />
    }
  ];

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-black relative">
       {/* Background decorative elements */}
       <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
       <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.5em] mb-4 block">Chương trình học</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                NỘI DUNG <span className="text-cyan-400">KHÓA HỌC</span>
            </h2>
            <p className="text-white/30 text-lg font-medium">Học thực chiến qua 3 buổi chuyên sâu.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {modules.map((module, idx) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col p-8 rounded-[2.5rem] glass border border-white/5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden h-full"
            >
              {/* Animated background shape */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
              
              {/* Icon & ID */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shadow-inner">
                  {module.icon}
                </div>
                <div className="text-4xl font-bold text-cyan-400/10 font-mono group-hover:text-cyan-400/30 transition-colors">{module.id}</div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-6 leading-tight h-14 flex items-center">{module.title}</h3>
                
                <ul className="grid gap-3">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-3 group/item">
                      <div className="mt-1-5 transition-transform group-hover/item:translate-x-1 shrink-0">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                      </div>
                      <span className="text-white/50 font-medium text-xs md:text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA in Section */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-16 text-center"
        >
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-6 glass border-white/10 text-white font-bold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all uppercase tracking-widest flex items-center gap-3 mx-auto group shadow-2xl active:scale-95"
            >
                NHẬN LỘ TRÌNH CHI TIẾT 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CurriculumSection;
