import React from "react";
import Constitutional_Declaration_of_Syria_Display from "@/components/rules/Constitutional_Declaration_of_Syria";
import Financial_Law_Display from "@/components/rules/FinancialLaw";

const ruleComponents: { [key: string]: React.FC } = {
  Constitutional_Declaration_of_Syria:
    Constitutional_Declaration_of_Syria_Display,
  Financial_Law: Financial_Law_Display,
};

export default function Page({ params }: { params: { rule: string } }) {
  const { rule } = params;
  const RuleComponent = ruleComponents[rule];
  return RuleComponent ? <RuleComponent /> : <div>Page {params.rule}</div>;
}
