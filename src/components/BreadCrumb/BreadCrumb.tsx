import { Fragment } from "react";
import { BreadCrumbProps } from ".";

export default function BreadCrumb({ items }: BreadCrumbProps) {
  return (
    <div className="cursor-default">
      {items?.map((item, index) => (
        <Fragment key={index}>
          <span
            className={`text-2xl ${
              index === 0 ? "font-bold text-blue/800" : "text-blue/600"
            }`}
          >
            {item}
          </span>

          {index != items.length - 1 && (
            <span className="mx-1 text-2xl font-bold text-orange/500">/</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
