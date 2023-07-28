import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import LoggedBaseLayout from "@/components/LoggedBaseLayout";
import Tabs from "@/components/Tabs/Tabs";

export default function ProfileLayout() {
  return (
    <LoggedBaseLayout>
      <BreadCrumb items={["Perfil", "A-Bomb"]} />
      <div className="mt-5">
        <Tabs
          items={[
            { label: "Visão Geral", content: <h1>Visão Geral</h1> },
            { label: "Teams", content: <h1>Teams</h1> },
            { label: "Powers", content: <h1>Powers</h1> },
            { label: "Species", content: <h1>Species</h1> },
            { label: "Authors", content: <h1>Authors</h1> },
          ]}
        />
      </div>
    </LoggedBaseLayout>
  );
}
