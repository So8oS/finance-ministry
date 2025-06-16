import React from "react";

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className=" py-16 bg-gray-50 min-h-screen">{children}</div>;
}
