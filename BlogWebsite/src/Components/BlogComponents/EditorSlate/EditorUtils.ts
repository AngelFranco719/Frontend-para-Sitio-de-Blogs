import { ReactEditor } from "slate-react";
import { Node, Editor, NodeEntry, Transforms } from "slate";
import { textElement } from "../../../TypesDeclarations/BlogContentTypes";

/// Evento onChange para administrar el editor.
export const onChangeEditor = () => {
  console.log("Changed");
};

/// Función para obtener un nodo seleccionado según su align
const getNodes = (align: String, editor: ReactEditor): NodeEntry[] => {
  if (editor.selection) {
    const nodos = Editor.nodes(editor, {
      match: (n) => (n as textElement).align === align,
      at: editor.selection,
    });
    const selectedNodes = Array.from(nodos);
    return selectedNodes;
  }
  return [];
};

/// Función Manejadora de Eventos para los botones de Formato.
export const onClickHandle = (option: String, editor: ReactEditor) => {
  const marks = editor.getMarks();
  switch (option) {
    case "bold":
      if (!marks?.bold) editor.addMark("bold", true);
      else editor.addMark("bold", false);
      break;
    case "italic":
      if (!marks?.italic) editor.addMark("italic", true);
      else editor.addMark("italic", false);
      break;
    case "center":
      const [nodoSeleccionado] = getNodes(option, editor);
      if (nodoSeleccionado != undefined) {
        const nodo: Node = nodoSeleccionado[0];
        if ((nodo as textElement).align != "center") {
          Transforms.setNodes(editor, {
            align: "center",
          });
        } else {
          Transforms.setNodes(editor, {
            align: "left",
          });
        }
      } else {
        Transforms.setNodes(editor, {
          align: "center",
        });
      }
  }
};
