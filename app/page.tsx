'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

export default function Home() {
  const slides = [
    {
      id: 1,
      image: '/images/LINE_ALBUM_めなびー_241101_1.jpg',
      alt: 'スライド1の説明',
    },
    {
      id: 2,
      image: '/images/LINE_ALBUM_めなびー_241101_2.jpg',
      alt: 'スライド2の説明',
    },
    {
      id: 3,
      image: '/images/slide3.jpg',
      alt: 'スライド3の説明',
    },
    // 必要に応じてスライドを追加
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
            ポータルサイトMETRONAVI
          </div>

          <section className="mb-6">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-5">活動紹介</h2>
            <p className="mb-8 text-sm sm:text-base">
              私たちは、東京都立大学の生徒に役立つ情報を発信しています。また、&quot;RE&quot;というフリーペーパーを発行することで、南大沢の地元企業と都立大生とのつながりを深めることを目指しています。
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
                  <div className="relative w-full h-64 sm:h-96">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-4">&quot;RE&quot; フリーペーパーについて</h2>
            <p className="mb-2 text-sm sm:text-base">
              フリーペーパーREは毎年都立大生に役立つ情報を発信しています！
            </p>
            <a href="https://www.canva.com/design/DAGVH9KGaq8/UwPuFL9Za7zd5j_h5U-QbA/view?utm_content=DAGVH9KGaq8&utm_campaign=designshare&utm_medium=link&utm_source=editor">
              <button className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 text-sm sm:text-base">
                フリーペーパー「RE」を見る
              </button>
            </a>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-5">REをみてみよう！！</h2>
            <p className="text-sm sm:text-base">
              RE2024年版の画面を&quot;METROなSAKABar&quot;にもっていくと南大沢で使えるクーポンを獲得できます！
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-4xl font-semibold mb-2">Contact</h2>
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



