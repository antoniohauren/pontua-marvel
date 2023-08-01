import { ReactNode } from "react";

export type PaginationProps = {
  isLoading?: boolean;
} & Pick<PaginationItemProps, "setPage" | "totalPages" | "page">;

export type PaginationItemProps = {
  children: ReactNode;
  isActive?: boolean;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  page?: number;
  totalPages?: number;
};

export type PaginationItemPrevNextProps = { variant: "prev" | "next" } & Pick<
  PaginationItemProps,
  "setPage" | "totalPages" | "page"
>;
