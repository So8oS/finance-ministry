import React from "react";
import Constitutional_Declaration_of_Syria_Display from "@/components/rules/Constitutional_Declaration_of_Syria";
import Financial_Law_Display from "@/components/rules/FinancialLaw";
import SyrianPenalCode_Display from "@/components/rules/SyrianPenalCode";
import Social_Insurance_Code_Display from "@/components/rules/Social_Insurance_Code";

const ruleComponents: { [key: string]: React.FC } = {
  Constitutional_Declaration_of_Syria:
    Constitutional_Declaration_of_Syria_Display,
  Financial_Law: Financial_Law_Display,
  Syrian_Penal_Code: SyrianPenalCode_Display,
  Social_Insurance_Code: Social_Insurance_Code_Display,
};

export default function Page({ params }: { params: { rule: string } }) {
  const { rule } = params;
  const RuleComponent = ruleComponents[rule];
  return RuleComponent ? <RuleComponent /> : <div>Page {params.rule}</div>;
}
