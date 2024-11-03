import { ReactEditor, RenderLeafProps } from "slate-react";

/// Definir estilos.

interface typeProps {
  leafProps: RenderLeafProps;
  editor: ReactEditor;
}

export const TypeLeaf = (props: typeProps) => {
  const renderLeaf = () => {
    if (props.leafProps.leaf.bold) {
      props.leafProps.children = (
        <>
          <strong>{props.leafProps.children}</strong>
        </>
      );
    }
    if (props.leafProps.leaf.italic) {
      props.leafProps.children = <i>{props.leafProps.children}</i>;
    }
    return (
      <span
        style={{
          fontSize: props.leafProps.leaf.fontSize,
          color: props.leafProps.leaf.fontColor,
        }}
        {...props.leafProps.attributes}
      >
        {props.leafProps.children}
      </span>
    );
  };

  return renderLeaf();
};
