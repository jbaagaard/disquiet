import { useState } from "react";
import { Icon, IconType } from "../Icon";
import * as S from "./IconButton.styled";
import ToolTip from "../ToolTip";

interface IconButtonProps {
  icon: IconType;
  onClick: () => void;
  value?: boolean;
  tooltip?: string;
}

export const IconButton = ({
  icon,
  onClick,
  value = false,
  tooltip,
}: IconButtonProps) => {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <S.Button
      onClick={onClick}
      active={value}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
    >
      <S.iconWrapper animateSliders={icon === "animate-sliders"}>
        {tooltip && (
          <ToolTip
            isFocused={isFocused}
            style={{ top: "-20px", left: "-89px" }}
          >
            {tooltip}
          </ToolTip>
        )}
        <Icon icon={icon} />
      </S.iconWrapper>
    </S.Button>
  );
};
