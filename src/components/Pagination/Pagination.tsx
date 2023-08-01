import ArrowIcon from "@/assets/arrow.svg";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
  PaginationItemPrevNextProps,
  PaginationItemProps,
  PaginationProps,
  getPagesArray,
} from ".";

export default function Pagination({
  page = 0,
  setPage,
  totalPages = 0,
  isLoading,
}: PaginationProps) {
  const isMobile = useIsMobile();
  const pagesArray = getPagesArray(page, totalPages, isMobile, isLoading);

  return (
    <div className="flex max-w-fit rounded-lg border-2 border-gray/300">
      <PaginationItemPrevNext
        variant="prev"
        setPage={setPage}
        page={page}
        totalPages={totalPages}
      />

      {pagesArray.map((item, index) => {
        return (
          <PaginationItem
            key={index}
            isActive={page + 1 === item}
            setPage={setPage}
          >
            {item}
          </PaginationItem>
        );
      })}

      <PaginationItemPrevNext
        variant="next"
        setPage={setPage}
        page={page}
        totalPages={totalPages}
      />
    </div>
  );
}

function PaginationItemPrevNext({
  variant,
  page = 0,
  setPage,
  totalPages = 0,
}: PaginationItemPrevNextProps) {
  const isPrev = variant === "prev";
  const isNext = variant === "next";

  function handleClick() {
    if (isPrev && page > 0) {
      setPage?.((prev) => prev - 1);
    }

    if (isNext && page < totalPages) {
      setPage?.((prev) => prev + 1);
    }
  }

  return (
    <div
      className="flex cursor-pointer items-center text-blue/200"
      onClick={handleClick}
    >
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

function PaginationItem({ children, isActive, setPage }: PaginationItemProps) {
  return (
    <span
      onClick={() => setPage?.(Number(children) - 1)}
      className={`
      h-full cursor-pointer border-l-[1px] border-r-[1px] border-gray/300 p-2 px-4
      ${isActive ? "bg-gray/300 text-blue/600" : "text-blue/200"}
    `}
    >
      {children}
    </span>
  );
}
