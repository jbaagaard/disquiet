import { useContext } from "react";
import ChevronLeftIcon from "../public/icons/ChevronLeft";
import ChevronRightIcon from "../public/icons/ChevronRight";
import { Colors } from "../styles/theme";
import { ThemeContext } from "styled-components";
import VolumeUpIcon from "../public/icons/VolumeUp";
import VolumeDownIcon from "../public/icons/VolumeDown";
import AnimateSlidersIcon from "../public/icons/AnimateSliders";

const icons = {
  "chefron-left": (color: string) => <ChevronLeftIcon color={color} />,
  "chefron-right": (color: string) => <ChevronRightIcon color={color} />,
  "volume-up": (color: string) => <VolumeUpIcon color={color} />,
  "volume-down": (color: string) => <VolumeDownIcon color={color} />,
  "animate-sliders": (color: string) => <AnimateSlidersIcon color={color} />,
};

export type IconType = keyof typeof icons;

const IconComponent = ({ icon, color }: { icon: IconType; color: string }) => {
  return icons[icon](color);
};

export const Icon = ({
  icon,
  color = "content-100",
}: {
  icon: IconType;
  color?: keyof Colors;
}) => {
  const themeContext = useContext(ThemeContext);
  const realColor = themeContext["colors"][color];

  return <IconComponent icon={icon} color={realColor ? realColor : "black"} />;
};
