import { useEffect, useState } from "react";
import { CustomTextProperties } from "./CreateElements/CustomTextProperties";
import { TargetProperties } from "./CreateElements/TargetProperties";
import { HorizontalContainerProperties } from "./CreateElements/HorizontalContainerProperties";

interface propsProperties {
  typeSelected: string;
}

export const Properties = (props: propsProperties) => {
  const [finished, setFinished] = useState<boolean>(false);
  useEffect(() => {
    if (finished) {
      setFinished(false);
    }
  }, [finished]);
  const getComponentSelected = () => {
    switch (props.typeSelected) {
      case "TargetElement":
        return <TargetProperties setFinished={setFinished} />;
      case "CustomText":
        return <CustomTextProperties />;
      case "HorizontalContainer":
        return <HorizontalContainerProperties />;
      default:
        return <></>;
    }
  };

  return <>{!finished && getComponentSelected()}</>;
};
