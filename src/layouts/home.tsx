import HeroGrid from "@/components/Hero/HeroGrid/HeroGrid";
import LoggedBaseLayout from "@/components/LoggedBaseLayout";

export default function HomeDashBoardLayout() {
  return (
    <LoggedBaseLayout>
      <HeroGrid
        heroes={[
          {
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
            name: "Batman",
            imageUrl: "https://picsum.photos/200/300",
          },
          {
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
            name: "Batman",
            imageUrl: "https://picsum.photos/200/300",
          },
          {
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
            name: "Batman",
            imageUrl: "https://picsum.photos/200/300",
          },
          {
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
            name: "Batman",
            imageUrl: "https://picsum.photos/200/300",
          },
          {
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
            name: "Batman",
            imageUrl: "https://picsum.photos/200/300",
          },
        ]}
      />
    </LoggedBaseLayout>
  );
}
