import { IconProps, svgIconProps } from "@buildo/bento-design-system";

export function IconInfo(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgIconProps(props)}
    >
      <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z" />
      <path d="M12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12C11 11.4477 11.4477 11 12 11Z" />
      <path d="M11 8C11 7.44772 11.4477 7 12 7H12.01C12.5623 7 13.01 7.44772 13.01 8C13.01 8.55228 12.5623 9 12.01 9H12C11.4477 9 11 8.55228 11 8Z" />
    </svg>
  );
}
