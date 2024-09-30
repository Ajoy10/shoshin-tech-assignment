import { ReactNode } from "react";

type FlexBoxPropTypes = {
  children: ReactNode;
  direction?: "vertical" | "horizontal";
  gap?: number;
  style?: React.CSSProperties;
  className?: string;
};

export default function FlexBox({
  children,
  direction = "horizontal",
  gap = 16,
  style = {},
  className = "",
}: FlexBoxPropTypes) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: direction == "horizontal" ? "row" : "column",
        gap: gap + "px",
        flexWrap: "wrap",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
