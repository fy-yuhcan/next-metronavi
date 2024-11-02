import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 header shadow-lg p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">METRONAVI</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-blue-300">活動紹介</a>
            <a href="https://toritsu-connect.com/category/free-paper/" className="hover:text-blue-300">RE</a>
            <a href="/contacts" className="hover:text-blue-300">Contact</a>
          </nav>
        </div>
      </header>

      <div className="background-container" id="backgroundContainer"></div>

      <main className="content h-screen flex items-center justify-center">
        <div className="container mx-auto text-center">
          <div className="text-5xl font-bold text-blue-500 mt-[-40px] mb-20">
            ポータルサイトMETRONAVI
          </div>

          <section className="mb-6">
            <h2 className="text-4xl font-semibold mb-5">活動紹介</h2>
            <p className="mb-8">
              私たちは、東京都立大学の生徒に役立つ情報を発信しています。また、"RE"というフリーペーパーを発行することで、南大沢の地元企業と都立大生とのつながりを深めることを目指しています。
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-4xl font-semibold mb-4">"RE" フリーペーパーについて</h2>
            <p className="mb-2">
              フリーペーパーREは毎年都立大生に役立つ情報を発信しています！
            </p>
            <a href="https://www.canva.com/design/DAGVH9KGaq8/UwPuFL9Za7zd5j_h5U-QbA/view?utm_content=DAGVH9KGaq8&utm_campaign=designshare&utm_medium=link&utm_source=editor">
              <button className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
                フリーペーパー「RE」を見る
              </button>
            </a>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-5">REをみてみよう！！</h2>
            <p>
              RE2024年版の画面を"METROなSAKABar"にもっていくと南大沢で使えるクーポンを獲得できます！
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-semibold mb-2">Contact</h2>
            <p>サークルの情報はSNSで投稿しています！</p>
            <ul className="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0">
              <li className="flex items-center space-x-4">
                <i className="fab fa-instagram text-pink-500"></i>
                <a
                  href="https://www.instagram.com/metronavi_tmu/profilecard/?igsh=MTNoamh1Zmxjbnl1dw=="
                  target="_blank"
                  className="text-blue-400 hover:underline text-3xl"
                >
                  Instagram
                </a>
                <Image
                  src="/images/S__118439954.jpg"
                  alt="Instagram Image"
                  className="w-32 h-32 ml-4"
                  width={128}
                  height={128}
                />
              </li>
              <li className="flex items-center space-x-4">
                <i className="fab fa-x-twitter text-blue-500"></i>
                <a
                  href="https://x.com/metro_navi_tmu"
                  target="_blank"
                  className="text-blue-400 hover:underline text-3xl"
                >
                  X
                </a>
                <Image
                  src="/images/S__118448211.jpg"
                  alt="X Image"
                  className="w-32 h-32 ml-4"
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
