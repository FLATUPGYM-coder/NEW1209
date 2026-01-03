import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronLeft, Award, Heart, Zap } from 'lucide-react';
import Footer from '@/components/Footer';
import FixedFooterButtons from '@/components/FixedFooterButtons';

export default function Greeting() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b-4 border-[#1A1F3A] p-4">
                <div className="container flex justify-between items-center">
                    <Link href="/">
                        <a className="flex items-center gap-2 text-[#1A1F3A] font-black hover:text-[#FF006E] transition-colors">
                            <ChevronLeft className="w-6 h-6" />
                            <span>HOMEに戻る</span>
                        </a>
                    </Link>
                    <div className="sakuma-title text-xl">MESSAGE</div>
                </div>
            </nav>

            <main className="pt-24 pb-20">
                {/* Hero Section */}
                <section className="relative overflow-hidden mb-20">
                    <div className="container">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >
                            <motion.div variants={itemVariants} className="relative">
                                <div className="relative z-10 border-8 border-[#FF006E] transform rotate-2 overflow-hidden shadow-2xl">
                                    <img
                                        src="https://ik.imagekit.io/FLATUPGYM/sango1.jpeg?updatedAt=1756897186137"
                                        alt="オーナー あいか"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#00D9FF] rounded-none opacity-20 blur-3xl" />
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-8">
                                <div>
                                    <h1 className="sakuma-title text-[#FF006E] text-5xl md:text-7xl mb-4">
                                        OWNER<br />GREETING
                                    </h1>
                                    <h2 className="text-3xl md:text-4xl font-black text-[#1A1F3A]">
                                        オーナー あいか
                                    </h2>
                                </div>

                                <div className="bg-[#1A1F3A] p-8 border-l-8 border-[#FF006E] text-white">
                                    <p className="text-xl md:text-2xl font-black leading-tight">
                                        「産後ダイエット-25kgの結果から逆算した、<br />
                                        論理的なトレーニングを提供します。」
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="bg-[#FAFAF8] py-20 border-y-8 border-[#1A1F3A]">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto space-y-12"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h3 className="sakuma-title text-3xl text-[#1A1F3A]">THE STORY</h3>
                                    <p className="sakuma-body text-lg leading-relaxed">
                                        産後からキックボクシングを開始し、
                                        <span className="font-black text-[#FF006E] text-2xl mx-1">25kg</span>
                                        の減量結果を記録しました。
                                    </p>
                                    <p className="sakuma-body text-lg leading-relaxed">
                                        この実績を元に、食事管理と運動プログラムを最適化し、
                                        短時間で効率的なボディメイクを標準化しています。
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <h3 className="sakuma-title text-3xl text-[#1A1F3A]">EXPERIENCE</h3>
                                    <p className="sakuma-body text-lg leading-relaxed">
                                        ダイエットインストラクター資格を保有し、
                                        <span className="font-black text-[#00D9FF] text-2xl mx-1">夫婦による2人体勢</span>
                                        での運営・指導を行っています。
                                    </p>
                                    <p className="sakuma-body text-lg leading-relaxed">
                                        常に2人の目があることで、不適切な行動の抑止と、
                                        一人ひとりの状態把握を確実なものにしています。
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
                                {[
                                    { icon: Zap, text: '産後-25kgの成功実績', color: 'bg-[#FF006E]' },
                                    { icon: Award, text: '公認インストラクター', color: 'bg-[#00D9FF]' },
                                    { icon: Heart, text: '寄り添うマンツーマン', color: 'bg-[#FFD700]' },
                                ].map((item, idx) => (
                                    <div key={idx} className={`${item.color} p-6 border-4 border-[#1A1F3A] flex items-center gap-4 sticker-ui`}>
                                        <item.icon className="w-8 h-8 text-white font-black" />
                                        <span className="text-white font-black">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Message Section */}
                <section className="py-20">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-[#FF9A9E] p-12 border-8 border-[#1A1F3A] text-center"
                        >
                            <h3 className="sakuma-title text-white text-4xl mb-8 drop-shadow-lg">
                                MESSAGE TO YOU
                            </h3>
                            <p className="text-xl md:text-2xl font-black text-[#1A1F3A] mb-8 leading-relaxed">
                                初心者専用の環境維持に努めています。<br />
                                感情的な過度な交流ではなく、<br />
                                <span className="text-white">淡々と、だが確実な継続を支援します。</span>
                            </p>
                            <div className="pt-4">
                                <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer" className="inline-block transform hover:scale-110 transition-transform">
                                    <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="48" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
            <FixedFooterButtons />
        </div>
    );
}
