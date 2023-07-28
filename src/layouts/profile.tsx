import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import LoggedBaseLayout from "@/components/LoggedBaseLayout";

export default function ProfileLayout() {
  return (
    <LoggedBaseLayout>
      <BreadCrumb items={["Perfil", "A-Bomb"]} />
    </LoggedBaseLayout>
  );
}
