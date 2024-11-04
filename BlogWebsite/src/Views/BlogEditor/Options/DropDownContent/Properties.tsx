import { useState } from "react";
import { CustomTextProperties } from "./CustomTextProperties";
import { TargetProperties } from "./TargetProperties";

interface propsProperties {
  typeSelected: string;
}

export const Properties = (props: propsProperties) => {
  const [finished, setFinished] = useState<boolean>(false);
  const getComponentSelected = () => {
    switch (props.typeSelected) {
      case "TargetElement":
        return <TargetProperties setFinished={setFinished} />;
      case "CustomText":
        return <CustomTextProperties />;
      default:
        return <></>;
    }
  };

  return <>{!finished && getComponentSelected()}</>;
};
