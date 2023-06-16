import { useState } from "react";

import Searchbar from "./components/UI/Searchbar";
import ChampionInfo from "./components/UI/ChampionInfo";
import ModelViewer from "./components/Model/ModelViewer";

import { ChampionData } from "./types";

const App = () => {
  const [champRotation, setChampRotation] = useState(0);

  return (
    <div className="h-screen w-screen bg-league-dark text-league-primary relative">
      <ModelViewer input="Nidalee/model.glb" rotation={champRotation} />

      <div className="absolute inset-0 overflow-y-scroll">
        <div className="sticky top-0 p-5 z-50 bg-league-dark flex justify-center items-center">
          <div className="w-1/2">
            <Searchbar />
          </div>
        </div>
        <div className="pt-5 w-1/2">
          <ChampionInfo setChampRotation={setChampRotation} />
        </div>
      </div>
    </div>
  );
};

export default App;

const nidalee: ChampionData = {
  name: "Nidalee",
  title: "The Bestial Huntress",
  desc: "Raised in the deepest jungle, Nidalee is a master tracker who can shapeshift into a ferocious cougar at will. Neither wholly woman nor beast, she viciously defends her territory from any and all trespassers, with carefully placed traps and deft spear throws. She cripples her quarry before pouncing on them in feline form—the lucky few who survive tell tales of a wild woman with razor-sharp instincts, and even sharper claws...",
  abilities: {
    passive: {
      name: "Prowl",
      imageUrl: "/passive.webp",
      desc: "Moving through brush increases Nidalee's Move Speed by 10% for 2 seconds, increased to 30% toward visible enemy champions within 1400 range. Hitting champions or monsters with Javelin Toss or Bushwhack triggers a Hunt, granting True Sight of them for 4 seconds. During this time, Nidalee gains 10% Move Speed (increased to 30% toward the Hunted target) and her Takedown and Pounce are enhanced against them."
    },
    q: {
      name: "Javelin Toss",
      imageUrl: "/q.webp",
      desc: "In human form, Nidalee throws a spiked javelin at her target that gains damage as it flies."
    },
    w: {
      name: "Bushwack",
      imageUrl: "/w.webp",
      desc: "In human form, Nidalee lays a trap for unwary opponents that, when sprung, damages and reveals its target."
    },
    e: {
      name: "Primal Surge",
      imageUrl: "/e.webp",
      desc: "In human form, Nidalee channels the spirit of the cougar to heal her allies and imbue them with Attack Speed for a short duration."
    },
    r: {
      name: "Aspect of the Cougar",
      imageUrl: "/r.webp",
      desc: "Nidalee transforms into a cougar, gaining new abilities."
    }
  },
  gltf: "nidalee.glb"
};
