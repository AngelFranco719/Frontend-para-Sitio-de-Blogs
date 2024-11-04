import {
  CustomText,
  textElement,
} from "../../../../TypesDeclarations/BlogContentTypes";

export const initialValue: textElement = {
  type: "text",
  align: "center",
  children: [
    {
      type: "CustomText",
      bold: false,
      fontColor: "#343434",
      fontSize: 15,
      italic: false,
      text: "Ingresa el texto aquí...",
      underline: false,
    },
  ],
};

export const initialCustomText: CustomText = {
  type: "CustomText",
  bold: false,
  fontColor: "#343434",
  fontSize: 15,
  italic: false,
  text: "Ingresa el texto aquí...",
  underline: false,
};
