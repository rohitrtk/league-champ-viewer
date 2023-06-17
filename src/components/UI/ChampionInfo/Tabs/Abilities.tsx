import { Typography, Avatar } from "@material-tailwind/react";
import { useSelector } from "react-redux";

import { RootState } from "./../../../../store";
import { ChampionAbility } from "../../../../types";

const Abilities = () => {
  const championData = useSelector((state: RootState) => state.champion.data);

  if (!championData) return <></>;

  const { passive, q, w, e, r } = championData.abilities;
  const abilities: [string, ChampionAbility][] = [
    ["Passive", passive],
    ["Q", q],
    ["W", w],
    ["E", e],
    ["R", r]
  ];

  return (
    <div className="flex flex-col overflow-y-scroll h-[500px] justify-start items-center px-5 mx-2 gap-2">
      {abilities.map(([skill, { name, icon, description }], i) => (
        <div key={i} className="grid grid-cols-3 gap-3">
          <Avatar src={icon} variant="square" size="lg" />
          <div className="flex flex-col col-span-2">
            <Typography
              variant="h4"
              className="font-beaufort-light text-league-primary">
              {skill} - {name}
            </Typography>
            <Typography
              variant="paragraph"
              className="font-beaufort text-league-primary">
              {description}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Abilities;
