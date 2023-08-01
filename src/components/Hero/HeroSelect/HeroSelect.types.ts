type Hero = {
  id: number;
  imageUrl: string;
  name: string;
  isSelected: boolean;
};

export type HeroSelectProps = {
  placeholder?: string;
  value?: number;
  onSelect?: (value: number) => void;
  heroes: Hero[];
};

export type HeroOptionProps = {
  label: string;
  value: number;
  isSelected?: boolean;
  imageUrl?: string;
  onSelect?: (value: number) => void;
};

export type HeroOptionsProps = {
  options: Hero[];
} & Pick<HeroOptionProps, "onSelect">;
