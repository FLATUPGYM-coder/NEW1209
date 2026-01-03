import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

/**
 * Gallery Component - Sakuma Design
 * 
 * Design Philosophy:
 * - Dynamic carousel with bold styling
 * - High-quality gym images
 * - Playful navigation
 */

const galleryImages = [
  {
    url: 'https://ik.imagekit.io/FLATUPGYM/IMG_6884.JPG?updatedAt=1767137483813',
    title: 'ジムの風景',
    description: '清潔感のあるトレーニングエリア',
  },
  {
    url: 'https://ik.imagekit.io/FLATUPGYM/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-12-31%2014.39.19.png',
    title: 'トレーニング',
    description: '楽しく体を動かせる環境',
  },
  {
    url: 'https://ik.imagekit.io/FLATUPGYM/batch_%E3%82%B7%E3%82%99%E3%83%A0%E3%80%80.JPG?updatedAt=1756928110310',
    title: '充実の設備',
    description: '本格的なキックボクシング設備',
  },
  {
    url: 'https://ik.imagekit.io/FLATUPGYM/batch_%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-02-27%208.27.16.png?updatedAt=1756928112222',
    title: '明るい雰囲気',
    description: '初心者でも安心して通えます',
  },
  {
    url: 'https://ik.imagekit.io/FLATUPGYM/batch_%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-01-21%2018.31.02%202.png?updatedAt=1756928111468',
    title: '仲間の輪',
    description: '女性会員も多く活躍中',
  },
  {
    url: 'https://ik.imagekit.io/FLATUPGYM/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-01-28%2014.03.22.png',
    title: '清潔な空間',
    description: '常にクリーンな状態をキープ',
  },
  {
    url: 'https://ik.imagekit.io/FLATUPGYM/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-01-28%2013.55.35.png?updatedAt=1738041347828',
    title: 'ダイナミック',
    description: 'エネルギッシュなクラス展開',
  },
  {
    url: 'https://ik.imagekit.io/FLATUPGYM/batch_batch_IMG_0267%202.png?updatedAt=1756928161179',
    title: '広々としたフロア',
    description: 'のびのびとトレーニング可能',
  },
  {
    url: 'https://ik.imagekit.io/FLATUPGYM/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-01-28%2013.50.32.png?updatedAt=1738041347920',
    title: '洗練されたデザイン',
    description: 'モチベーションが上がる空間',
  },
  {
    url: 'https://ik.imagekit.io/FLATUPGYM/2.jpg?updatedAt=1751535141684',
    title: 'キックボクシング',
    description: '全身運動でリフレッシュ',
  },
  {
    url: 'https://ik.imagekit.io/FLATUPGYM/3.jpg?updatedAt=1751535141772',
    title: '理想の体へ',
    description: '着実なダイエットをサポート',
  },
];

export default function GallerySakuma() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setAutoplay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    setAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="sakuma-title text-[#1A1F3A] mb-4">
            ジムの様子
          </h2>
          <p className="sakuma-body text-[#666666] max-w-2xl mx-auto">
            FLATUPGYM の雰囲気を感じてください。
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-8"
        >
          {/* Main Image */}
          <div className="relative w-full aspect-square md:max-w-3xl mx-auto rounded-none border-8 border-[#1A1F3A] overflow-hidden shadow-2xl bg-[#F5E6F0]">
            <motion.img
              key={currentIndex}
              src={galleryImages[currentIndex].url}
              alt={galleryImages[currentIndex].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-contain"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-3xl font-black text-white mb-2">
                {galleryImages[currentIndex].title}
              </h3>
              <p className="text-white/90 font-bold">
                {galleryImages[currentIndex].description}
              </p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              aria-label="前の画像へ"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1A1F3A] p-3 rounded-full transition-all duration-300 transform hover:scale-110 border-4 border-[#1A1F3A]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              aria-label="次の画像へ"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1A1F3A] p-3 rounded-full transition-all duration-300 transform hover:scale-110 border-4 border-[#1A1F3A]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-8 justify-center">
            {galleryImages.map((image, idx) => (
              <motion.button
                key={idx}
                onClick={() => goToSlide(idx)}
                whileHover={{ scale: 1.1 }}
                aria-label={`${image.title}を表示`}
                className={`w-20 h-20 rounded-none border-4 overflow-hidden transition-all duration-300 ${idx === currentIndex
                  ? 'border-[#FF006E] shadow-lg scale-110'
                  : 'border-[#1A1F3A] opacity-60 hover:opacity-100'
                  }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6">
            <p className="text-[#1A1F3A] font-black text-sm">
              {currentIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1A1F3A] p-8 rounded-none border-8 border-[#00D9FF] transform rotate-1 text-center"
        >
          <p className="sakuma-body text-white/80 mb-4">
            実際のジムの雰囲気を感じたい方は、
          </p>
          <p className="text-white font-black text-xl mb-6">
            無料体験クラスにお越しください！
          </p>
          <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer">
            <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
