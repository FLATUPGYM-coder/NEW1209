import { motion } from 'framer-motion';
import { Heart, Shield, Users, Zap, CheckCircle2, XCircle, Info, Sparkles, Coffee, Eye } from 'lucide-react';

/**
 * Concept and Policy Component - Sakuma Design V2
 * 
 * Design Philosophy:
 * - Bold sticker-style UI
 * - Engaging typography and iconography
 * - Defined sections for Philosophy, Design, Tactics, and Rules
 * - High contrast colors to maintain consistency with Sakuma Design
 */

const philosophy = {
    title: '「私」に戻る、静かな時間。',
    description: 'FLATUPGYM は、過度な高揚感や格闘技特有の熱狂を排した、落ち着きのある運動空間です。「頑張りすぎないこと」をルールとし、心身の平穏と適切な距離感を最も重要視しています。',
};

const basicDesign = [
    {
        icon: Sparkles,
        title: '「女性基準」の環境固定',
        description: '館内の清潔感、BGM、声のトーン。すべてを女性が「心地よい」と感じる基準で整えています。男性もこの静かな雰囲気を尊重してくださる方であれば歓迎いたします。',
        color: 'bg-[#FF006E]',
    },
    {
        icon: Eye,
        title: '「ふたりの目」が届く安心感',
        description: '常に夫婦ふたりの指導者が、フロア全体を見守っています。「小さく、目が届く」空間を維持することで、規律ある安心感を作ります。',
        color: 'bg-[#00D9FF]',
    },
    {
        icon: Coffee,
        title: '「感情」に依存しない距離感',
        description: '私たちは必要以上に深く関わったり、プライベートに踏み込むことはありません。お互いに礼儀正しく、けれど干渉しすぎない「さっぱりとした関係」を提供します。',
        color: 'bg-[#FFD700]',
    },
];

const tactics = [
    {
        title: 'マススパーリングの徹底',
        content: '全会員共通で、当てない、あるいは寸止めに近い「マススパーリング」のみを行います。力任せに打ち合う練習は厳密に制限します。',
    },
    {
        title: '「守る技術」こそが真の知性',
        content: '強く当てることよりも、ウィービング、ダッキング、フットワークといった「いかに打たせないか」を深くお伝えします。',
    },
    {
        title: '安全性の追求',
        content: '「日常生活に支障をきたさない安全な格闘技」を追求します。',
    },
];

