"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

const archiveCategories = [
  {
    title: "نص الإعلان الدستوري لسوريا 2025",
    slug: "Constitutional_Declaration_of_Syria",
  },
];

function Archive() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        الأرشيف
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {archiveCategories.map((category, index) => (
          <div key={index}>
            <Link href={`/archive/general/${category.slug}`}>
              <Card className="h-full text-center  hover:shadow-xl transition-all duration-300 border-t-4 border-t-emerald-500 group">
                <CardContent className="pt-6 flex flex-col justify-center items-center  ">
                  {/* <div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors duration-300"
                    >
                      {category.icon}
                    </div> */}
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  {/* <p className="text-gray-600">{category.description}</p> */}
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Archive;
