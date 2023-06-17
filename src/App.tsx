import { useState, useEffect } from "react";

import Searchbar from "./components/UI/Searchbar";
import ChampionInfo from "./components/UI/ChampionInfo";
import ModelViewer from "./components/Model/ModelViewer";

import { ChampionPreview } from "./types";
import Loading from "./components/UI/Loading";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Typography } from "@material-tailwind/react";

const App = () => {
  const [champions, setChampions] = useState<ChampionPreview[]>([]);

  useEffect(() => {
    const getChampions = async () => {
      const res = await fetch("/.netlify/functions/getChampions");
      const data = await res.json();

      setChampions([...data]);
    };

    getChampions();
  }, []);

  const championData = useSelector((state: RootState) => state.champion.data);

  return (
    <div className="h-screen w-screen bg-league-dark text-league-primary relative overflow-hidden">
      {champions.length === 0 ? (
        <div className="w-full h-full flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col justify-start items-center w-full h-full">
          <div className="p-5 z-50 bg-league-dark w-1/2 flex justify-center items-center">
            <Searchbar champions={champions} />
          </div>

          <div className="relative w-full h-full">
            {!championData ? (
              <div className="fixed m-auto inset-0 text-center flex justify-center items-center">
                <Typography variant="h1" className="font-beaufort-medium">
                  Select a Champion
                </Typography>
              </div>
            ) : (
              <>
                <ModelViewer
                  input={`https://xguaxpxeqluszwgybekb.supabase.co/storage/v1/object/public/lcv/${championData.name}/model.glb`}
                />

                <div className="absolute inset-0">
                  <div className="pt-5 w-1/2">
                    <ChampionInfo />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
