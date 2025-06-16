import React from "react";
import { financialLaw } from "../rules";

const FinancialLaw: React.FC = () => {
  return (
    <div
      className="max-w-7xl mx-auto p-6 text-gray-900 rtl text-justify"
      dir="rtl"
      lang="ar"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">
        {financialLaw.title}
      </h1>

      <p className="text-lg leading-relaxed whitespace-pre-line pb-4">
        مرسوم رقم / {financialLaw.decree.number} /<br />
        {financialLaw.decree.authority}
        <br />
        {financialLaw.decree.basis}
      </p>

      {financialLaw.articles.map((article) => (
        <section
          key={article.number}
          className="mb-10 border-b border-gray-300 pb-6"
        >
          <article className="mb-4 pr-4 border-r-4 border-teal-600">
            <h3 className="text-xl font-semibold mb-1">
              {article.title} — المادة {article.number}
            </h3>
            <p className="text-lg leading-relaxed">{article.text}</p>
          </article>
        </section>
      ))}

      {financialLaw.sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className="mb-10 border-b border-gray-300 pb-6 space-y-4"
        >
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>

          {section.subsections?.map((subsection, subsectionIndex) => (
            <div key={subsectionIndex} className="mb-6">
              <h3 className="text-xl font-semibold mb-3 ">
                {subsection.title}
              </h3>
              {subsection.articles?.map((article) => (
                <article
                  key={article.number}
                  className="mb-3 pr-6 border-r-4 border-teal-600"
                >
                  <h4 className="text-lg font-semibold mb-1">
                    {article.title} — المادة {article.number}
                  </h4>
                  <p className="text-base leading-relaxed">{article.text}</p>
                </article>
              ))}
            </div>
          ))}

          {section.articles?.map((article) => (
            <article
              key={article.number}
              className="mb-3 pr-6 border-r-4 border-teal-600"
            >
              <h4 className="text-lg font-semibold mb-1">
                {article.title} — المادة {article.number}
              </h4>
              <p className="text-base leading-relaxed">{article.text}</p>
            </article>
          ))}
        </section>
      ))}
    </div>
  );
};

export default FinancialLaw;
