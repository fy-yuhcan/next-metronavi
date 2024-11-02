'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const slides = [
    {
      id: 1,
      image: '/images/image.png',
      alt: 'スライド1の説明',
    },
    {
      id: 2,
      image: '/images/image (1).png',
      alt: 'スライド2の説明',
    },
    {
      id: 3,
      image: '/images/image (2).png',
      alt: 'スライド2の説明',
    },
    {
      id: 4,
      image: '/images/image (3).png',
      alt: 'スライド2の説明',
    },
    {
      id: 5,
      image: '/images/image (4).png',
      alt: 'スライド2の説明',
    },
    {
      id: 6,
      image: '/images/image (5).png',
      alt: 'スライド2の説明',
    },
    {
      id: 7,
      image: '/images/image (6).png',
      alt: 'スライド2の説明',
    },
    {
      id: 8,
      image: '/images/image (7).png',
      alt: 'スライド2の説明',
    },
    {
      id: 9,
      image: '/images/image (8).png',
      alt: 'スライド2の説明',
    },
    {
      id: 10,
      image: '/images/image (9).png',
      alt: 'スライド2の説明',
    },
    {
      id: 11,
      image: '/images/image (10).png',
      alt: 'スライド2の説明',
    },
    {
      id: 12,
      image: '/images/image (11).png',
      alt: 'スライド2の説明',
    },
    {
      id: 13,
      image: '/images/image (12).png',
      alt: 'スライド2の説明',
    },
    {
      id: 14,
      image: '/images/image (13).png',
      alt: 'スライド2の説明',
    },
    {
      id: 15,
      image: '/images/image (14).png',
      alt: 'スライド2の説明',
    },
    {
      id: 16,
      image: '/images/image (15).png',
      alt: 'スライド2の説明',
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 header shadow-lg p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg sm:text-xl font-bold">METRONAVI</div>
          {/* モバイルではハンバーガーメニューにするか、メニューを非表示 */}
          <nav className="hidden sm:flex space-x-4">
            <a href="#" className="hover:text-blue-300">活動紹介</a>
            <a href="https://toritsu-connect.com/category/free-paper/" className="hover:text-blue-300">RE</a>
            <a href="/contacts" className="hover:text-blue-300">Contact</a>
          </nav>
        </div>
      </header>

      <div className="background-container" id="backgroundContainer"></div>

      <main className="content h-screen flex items-center justify-center">
        <div className="container mx-auto text-center px-4 sm:px-0">
          {/* スマホ画面での文字サイズ調整 */}
          <div className="text-3xl sm:text-5xl font-bold text-blue-500 mt-[-20px] sm:mt-[-40px] mb-10 sm:mb-20">
            METRONAVI
          </div>

          <section className="mb-6">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-">&quot;RE&quot; フリーペーパーについて</h2>
            <p className="mb-2 text-sm sm:text-base">
              フリーペーパーREは毎年都立大生に役立つ情報を発信しています！ ↓↓今年のRE↓↓
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
              <div className="relative w-3/4 h-120 sm:w-1/2 sm:h-[960px] mx-auto">
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
            <p className="text-sm sm:text-base">サークルの情報はSNSで投稿しています！</p>
            <ul className="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0">
              <li className="flex items-center space-x-2 sm:space-x-4">
                <i className="fab fa-instagram text-pink-500"></i>
                <a
                  href="https://www.instagram.com/metronavi_tmu/profilecard/?igsh=MTNoamh1Zmxjbnl1dw=="
                  target="_blank"
                  className="text-blue-400 hover:underline text-2xl sm:text-3xl"
                >
                  Instagram
                </a>
                <Image
                  src="/images/S__118439954.jpg"
                  alt="Instagram Image"
                  className="w-24 h-24 sm:w-32 sm:h-32 ml-2 sm:ml-4"
                  width={128}
                  height={128}
                />
              </li>
              <li className="flex items-center space-x-2 sm:space-x-4">
                <i className="fab fa-x-twitter text-blue-500"></i>
                <a
                  href="https://x.com/metro_navi_tmu"
                  target="_blank"
                  className="text-blue-400 hover:underline text-2xl sm:text-3xl"
                >
                  X
                </a>
                <Image
                  src="/images/S__118448211.jpg"
                  alt="X Image"
                  className="w-24 h-24 sm:w-32 sm:h-32 ml-2 sm:ml-4"
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




