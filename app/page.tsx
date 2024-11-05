'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Analytics } from "@vercel/analytics/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from '@/components/ui/button';
import { BackgroundSlideshow } from '@/components/BackgroundSlideShow';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slides = [
    {
      id: 1,
      image: '/images/image.png',
      alt: 'スライド1の説明',
    },
    {
      id: 2,
      image: '/images/image_1.png',
      alt: 'スライド2の説明',
    },
    {
      id: 3,
      image: '/images/image_2.png',
      alt: 'スライド2の説明',
    },
    {
      id: 4,
      image: '/images/image_3.png',
      alt: 'スライド2の説明',
    },
    {
      id: 5,
      image: '/images/image_4.png',
      alt: 'スライド2の説明',
    },
    {
      id: 6,
      image: '/images/image_5.png',
      alt: 'スライド2の説明',
    },
    {
      id: 7,
      image: '/images/image_6.png',
      alt: 'スライド2の説明',
    },
    {
      id: 8,
      image: '/images/image_7.png',
      alt: 'スライド2の説明',
    },
    {
      id: 9,
      image: '/images/image_8.png',
      alt: 'スライド2の説明',
    },
    {
      id: 10,
      image: '/images/image_9.png',
      alt: 'スライド2の説明',
    },
    {
      id: 11,
      image: '/images/image_10.png',
      alt: 'スライド2の説明',
    },
    {
      id: 12,
      image: '/images/image_11.png',
      alt: 'スライド2の説明',
    },
    {
      id: 13,
      image: '/images/image_12.png',
      alt: 'スライド2の説明',
    },
    {
      id: 14,
      image: '/images/image_13.png',
      alt: 'スライド2の説明',
    },
    {
      id: 15,
      image: '/images/image_14.png',
      alt: 'スライド2の説明',
    },
    {
      id: 16,
      image: '/images/image_15.png',
      alt: 'スライド2の説明',
    },
  ];

  return (
    <>
      <Analytics />
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg p-1">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg sm:text-xl font-bold  text-blue-500 text-outline">METRONAVI</div>

          {/* モバイル用のメニューボタン */}
          <Button
            className="sm:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* ハンバーガーアイコン */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </Button>

          {/* ナビゲーションメニュー */}
          <nav className="hidden sm:flex space-x-4">
            <a href="/introduce" className="hover:text-blue-300">活動紹介</a>
            <a href="https://toritsu-connect.com/category/free-paper/" className="hover:text-blue-300">RE</a>
            <a href="/contacts" className="hover:text-blue-300">Contact</a>
          </nav>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <nav className="flex flex-col items-center space-y-2 mt-4">
              <a href="/introduce" className="hover:text-blue-300">活動紹介</a>
              <a href="https://toritsu-connect.com/category/free-paper/" className="hover:text-blue-300">RE</a>
              <a href="/contacts" className="hover:text-blue-300">Contact</a>
            </nav>
          </div>
        )}
      </header>

      <BackgroundSlideshow />
      <div className="background-container" id="backgroundContainer"></div>

      <main className="content h-screen flex items-center justify-center">
        <div className="container mx-auto text-center px-4 sm:px-0">
          {/* スマホ画面での文字サイズ調整 */}
          <div className="text-3xl sm:text-5xl font-bold text-blue-500 mt-[-20px] sm:mt-[-40px] mb-10 sm:mb-20">
            METRONAVI
          </div>

          <section className="mb-6">
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-100 text-outline">&quot;RE&quot; フリーペーパーについて</h2>
            <p className="mb-2 text-sm sm:text-base  text-white text-outline">
              フリーペーパーREは毎年都立大生に役立つ情報を発信しています！
            </p>
            <p className=' text-white text-outline text-md'>
              ↓↓今年のREはこちら↓↓
            </p>
          </section>

          {/* スライドショーの追加 */}
          <section className="mb-8">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-3/4 h-96 sm:w-1/2 sm:h-[960px] mx-auto">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

         <section>
  <p className="text-sm sm:text-base text-white text-outline fond-bold">サークルの情報はSNSで投稿しています！</p>
  <ul className="flex flex-row items-center justify-center space-x-4 mt-4">
    <li className="flex flex-col items-center">
      <a
        href="https://www.instagram.com/metronavi_tmu/profilecard/?igsh=MTNoamh1Zmxjbnl1dw=="
        target="_blank"
        className="text-blue-400 hover:underline text-2xl sm:text-3xl mb-2"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
      <Image
        src="/images/S__118439954.jpg"
        alt="Instagram Image"
        className="w-24 h-24 sm:w-32 sm:h-32"
        width={128}
        height={128}
      />
    </li>
    <li className="flex flex-col items-center">
      <a
        href="https://x.com/metro_navi_tmu"
        target="_blank"
        className="text-blue-400 hover:underline text-2xl sm:text-3xl mb-2"
        rel="noopener noreferrer"
      >
        X
      </a>
      <Image
        src="/images/S__118448211.jpg"
        alt="X Image"
        className="w-24 h-24 sm:w-32 sm:h-32"
        width={128}
        height={128}
      />
    </li>
  </ul>
</section>

        </div>
      </main>
    </>
  );
}




