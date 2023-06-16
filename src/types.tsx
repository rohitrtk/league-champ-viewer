export type ChampionAbility = {
  name: string;
  imageUrl: string;
  desc: string;
};

export type ChampionData = {
  name: string;
  title: string;
  desc: string;
  abilities: {
    passive: ChampionAbility;
    q: ChampionAbility;
    w: ChampionAbility;
    e: ChampionAbility;
    r: ChampionAbility;
  };
  gltf: File | string;
};