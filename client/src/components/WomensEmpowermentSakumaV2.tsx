import { motion } from 'framer-motion';
import { Heart, Shield, Users, Zap } from 'lucide-react';

/**
 * Women's Empowerment Component - Sakuma Design V2
 * 
 * Design Philosophy:
 * - Bold, colorful sticker cards
 * - Playful rotation and scale
 * - High contrast typography
 * - Background image integration
 */

const benefits = [
  {
    icon: Heart,
    title: '女性専用の\n指導環境を固定',
    description: '女性トレーナーによる標準化された指導。動作の正確性と継続性を重視。',
    color: 'bg-[#FF006E]',
    rotation: '-3deg',
  },
  {
    icon: Shield,
    title: '安心・安全が\n最優先',
    description: '女性が不安になる行為は即退会。徹底した環境管理で、心置きなく練習できます。',
    color: 'bg-[#00D9FF]',
    rotation: '2deg',
  },
  {
    icon: Users,
    title: '会員規約による\n環境維持',
    description: '安全を乱す行為は即退会処分。徹底したルール運用で、静かな練習環境を担保。',
    color: 'bg-[#FFD700]',
    rotation: '-2deg',
  },
  {
    icon: Zap,
    title: '産後ダイエット・\nシェイプアップ',
    description: 'オーナーあいかの−25kg成功経験を活かした、効率的なプログラム。',
    color: 'bg-[#FF9A9E]',
    rotation: '3deg',
  },
];

export default function WomensEmpowermentSakumaV2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotate: 0 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://ik.imagekit.io/FLATUPGYM/2.jpg?tr=w-1920,f-auto,q-80)',
          filter: 'brightness(0.4) contrast(1.2)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="sakuma-title text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            <span className="bg-gradient-to-r from-white via-[#FFD700] to-white bg-clip-text text-transparent">美しく、強く、私らしく。</span>
          </h2>
          <p className="sakuma-body text-white/95 max-w-3xl mx-auto drop-shadow-md text-lg md:text-xl font-medium">
            フラットアップジムは、あなただけの輝きを引き出す場所。<br />
            安心と楽しさの中で、理想の自分を叶えませんか？
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`${benefit.color} p-8 rounded-none border-6 border-[#1A1F3A] transform ${benefit.rotation} transition-all duration-300 hover:scale-105 hover:rotate-0 cursor-pointer sticker-ui shadow-xl`}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 rounded-none flex items-center justify-center mb-6 border-4 border-white">
                  <Icon className="w-8 h-8 text-white font-black" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-4 whitespace-pre-line leading-tight">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 font-bold text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Supplement Image: Friendly Environment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-center container max-w-4xl mx-auto"
        >
          <div className="relative">
            <img
              src="https://ik.imagekit.io/FLATUPGYM/batch_%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-01-21%2018.31.02%202.png?updatedAt=1756928111468"
              alt="女性会員同士の仲の良い様子"
              className="w-full h-64 md:h-80 object-cover object-top rounded-none border-6 border-white shadow-[8px_8px_0px_#1A1F3A] transform rotate-1"
              loading="lazy"
            />
            <div className="absolute -top-4 -left-4 bg-[#00D9FF] text-[#1A1F3A] py-2 px-6 border-4 border-[#1A1F3A] transform -rotate-3 shadow-md">
              <p className="font-black text-lg">FRIENDLY & SAFE</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1A1F3A]/95 backdrop-blur-md p-12 rounded-none border-8 border-[#FF006E] transform -rotate-1 text-center"
        >
          <h3 className="sakuma-title text-white mb-4">
            感情ではなく「環境」を提供します
          </h3>
          <p className="sakuma-body text-white/80 max-w-2xl mx-auto mb-8">
            初心者・未経験者に特化したプログラム設計。<br />
            <span className="font-black text-[#FF9A9E]">過度な交流を排し、個の集中を最優先します。</span>
          </p>
          <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer">
            <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
