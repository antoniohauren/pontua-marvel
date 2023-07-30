import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import LoggedBaseLayout from "@/components/LoggedBaseLayout";
import Tabs from "@/components/Tabs/Tabs";
import { ReactNode } from "react";

type ProfileLayoutProps = {
  name: string;
  description: string;
  imageUrl: string;
  series: string[];
  comics: string[];
  events: string[];
  links: {
    name: string;
    url: string;
  }[];
};

export default function ProfileLayout({
  name,
  links,
  comics,
  events,
  series,
}: ProfileLayoutProps) {
  return (
    <LoggedBaseLayout>
      <BreadCrumb items={["Perfil", name]} />
      <div className="mt-5">
        <Tabs
          items={[
            { label: "Visão Geral", content: <h1>Visão Geral</h1> },
            { label: "Séries", content: <List items={series} /> },
            { label: "Quadrinhos", content: <List items={comics} /> },
            { label: "Eventos", content: <List items={events} /> },
            { label: "Links", content: <LinkList items={links} /> },
          ]}
        />
      </div>
    </LoggedBaseLayout>
  );
}

function LinkList({ items }: { items: { name: string; url: string }[] }) {
  return (
    <ListWrapper>
      {items.map((item, index) => (
        <a href={item.url} target="_blank" className="underline">
          <li className="font-semibold text-blue/200" key={index}>
            {item.name}
          </li>
        </a>
      ))}
    </ListWrapper>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ListWrapper>
      {items.map((item, index) => (
        <li className="font-semibold text-blue/200" key={index}>
          {item}
        </li>
      ))}
    </ListWrapper>
  );
}

function ListWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4">
      <ul className="ml-2 list-disc">{children}</ul>
    </div>
  );
}