export default function ConceptAndPolicySakuma() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="section-padding bg-[#FAFAF8] relative overflow-hidden">
            {/* Decorative Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF006E]/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00D9FF]/5 rounded-full blur-3xl -ml-32 -mb-32" />

            <div className="container relative z-10">
                {/* 1. Philosophy */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white border-8 border-[#1A1F3A] p-12 mb-20 transform -rotate-1 shadow-2xl"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-[#FF006E] text-white px-4 py-1 text-sm font-black uppercase tracking-widest">Philosophy</span>
                        <div className="flex-1 h-1 bg-[#1A1F3A]" />
                    </div>
                    <h2 className="sakuma-title text-[#1A1F3A] mb-6 leading-tight">
                        {philosophy.title}
                    </h2>
                    <p className="sakuma-body text-[#1A1F3A]/80 max-w-4xl text-lg md:text-xl font-medium leading-relaxed">
                        {philosophy.description}
                    </p>
                </motion.div>

                {/* Supplement Image 1: Calm Atmosphere */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex justify-center"
                >
                    <img
                        src="https://ik.imagekit.io/FLATUPGYM/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-01-28%2014.03.22.png"
                        alt="清潔で静かなジムエリア"
                        className="w-full md:w-2/3 h-64 object-cover rounded-none border-4 border-[#1A1F3A] shadow-lg transform rotate-2"
                        loading="lazy"
                    />
                </motion.div>

                {/* 2. Basic Design */}
                <div className="mb-12">
                    <div className="text-center mb-16">
                        <h3 className="sakuma-title text-[#1A1F3A] inline-block relative">
                            3つの基本設計
                            <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#FF9A9E]/30 -z-10" />
                        </h3>
                    </div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {basicDesign.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className={`${item.color} p-8 border-6 border-[#1A1F3A] shadow-xl transform hover:scale-105 transition-transform`}
                            >
                                <div className="w-14 h-14 bg-white border-4 border-[#1A1F3A] flex items-center justify-center mb-6 shadow-[4px_4px_0px_#1A1F3A]">
                                    <item.icon className="w-7 h-7 text-[#1A1F3A]" />
                                </div>
                                <h4 className="text-xl font-black text-[#1A1F3A] mb-4 leading-tight">{item.title}</h4>
                                <p className="text-[#1A1F3A]/90 text-sm font-bold leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    {/* 3. Tactics */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1A1F3A] text-white p-10 border-8 border-white shadow-2xl relative"
                    >
                        <div className="absolute -top-6 -right-6 bg-[#FF006E] text-white w-20 h-20 rounded-full flex items-center justify-center font-black text-xl border-4 border-white transform rotate-12 shadow-lg">
                            守!
                        </div>
                        <h3 className="text-3xl font-black mb-8 border-b-4 border-[#FF006E] pb-2 inline-block">技術方針：ディフェンス特化</h3>
                        <div className="space-y-6">
                            {tactics.map((tactic, idx) => (
                                <div key={idx}>
                                    <h4 className="text-[#FF9A9E] font-black text-lg mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        {tactic.title}
                                    </h4>
                                    <p className="text-white/80 text-sm leading-relaxed">{tactic.content}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 4. Tattoo & Human */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#FFD700] p-10 border-8 border-[#1A1F3A] shadow-2xl relative transform rotate-1"
                    >
                        <div className="mb-8">
                            <span className="bg-[#1A1F3A] text-white px-4 py-1 text-sm font-black">Rule 04</span>
                            <h3 className="text-3xl font-black text-[#1A1F3A] mt-4 leading-tight">タトゥーおよび人間性</h3>
                        </div>
                        <p className="text-[#1A1F3A] font-bold mb-6 text-sm leading-relaxed">
                            タトゥーがあること自体で入会をお断りすることはありません。ただし、私たちが最も重視するのは、見た目ではなく<span className="text-[#FF006E]">「その方の人間性」</span>です。
                        </p>
                        <div className="bg-white/50 p-6 border-4 border-[#1A1F3A] space-y-4">
                            <h4 className="font-black text-[#FF006E] flex items-center gap-2">
                                <XCircle className="w-5 h-5" />
                                即刻退会となる行為
                            </h4>
                            <ul className="text-xs font-bold text-[#1A1F3A] space-y-2 list-disc list-inside">
                                <li>反社会的勢力に属する方、または密接な関係がある方</li>
                                <li>他のお客様に対して威圧的な態度をとる方</li>
                                <li>ジムの穏やかな空気感を乱す言動（大声、乱暴な振る舞い等）</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* 5. Guide */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-0 border-8 border-[#1A1F3A] overflow-hidden"
                >
                    <div className="bg-white p-10 border-b-8 md:border-b-0 md:border-r-8 border-[#1A1F3A]">
                        <h3 className="text-2xl font-black text-[#00B8E6] mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6" />
                            当ジムに向いている方
                        </h3>
                        <ul className="space-y-4 text-sm font-bold text-[#1A1F3A]">
                            <li className="flex gap-2"><span>・</span>騒がしい場所や、体育会系のノリが苦手な方</li>
                            <li className="flex gap-2"><span>・</span>誰にも邪魔されず、自分のペースで淡々と体を動かしたい方</li>
                            <li className="flex gap-2"><span>・</span>運動習慣は作りたいが、無理な人間関係を望まない方</li>
                        </ul>
                    </div>
                    <div className="bg-[#FAFAF8] p-10">
                        <h3 className="text-2xl font-black text-[#1A1F3A]/50 mb-6 flex items-center gap-2">
                            <Info className="w-6 h-6" />
                            ご遠慮いただく方
                        </h3>
                        <ul className="space-y-4 text-sm font-bold text-[#1A1F3A]/60">
                            <li className="flex gap-2"><span>・</span>周囲との過度な交流やコミュニティ化を求める方</li>
                            <li className="flex gap-2"><span>・</span>格闘技に「強さ」や「激しさ」のみを求める方</li>
                            <li className="flex gap-2"><span>・</span>指導者や他会員に対し、過度な情緒的配慮を求める方</li>
                        </ul>
                    </div>
                </motion.div>

                <div className="mt-20 text-center">
                    <p className="sakuma-body text-[#1A1F3A] font-black text-xl mb-8">
                        「さっぱりとした関係」で、自分自身のトレーニングを。
                    </p>
                    <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer" className="inline-block transform hover:scale-110 transition-transform">
                        <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="48" className="h-12" />
                    </a>
                </div>
            </div>
        </section>
    );
}
