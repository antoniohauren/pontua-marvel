type Hero = {
  id: string;
  imageUrl: string;
  name: string;
  isSelected: boolean;
};

export type HeroSelectProps = {
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  heroes: Hero[];
};

export type HeroOptionProps = {
  label: string;
  value: string;
  isSelected?: boolean;
  imageUrl?: string;
  onSelect?: (value: string) => void;
};

export type HeroOptionsProps = {
  options: Hero[];
} & Pick<HeroOptionProps, "onSelect">;
