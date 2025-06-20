import React from "react";
import { socialInsuranceLaw } from "../social_insurance_code";

const SocialInsuranceLaw: React.FC = () => {
  return (
    <div
      className="max-w-7xl mx-auto p-6 text-gray-900 rtl text-justify"
      dir="rtl"
      lang="ar"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">
        {socialInsuranceLaw.title}
      </h1>

      <p className="text-lg leading-relaxed whitespace-pre-line pb-4 text-center">
        {socialInsuranceLaw.description}
      </p>

      {socialInsuranceLaw.chapters.map((chapter, chapterIdx) => (
        <section
          key={chapterIdx}
          className="mb-10 border-b border-gray-300 pb-6 space-y-6"
        >
          <h2 className="text-2xl font-semibold mb-4">{chapter.title}</h2>

          {chapter.sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-6 space-y-6">
              <h3 className="text-xl font-semibold">{section.title}</h3>

              {section.chapters.map((subchapter, subchapterIdx) => (
                <div key={subchapterIdx} className="space-y-6">
                  <h4 className="text-lg font-semibold">{subchapter.title}</h4>

                  {subchapter.articles.map((article) => (
                    <article
                      key={article.number}
                      className="pr-6 border-r-4 border-teal-600"
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

export default SocialInsuranceLaw;
