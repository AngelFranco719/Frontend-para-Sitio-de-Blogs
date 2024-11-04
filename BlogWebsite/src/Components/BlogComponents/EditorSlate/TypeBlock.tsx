import { ReactEditor, RenderElementProps } from "slate-react";
import { textElement } from "../../../TypesDeclarations/BlogContentTypes";

interface propsBlock {
  renderElement: RenderElementProps;
  editor: ReactEditor;
}

export const TypeBlock = (props: propsBlock) => {
  /// Establecer estilos a cada componente.
  const setStyleElement = () => {
    const type = props.renderElement.element.type;
    switch (type) {
      case "text":
        return setStyleFromText();
      case "target":
        return setStyleFromTarget();
      case "LeftImageText":
        return setStyleFromLeftImageText();
    }
  };

  /// Establecer estilo al tipo: Text.
  const setStyleFromText = () => {
    const elemento = props.renderElement.element as textElement;
    const align = elemento.align;
    switch (align) {
      case "center":
        return (
          <>
            <div className="textEditor" style={{ textAlign: elemento.align }}>
              {props.renderElement.children}
            </div>
          </>
        );
      default:
        return (
          <div className="textEditor" style={{ textAlign: "left" }}>
            {props.renderElement.children}
          </div>
        );
    }
  };

  const setStyleFromTarget = () => {
    return (
      <>
        <div>{props.renderElement.children}</div>
      </>
    );
  };

  const setStyleFromLeftImageText = () => {
    return <div style={{ width: "100%" }}>{props.renderElement.children}</div>;
  };

  /// return setStyleElement();
  return <>{setStyleElement()}</>;
};
