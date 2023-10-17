import { FC, ReactNode } from "react";

const navLinkClasses = [
  "cursor-pointer",
  "font-semibold",
  "font-sans",
  "text-black",
  "dark:text-white",
  "hover:text-orange-700",
  "dark:hover:text-orange-600",
] as const;

export interface NavLinkProps {
  label: string;
  size: "text-xl" | "text-4xl";
  icon?: ReactNode;
}

export const NavLink: FC<NavLinkProps> = ({ label, size, icon }) => {
  return <div className="flex gap-2 items-center">
    {icon}
    <h4 className={[...navLinkClasses, size].join(" ")}>{label}</h4>
    </div>;
};
