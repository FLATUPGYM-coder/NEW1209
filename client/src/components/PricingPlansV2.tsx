import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

/**
 * Pricing Plans Component - V2 (Updated)
 * 
 * Design Philosophy:
 * - 3 main plans: Kids, Ladies, Mens
 * - Visitor & ticket options
 * - Campaign banner
 */

const mainPlans = [
  {
    name: 'キッズプラン',
    subtitle: '小1〜中3',
    price: '7,700',
    period: '/月',
    description: '週3回のレッスン',
    features: [
      '週3回（火・木・土）',
      '護身術の基礎を学べる',
      '体力向上・礼儀指導',
      'いじめ対策にも効果的',
    ],
    cta: '今すぐ申し込む',
    color: 'bg-[#00D9FF]',
    rotation: '-2deg',
    popular: false,
  },
  {
    name: 'レディースプラン',
    subtitle: '女性専用',
    price: '8,800',
    period: '/月',
    description: '通い放題で美ボディへ',
    features: [
      '通い放題',
      '美容・シェイプアップ',
      '子連れOK',
      'ダイエット実績多数',
    ],
    cta: '今すぐ申し込む',
    color: 'bg-[#FF006E]',
    rotation: '2deg',
    popular: true,
  },
  {
    name: 'メンズプラン',
    subtitle: '高校生以上',
    price: '9,900',
    period: '/月',
    description: '本格的な格闘技を習得',
    features: [
      '通い放題',
      '格闘技全般を学べる',
      '筋力アップ',
      'ストレス発散に最適',
    ],
    cta: '今すぐ申し込む',
    color: 'bg-[#FFD700]',
    rotation: '-1deg',
    popular: false,
  },
];

const visitorPlans = [
  {
    name: 'ビジター',
    price: '3,000',
    period: '1回',
    description: 'お試し利用',
  },
  {
    name: '6回券',
    price: '15,000',
    period: '1年有効',
    description: 'お得なセット',
  },
  {
    name: '12回券',
    price: '30,000',
    period: '1年有効・最安',
    description: '最もお得',
  },
];

