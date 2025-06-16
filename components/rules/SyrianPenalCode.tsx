import React from "react";
import { SyrianPenalCode } from "../rules";

const SyrianPenalCode_Display = () => {
  return (
    <div
      className="max-w-7xl mx-auto p-6 text-gray-900 rtl text-justify"
      dir="rtl"
      lang="ar"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">
        {SyrianPenalCode.title}
      </h1>

      <p className="text-lg leading-relaxed whitespace-pre-line pb-4">
        {SyrianPenalCode.description}
      </p>

      {SyrianPenalCode.chapters.map((chapter, chapterIndex) => (
        <section
          key={chapterIndex}
          className="mb-10 border-b border-gray-300 pb-6"
        >
          <h2 className="text-2xl font-semibold mb-4">{chapter.title}</h2>

          {chapter.sections?.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              <h3 className="text-xl font-semibold mb-3">{section.title}</h3>

              {section.chapters?.map((subChapter, subChapterIndex) => (
                <div key={subChapterIndex} className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">
                    {subChapter.title}
                  </h4>

                  {subChapter.articles?.map((article) => (
                    <article
                      key={article.number}
                      className="mb-3 pr-6 border-r-4 border-teal-600"
                    >
                      <h5 className="text-lg font-semibold mb-1">
                        {article.title} — المادة {article.number}
                      </h5>
                      <p className="text-base leading-relaxed whitespace-pre-line">
                        {article.text}
                      </p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default SyrianPenalCode_Display;
