import { ReactNode } from "react";

export type PaginationProps = {};

export type PaginationItemProps = { children: ReactNode; isActive?: boolean };

export type PaginationItemPrevNextProps = { variant: "prev" | "next" };
