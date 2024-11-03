import {
  Caroussel,
  BlogStructure,
  CustomText,
  HorizontalContainer,
  targetElement,
  Banner,
  Header,
  LeftImageText,
  textElement,
} from "../../../TypesDeclarations/BlogContentTypes";

export function isBlogStructure(object: any): object is BlogStructure {
  return object && object.type === "Blog";
}

export function isCustomText(object: any): object is CustomText {
  return object && object.type === "text";
}
export function isTarget(object: any): object is targetElement {
  return object && object.type === "target";
}
export function isHorizontalContainer(
  object: any
): object is HorizontalContainer {
  return object && object.type === "HorizontalContainer";
}
export function isCaroussel(object: any): object is Caroussel {
  return object && object.type === "Caroussel";
}

export function isBanner(object: any): object is Banner {
  return object && object.type === "Banner";
}

export function isHeader(object: any): object is Header {
  return object && object.type === "Header";
}

export function isLeftImageText(object: any): object is LeftImageText {
  return object && object.type === "LeftImageText";
}

export function isText(obj: any): obj is textElement {
  return obj && obj.type === "text";
}
