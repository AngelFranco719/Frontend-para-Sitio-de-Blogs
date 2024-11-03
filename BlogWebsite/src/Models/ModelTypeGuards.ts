import { Blog } from "./BlogModel";
import { Perfil } from "./PerfilModel";

export function isBlog(obj: any): obj is Blog {
  return obj && obj.id_Blog;
}

export function isPerfil(obj: any): obj is Perfil {
  return obj && obj.id_Perfil;
}
