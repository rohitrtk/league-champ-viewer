import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Avatar,
  Slider
} from "@material-tailwind/react";

const test: { skill: string; name: string; src: string; desc: string }[] = [
  {
    skill: "Passive",
    name: "Prowl",
    src: "/Nidalee/passive.webp",
    desc: "Moving through brush increases Nidalee's Move Speed by 10% for 2 seconds, increased to 30% toward visible enemy champions within 1400 range. Hitting champions or monsters with Javelin Toss or Bushwhack triggers a Hunt, granting True Sight of them for 4 seconds. During this time, Nidalee gains 10% Move Speed (increased to 30% toward the Hunted target) and her Takedown and Pounce are enhanced against them."
  },
  {
    skill: "Q",
    name: "Javelin Toss",
    src: "/Nidalee/q.webp",
    desc: "In human form, Nidalee throws a spiked javelin at her target that gains damage as it flies."
  },
  {
    skill: "W",
    name: "Bushwack",
    src: "/Nidalee/w.webp",
    desc: "In human form, Nidalee lays a trap for unwary opponents that, when sprung, damages and reveals its target."
  },
  {
    skill: "E",
    name: "Primal Surge",
    src: "/Nidalee/e.webp",
    desc: "In human form, Nidalee channels the spirit of the cougar to heal her allies and imbue them with Attack Speed for a short duration."
  },
  {
    skill: "R",
    name: "Aspect of the Cougar",
    src: "/Nidalee/r.webp",
    desc: "Nidalee transforms into a cougar, gaining new abilities."
  }
];

interface Props {
  setChampRotation: (n: number) => void;
}

const ChampionInfo = ({ setChampRotation }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="text-center">
        <Typography variant="h1" className="font-beaufort-medium">
          Nidalee
        </Typography>
        <Typography variant="h5" className="font-beaufort-medium">
          The Bestial Huntress
        </Typography>
      </div>

      <Tabs className="w-3/4" value="description">
        <TabsHeader
          className="bg-black"
          indicatorProps={{
            className: "bg-league-dark"
          }}>
          <Tab
            value="description"
            className="text-league-primary font-beaufort-medium">
            Description
          </Tab>
          <Tab
            value="abilities"
            className="text-league-primary font-beaufort-medium">
            Abilities
          </Tab>
          <Tab
            value="controls"
            className="text-league-primary font-beaufort-medium">
            Controls
          </Tab>
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 }
          }}>
          <TabPanel value="description">
            <Typography
              className="font-beaufort text-league-primary"
              variant="lead">
              Raised in the deepest jungle, Nidalee is a master tracker who can
              shapeshift into a ferocious cougar at will. Neither wholly woman
              nor beast, she viciously defends her territory from any and all
              trespassers, with carefully placed traps and deft spear throws.
              She cripples her quarry before pouncing on them in feline form—the
              lucky few who survive tell tales of a wild woman with razor-sharp
              instincts, and even sharper claws...
            </Typography>
          </TabPanel>

          <TabPanel value="abilities" className="overflow-y-scroll">
            <div className="flex flex-col overflow-scroll justify-center items-center">
              {test.map(({ skill, name, src, desc }, i) => (
                <div key={i} className="grid grid-cols-3 gap-3">
                  <Avatar src={src} variant="square" size="lg" />
                  <div className="flex flex-col col-span-2">
                    <Typography
                      variant="h4"
                      className="font-beaufort-light text-league-primary">
                      {skill} - {name}
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="font-beaufort text-league-primary">
                      {desc}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel value="controls">
            <div className="grid grid-cols-3 gap-3 justify-center items-center">
              <Typography variant="lead" className="font-beaufort-light">
                Rotation
              </Typography>
              <Slider
                defaultValue={50}
                min={0}
                max={100}
                step={1}
                onChange={(e) => {
                  const value =
                    (((parseInt(e.target.value) - 50) * 3.6) / 180) * Math.PI;
                  setChampRotation(value);
                }}
              />
            </div>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default ChampionInfo;
