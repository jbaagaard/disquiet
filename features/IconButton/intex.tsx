import { Icon, IconType } from "../Icon";
import * as S from "./IconButton.styled";

interface IconButtonProps {
  icon: IconType;
  onClick: () => void;
  value?: boolean;
}

export const IconButton = ({
  icon,
  onClick,
  value = false,
}: IconButtonProps) => {
  return (
    <S.Button onClick={onClick} active={value}>
      <S.iconWrapper animateSliders={icon === "animate-sliders"}>
        <Icon icon={icon} />
      </S.iconWrapper>
    </S.Button>
  );
};
