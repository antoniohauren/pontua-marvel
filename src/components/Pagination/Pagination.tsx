import ArrowIcon from "@/assets/arrow.svg";
import {
  PaginationItemPrevNextProps,
  PaginationItemProps,
  PaginationProps,
} from ".";

export default function Pagination({}: PaginationProps) {
  return (
    <div className="flex max-w-fit rounded-lg border-2 border-gray/300">
      <PaginationItemPrevNext variant="prev" />
      {[1, 2, 3, 4, 5].map((item) => {
        return <PaginationItem key={item}>{item}</PaginationItem>;
      })}

      <PaginationItemPrevNext variant="next" />
    </div>
  );
}

function PaginationItemPrevNext({ variant }: PaginationItemPrevNextProps) {
  const isPrev = variant === "prev";
  const isNext = variant === "next";

  return (
    <div className="flex cursor-pointer items-center text-blue/200">
      {isPrev && (
        <div className="ml-2 h-6 w-6">
          <ArrowIcon />
        </div>
      )}

      <span
        className={`
      border-gray/300 p-2
      ${isNext ? "border-l-[1px] pl-4" : ""}
      ${isPrev ? "border-r-[1px] pr-4" : ""}
      `}
      >
        {isPrev && "Anterior"}
        {isNext && "Próxima"}
      </span>

      {isNext && (
        <div className="mr-2 h-6 w-6 rotate-180">
          <ArrowIcon />
        </div>
      )}
    </div>
  );
}

function PaginationItem({ children, isActive }: PaginationItemProps) {
  return (
    <span
      className={`
      h-full cursor-pointer border-l-[1px] border-r-[1px] border-gray/300 p-2 px-4
      ${isActive ? "bg-gray/300 text-blue/600" : "text-blue/200"}
    `}
    >
      {children}
    </span>
  );
}
