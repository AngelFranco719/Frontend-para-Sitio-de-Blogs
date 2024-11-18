import { BlogStructure } from "../TypesDeclarations/BlogContentTypes";
import { Perfil } from "./PerfilModel";

export interface Blog {
  id_Blog: number | undefined;
  blo_titulo: string;
  blo_categoria: string;
  blo_fecha: string;
  blo_contenido: BlogStructure;
  id_Perfil: Perfil;
}
