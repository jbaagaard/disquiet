import { ReactNode } from "react";
import * as S from "./ToolTip.styled";

export interface ToolTipProps {
  children: ReactNode;
  isFocused: boolean;
  style?: React.CSSProperties;
}

export default function ToolTip({ children, isFocused, style }: ToolTipProps) {
  return (
    <S.ToolTip focus={isFocused} style={style}>
      {children}
    </S.ToolTip>
  );
}
