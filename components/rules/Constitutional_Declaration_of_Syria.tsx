import { Constitutional_Declaration_of_Syria } from "@/components/rules";

export default function Constitutional_Declaration_of_Syria_Display() {
  return (
    <div
      className="max-w-7xl mx-auto p-6  text-gray-900 rtl text-justify"
      dir="rtl"
      lang="ar"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">
        {Constitutional_Declaration_of_Syria.title}
      </h1>

      <p className="text-lg leading-relaxed whitespace-pre-line">
        {Constitutional_Declaration_of_Syria.description}
      </p>

      {Constitutional_Declaration_of_Syria.chapters.map((chapter, idx) => (
        <section key={idx} className="mb-10 border-b border-gray-300 pb-6">
          <h2 className="text-2xl font-semibold mb-4">{chapter.title}</h2>

          {/* Handle articles or sections inside chapters */}
          {chapter.articles && (
            <div className="flex flex-col gap-4">
              {chapter.articles.map((article) => (
                <article
                  key={article.number}
                  className="mb-4 pr-4 border-r-4 border-teal-600"
                >
                  <h3 className="text-xl font-semibold mb-1">
                    {article.title} — المادة {article.number}
                  </h3>
                  <p className="text-lg leading-relaxed">{article.text}</p>
                </article>
              ))}
            </div>
          )}

          {chapter.sections && (
            <div className="flex flex-col gap-4">
              {chapter.sections.map((section, sIdx) => (
                <div key={sIdx} className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 ">
                    {section.title}
                  </h3>
                  {section.articles.map((article) => (
                    <article
                      key={article.number}
                      className="mb-3 pr-6 border-r-4 border-teal-600"
                    >
                      <h4 className="text-lg font-semibold mb-1">
                        {article.title} — المادة {article.number}
                      </h4>
                      <p className="text-base leading-relaxed">
                        {article.text}
                      </p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
