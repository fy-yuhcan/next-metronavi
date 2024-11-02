import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function ActivityIntroduction() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">活動紹介</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">メトロナビの活動</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-lg">
                メトロナビはフリーペーパー<strong>&quot;RE&quot;</strong>を作成し、都立大生と地元企業を繋げる活動をしています！
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>地域と学生の架け橋</li>
                <li>地元企業の魅力発信</li>
                <li>学生の視点からの情報提供</li>
              </ul>
            </div>
            <div className="relative w-full h-64 md:h-full">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <Image
                    src="/images/S__118448145.jpg"
                    alt="メトロナビの活動"
                    width={600}
                    height={400}
                  />
                </div>
              </AspectRatio>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">フリーペーパー<strong>&quot;RE&quot;</strong>について</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full h-64 md:h-full">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <Image
                    src="/images/image.png"
                    alt="RE"
                    width={600}
                    height={400}
                  />
                </div>
              </AspectRatio>
            </div>
            <div className="space-y-4">
              <p className="text-lg">
                <strong>&quot;RE&quot;</strong>は、地域の魅力を再発見し、学生と地元をつなぐフリーペーパーです。
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>地元企業の紹介</li>
                <li>学生目線のおすすめスポット</li>
                <li>地域イベント情報</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
