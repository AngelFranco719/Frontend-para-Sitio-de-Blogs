import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: textElement | targetElement | LeftImageText | CustomText;
    Text: CustomText;
  }
}

export type BlogStructure = {
  type: "Blog";
  content: Array<
    | CustomText
    | targetElement
    | textElement
    | HorizontalContainer
    | Caroussel
    | Banner
    | Header
    | LeftImageText
  >;
  backgroundColor: string;
};

export type Header = {
  type: "Header";
  title: String;
  profile: String;
  description: String;
  profilePhoto: string;
  categorie: string;
  date: String;
};

export type Banner = {
  type: "Banner";
  children: string;
};

export type Caroussel = {
  type: "Caroussel";
  children: string[];
};

export type textElement = {
  type: "text";
  children: CustomText[];
  align: "justify" | "center" | "left";
};

export type targetElement = {
  type: "target";
  children: CustomText[];
  title: string;
  image: string;
  backgroundColor: string;
};

export type CustomText = {
  type: "CustomText";
  text: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  fontSize: number;
  fontColor: string;
};

export type LeftImageText = {
  type: "LeftImageText";
  title: string;
  image: string;
  children: CustomText[];
};

export type HorizontalContainer = {
  type: "HorizontalContainer";
  backgroundColor: string;
  ID_Container: number;
  children: Array<targetElement | textElement>;
};
