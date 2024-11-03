import { BlogStructure } from "../TypesDeclarations/BlogContentTypes";
import { Perfil } from "./PerfilModel";

export interface Blog {
  id_Blog: number;
  blo_titulo: string;
  blo_categoria: string;
  blo_fecha: string;
  blo_contenido: BlogStructure;
  ID_Perfil: Perfil;
}
