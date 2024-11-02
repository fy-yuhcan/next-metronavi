import Image from "next/image";

export default function Contacts() {
    return (
        <>
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
        </>
  )
}