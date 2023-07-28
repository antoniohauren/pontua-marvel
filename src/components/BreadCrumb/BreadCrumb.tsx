import { BreadCrumbProps } from ".";

export default function BreadCrumb({ items }: BreadCrumbProps) {
  return (
    <div>
      {items?.map((item, index) => (
        <>
          <span
            key={index}
            className={`${
              index === 0 ? "font-bold text-blue/800" : "text-blue/600"
            }`}
          >
            {item}
          </span>

          {index != items.length - 1 && (
            <span className="mx-1 font-bold text-orange/500">/</span>
          )}
        </>
      ))}
    </div>
  );
}
