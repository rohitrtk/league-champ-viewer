import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./../../../store";

import ChampionInfoHeader from "./Header";
import ChampionInfoDescription from "./Tabs/Description";
import ChampionInfoAbilities from "./Tabs/Abilities";
import ChampionInfoControls from "./Tabs/Controls";

const ChampionInfo = () => {
  const dispatch = useDispatch();

  const championData = useSelector((state: RootState) => state.champion.data);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <ChampionInfoHeader />

      <Tabs className="w-3/4" value="description">
        <TabsHeader
          className="bg-black"
          indicatorProps={{
            className: "bg-league-dark"
          }}>
          {["description", "abilities", "controls"].map((tabName, i) => (
            <Tab
              key={i}
              value={tabName}
              className="text-league-primary font-beaufort-medium">
              {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 }
          }}>
          <TabPanel value="description">
            <ChampionInfoDescription />
          </TabPanel>

          <TabPanel value="abilities">
            <ChampionInfoAbilities />
          </TabPanel>

          <TabPanel value="controls">
            <ChampionInfoControls />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default ChampionInfo;
