import { ReactNode } from "react";

export const ScreenBase = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <div className={`min-w-screen flex ${className || ""}`}>{children}</div>;
