import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import LoggedBaseLayout from "@/components/LoggedBaseLayout";
import Tabs from "@/components/Tabs/Tabs";

type ProfileLayoutProps = {
  name: string;
  description: string;
  imageUrl: string;
  series: string[];
  comics: string[];
  events: string[];
  authors: string[];
};

export default function ProfileLayout({
  name,
  authors,
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
            { label: "Autores", content: <List items={authors} /> },
          ]}
        />
      </div>
    </LoggedBaseLayout>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <div className="mt-4">
      <ul className="ml-2 list-disc">
        {items.map((item, index) => (
          <li className="font-semibold text-blue/200" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
