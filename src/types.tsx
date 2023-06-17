export type ChampionAbility = {
  name: string;
  icon: string;
  description: string;
};

export type ChampionData = {
  id: number;
  name: string;
  avatar: string;
  title: string;
  description: string;
  abilities: {
    passive: ChampionAbility;
    q: ChampionAbility;
    w: ChampionAbility;
    e: ChampionAbility;
    r: ChampionAbility;
  };
  model: string;
};

export type ChampionPreview = Pick<ChampionData, "id" | "name" | "avatar">;
