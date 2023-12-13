import ChevronLeftIcon from "../../../public/icons/ChevronLeft";
import ChevronRightIcon from "../../../public/icons/ChevronRight";
import * as S from "./SideBarToggleButton.styled";

interface SideBarToggleButtonProps {
  onClick: () => void;
  open: boolean;
}

export const SideBarToggleButton = ({
  open,
  onClick,
}: SideBarToggleButtonProps) => {
  return (
    <S.Button onClick={onClick}>
      <S.IconWrapper open={open}>
        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </S.IconWrapper>
    </S.Button>
  );
};
