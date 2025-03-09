export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  className?: string;
  size?: string;
  onClick?: () => void;
}
