// components/BackgroundSlideshow.tsx

import { cn } from "@/lib/utils";

const images = [
  "/images/LINE_ALBUM_めなびー_241101_1.jpg",
  "/images/LINE_ALBUM_めなびー_241101_2.jpg",
];

export function BackgroundSlideshow() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
              "absolute inset-0 bg-cover bg-center animate-slideshow",
              "filter blur-sm",
            index === 0 ? "opacity-1" : "opacity-0"
          )}
          style={{
            backgroundImage: `url(${image})`,
            animationDelay: `${index * 5}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
