import { useState } from "react";
import { TabItemProps, TabsProps } from ".";

export default function Tabs({ items }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex gap-2 shadow-sm">
        {items?.map(({ label }, index) => (
          <TabItem
            key={index}
            index={index}
            onClick={() => setSelectedTab(index)}
            label={label}
            isActive={selectedTab === index}
          />
        ))}
      </div>

      <div className="p-2">{items?.[selectedTab].content}</div>
    </div>
  );
}

function TabItem({ index, label, isActive, onClick }: TabItemProps) {
  return (
    <div
      className={`cursor-pointer border-b-blue/800 px-1 py-2 ${
        isActive ? "border-b-[3px]" : "border-b-0"
      }`}
      onClick={() => onClick(index)}
    >
      <p
        className={`${
          isActive ? "font-semibold text-blue/800" : "text-gray/500"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
