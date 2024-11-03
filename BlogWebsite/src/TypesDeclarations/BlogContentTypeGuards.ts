import { BlogStructure } from "./BlogContentTypes";

export function isTypeBlog(obj: any): obj is BlogStructure {
  return obj && obj.type === "Blog";
}
