import React from "react";
import Constitutional_Declaration_of_Syria_Display from "@/components/rules/Constitutional_Declaration_of_Syria";

export default function Page({ params }: { params: { rule: string } }) {
  const { rule } = params;
  if (rule === "Constitutional_Declaration_of_Syria") {
    return <Constitutional_Declaration_of_Syria_Display />;
  }
  return <div>Page {params.rule}</div>;
}
