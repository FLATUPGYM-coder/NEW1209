import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

/**
 * Instagram Embed Component - Sakuma Design
 * 
 * Provides a rich, app-like visual cue to drive traffic to the official Instagram.
 * Uses static assets to avoid API token expiration issues.
 */

export default function InstagramEmbedSakuma() {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center gap-3 mb-4">
                        <Instagram className="w-8 h-8 text-[#E1306C]" />
                        <h2 className="text-3xl font-black text-[#1A1F3A]">
                            Follow Us on Instagram
                        </h2>
                    </div>
                    <p className="text-[#666666] font-bold">
                        ジムの日常や最新情報をチェック！
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    <a
                        href="https://www.instagram.com/flatup.narita?igsh=MXZsdWIzcHN0dTc1NQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative max-w-sm w-full"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02, rotate: -1 }}
                            className="bg-white border-4 border-[#1A1F3A] rounded-none shadow-[10px_10px_0px_0px_rgba(26,31,58,1)] transition-all duration-300 sticker-ui"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b-2 border-[#f0f0f0]">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-[#E1306C] p-0.5">
                                        <div className="w-full h-full bg-[#1A1F3A] rounded-full overflow-hidden">
                                            {/* Placeholder for profile pic if needed, or just colored div */}
                                            <img src="https://ik.imagekit.io/FLATUPGYM/IMG_7009.JPG?updatedAt=1767137571344?tr=w-100,h-100,fo-auto" alt="Logo" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-[#1A1F3A]">flatup.narita</p>
                                        <p className="text-xs text-gray-500">成田市</p>
                                    </div>
                                </div>
                                <button className="text-[#1A1F3A]">•••</button>
                            </div>

                            {/* Image Area */}
                            <div className="relative aspect-square bg-gray-100 overflow-hidden">
                                <img
                                    src="https://ik.imagekit.io/FLATUPGYM/IMG_6884.JPG?updatedAt=1767137483813?tr=w-600,h-600,fo-auto"
                                    alt="Flatup Gym Instagram"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Overlay indicating click */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <p className="text-white font-black text-lg bg-[#E1306C] px-6 py-2 transform rotate-2">
                                        View Profile
                                    </p>
                                </div>
                            </div>

                            {/* Action Bar */}
                            <div className="p-4">
                                <div className="flex justify-between mb-3">
                                    <div className="flex gap-4">
                                        <Heart className="w-6 h-6 text-[#1A1F3A] hover:text-[#E1306C] transition-colors" />
                                        <MessageCircle className="w-6 h-6 text-[#1A1F3A]" />
                                        <Send className="w-6 h-6 text-[#1A1F3A]" />
                                    </div>
                                    <Bookmark className="w-6 h-6 text-[#1A1F3A]" />
                                </div>

                                <p className="font-bold text-sm text-[#1A1F3A] mb-1">92 likes</p>
                                <p className="text-sm text-[#1A1F3A]">
                                    <span className="font-bold mr-2">flatup.narita</span>
                                    女性・初心者大歓迎！✨ 見学・体験お待ちしております🥊 #成田 #キックボクシング
                                </p>
                                <p className="text-xs text-gray-400 mt-2 uppercase">2 hours ago</p>
                            </div>
                        </motion.div>
                    </a>
                </div>
            </div>
        </section>
    );
}
