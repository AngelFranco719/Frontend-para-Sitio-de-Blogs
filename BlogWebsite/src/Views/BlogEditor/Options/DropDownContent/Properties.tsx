import { useEffect, useState } from "react";
import { CustomTextProperties } from "./CreateElements/CustomTextProperties";
import { TargetProperties } from "./CreateElements/TargetProperties";
import { HorizontalContainerProperties } from "./CreateElements/HorizontalContainerProperties";
import { CarousselProperties } from "./CreateElements/CarousselProperties";
import { LeftImageTextProperties } from "./CreateElements/LeftImageTextProperties";

interface propsProperties {
  typeSelected: string;
  selectedContainer: string | undefined;
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
        return (
          <TargetProperties
            setFinished={setFinished}
            selectedContainer={props.selectedContainer}
          />
        );
      case "CustomText":
        return <CustomTextProperties />;
      case "HorizontalContainer":
        return <HorizontalContainerProperties />;
      case "Caroussel":
        return <CarousselProperties></CarousselProperties>;
      case "LeftImageText":
        return <LeftImageTextProperties></LeftImageTextProperties>;
      default:
        return <></>;
    }
  };

  return <>{!finished && getComponentSelected()}</>;
};
