import { Marquee } from "@/components/ui/marquee";
import Link from "next/link";

const newsAboutLaws = [
  { param: "law1", title: "قانون جديد لحماية البيانات" },
  { param: "law2", title: "تعديلات على قانون العمل" },
  { param: "law3", title: "قانون الضرائب الجديد" },
  { param: "law4", title: "قانون البيئة المستدامة" },
];

export function Ticker() {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="relative flex h-fit flex-col items-center justify-center overflow-hidden 
        bg-background md:shadow-xl w-screen md:mx-auto max-w-screen-xl lg:border-0 border-y border-slate-200"
      >
        <Marquee
          pauseOnHover
          reverse={true} // Assuming 'locale' is not defined, defaulting to false
          className="[--duration:30s] overflow-hidden flex flex-row items-center justify-center"
        >
          {newsAboutLaws
            .map((news, index) => (
              <Link
                key={news.param}
                href={`/laws/${news.param}`}
                className="text-md md:text-2xl"
              >
                {news.param === "law1" && (
                  <strong className="font-bold pr-1">
                    قانون جديد لحماية البيانات
                  </strong>
                )}
                {` ${news.title}`}
                <span className="mx-8">•</span>
              </Link>
            ))
            .reverse()}
        </Marquee>
      </div>
    </div>
  );
}
