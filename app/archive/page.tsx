"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

const archiveCategories = [
  {
    title: "أرشيف القانون العام",
    slug: "general",
  },
  {
    title: "أرشيف القانون الخاص",
    slug: "private",
  },
];

function Archive() {
  return (
    <div className="py-16 bg-gray-50 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-8"></div>
      {archiveCategories.map((category) => (
        <Link href={`/archive/${category.slug}`}>
          <h1 className="text-lg font-semibold text-green-600 hover:text-green-800 transition-colors duration-300">
            {category.title}
          </h1>
        </Link>
      ))}
    </div>
  );
}

export default Archive;