export default function PricingPlansV2() {
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
    <section className="section-padding bg-gradient-to-b from-[#FAFAF8] to-white relative overflow-hidden">
      {/* Campaign Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 bg-gradient-to-r from-[#FF006E] to-[#FF9A9E] p-6 rounded-none border-6 border-[#1A1F3A] transform -rotate-1 text-center sticker-ui shadow-xl"
      >
        <p className="text-white font-black text-2xl">
          🎉 入会金無料キャンペーン中
        </p>
        <p className="text-white/90 font-bold mt-2">
          手ぶらで体験OK（レンタル無料）
        </p>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="sakuma-title text-[#1A1F3A] mb-4">
          料金プラン
        </h2>
        <p className="sakuma-body text-[#666666] max-w-2xl mx-auto">
          あなたのペースに合わせて選べる、3つのプラン。
        </p>
      </motion.div>

      {/* Main Pricing Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        {mainPlans.map((plan, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
            className={`${plan.color} p-8 rounded-none border-6 border-[#1A1F3A] transform ${plan.rotation} transition-all duration-300 cursor-pointer sticker-ui shadow-2xl relative`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                animate={{ rotate: [12, 8, 12] }}
                transition={{ rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-[#1A1F3A] px-6 py-3 rounded-none border-4 border-[#1A1F3A] font-black text-sm transform rotate-12 shadow-xl z-20"
              >
                人気No.1
              </motion.div>
            )}

            {/* Plan Name */}
            <h3 className="text-3xl font-black text-white mb-1">
              {plan.name}
            </h3>
            <p className="text-white/80 font-bold text-sm mb-4">{plan.subtitle}</p>

            {/* Price */}
            <div className="mb-6 pb-6 border-b-4 border-white">
              <p className="text-5xl font-black text-white">
                ¥{plan.price}
              </p>
              <p className="text-white/80 text-sm font-bold mt-1">{plan.period}</p>
              <p className="text-white/70 text-xs font-bold mt-2">{plan.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {plan.features.map((feature, fidx) => (
                <div key={fidx} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-white font-black flex-shrink-0 mt-0.5" />
                  <span className="text-white font-bold text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full bg-white text-[#1A1F3A] py-4 rounded-none font-black text-lg border-4 border-[#1A1F3A] hover:bg-[#1A1F3A] hover:text-white transition-all duration-300 transform active:scale-95">
                {plan.cta}
              </button>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Visitor & Ticket Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-black text-[#1A1F3A] text-center mb-8">
          ビジター・回数券
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visitorPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-4 border-[#1A1F3A] p-6 rounded-none text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <h4 className="text-2xl font-black text-[#1A1F3A] mb-2">
                {plan.name}
              </h4>
              <p className="text-4xl font-black text-[#FF006E] mb-2">
                ¥{plan.price}
              </p>
              <p className="text-sm font-bold text-[#666666] mb-4">
                {plan.period}
              </p>
              <p className="text-xs font-bold text-[#999999]">
                {plan.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Items Needed for Joining */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 bg-[#FAFAF8] p-8 md:p-12 border-y-8 border-[#1A1F3A] relative"
      >
        <div className="container max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <span className="bg-[#FF9A9E] text-white px-4 py-1 text-sm font-black uppercase tracking-widest transform -rotate-2">Checklist</span>
            <h3 className="text-3xl font-black text-[#1A1F3A]">
              入会時に必要なもの
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 border-4 border-[#1A1F3A] shadow-lg transform rotate-1">
                <h4 className="font-black text-lg text-[#FF006E] mb-2 flex items-center gap-2">
                  <span className="text-2xl">1</span> 月謝 1ヶ月分
                </h4>
                <p className="text-[#1A1F3A]/80 font-bold text-sm">
                  当月分は日割り計算となります。<br />
                  無駄なくスタートできます。
                </p>
              </div>

              <div className="bg-white p-6 border-4 border-[#1A1F3A] shadow-lg transform -rotate-1">
                <h4 className="font-black text-lg text-[#00D9FF] mb-2 flex items-center gap-2">
                  <span className="text-2xl">2</span> 決済用カード
                </h4>
                <p className="text-[#1A1F3A]/80 font-bold text-sm">
                  口座振替登録用クレジットカード、<br />
                  または銀行カードをご持参ください。
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 border-4 border-[#1A1F3A] shadow-lg transform rotate-1">
                <h4 className="font-black text-lg text-[#FFD700] mb-2 flex items-center gap-2">
                  <span className="text-2xl">3</span> 諸費用
                </h4>
                <ul className="text-[#1A1F3A]/80 font-bold text-sm space-y-2">
                  <li className="flex justify-between border-b-2 border-dotted border-[#1A1F3A]/20 pb-1">
                    <span>カードキー発行手数料</span>
                    <span className="font-black">1,000円</span>
                  </li>
                  <li className="flex justify-between">
                    <span>スポーツ保険加入 (任意)</span>
                    <span className="font-black">2,000円</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 border-4 border-[#1A1F3A] shadow-lg transform -rotate-1 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 bg-[#FF006E] text-white w-20 h-20 flex items-end justify-center pb-2 transform rotate-45 font-black text-xs">
                  SALE
                </div>
                <h4 className="font-black text-lg text-[#1A1F3A] mb-2 flex items-center gap-2">
                  <span className="text-2xl">4</span> 防具について
                </h4>
                <p className="text-[#1A1F3A]/80 font-bold text-sm mb-2">
                  お持ちの方は購入不要です。<br />
                  防具はレンタル可能です。
                </p>
                <div className="bg-[#1A1F3A] text-white p-3 text-center">
                  <p className="text-xs font-bold mb-1">スターターセット (割引価格)</p>
                  <p className="text-xl font-black text-[#FFD700]">12,000円</p>
                  <p className="text-[10px] mt-1 opacity-80">グローブ・レガース・ファールカップ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="sakuma-body text-[#1A1F3A] mb-6">
          体験クラスは <span className="font-black text-[#FF006E]">30秒で予約完了</span>。<br />
          見学だけでも大歓迎です。
        </p>
        <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer">
          <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" />
        </a>
      </motion.div>
    </section>
  );
}
