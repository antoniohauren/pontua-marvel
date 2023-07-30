import HomeIcon from "@/assets/dashboard.svg";
import ProfileIcon from "@/assets/user.svg";
import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";

export function useApiGetMenuEntries(pathname: string) {
  function queryFn() {
    return new Promise<string[]>((resolve) => {
      setTimeout(() => {
        resolve(["home", "profile"]);
      }, 300);
    });
  }

  const menuItems: {
    label: string;
    icon: ReactNode;
    href: string;
    isSelected?: boolean;
    visible?: boolean;
  }[] = [
    {
      label: "Home",
      icon: <HomeIcon />,
      href: "/",
      visible: true,
    },
    {
      label: "Perfil",
      href: "/profile/1",
      icon: <ProfileIcon />,
    },
    {
      label: "PrivateRouter",
      icon: <ProfileIcon />,
      href: "/private-router",
    },
  ];

  function getMenuItems(items: string[]) {
    let p = pathname.split("/")[1];

    const visibleMenuItems = menuItems.filter((q) => {
      if (items.includes(q.href.split("/")[1]) || q.href === "/") {
        return true;
      }
    });

    for (const loc of visibleMenuItems) {
      const key = loc.href.split("/")[1];

      if (key === p) {
        loc.isSelected = true;
        break;
      }
    }

    return visibleMenuItems;
  }

  return useQuery({
    queryKey: ["menu"],
    queryFn,
    select: (data) => getMenuItems(data),
  });
}
