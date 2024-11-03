import { ReactEditor } from "slate-react";
import "./Toolbar.css";
import { ToolbarOption } from "./ToolbarOption";

interface toolbarProps {
  editor: ReactEditor | undefined;
}

export const Toolbar = (props: toolbarProps) => {
  return (
    <div id="Div_Toolbar">
      <ToolbarOption editor={props.editor}></ToolbarOption>
    </div>
  );
};
