import { useRef, useEffect, useState, RefObject } from "react";
import {
  Input,
  Menu,
  List,
  ListItem,
  Avatar,
  Typography
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS, faSearch } from "@fortawesome/free-solid-svg-icons";
import { ChampionData, ChampionPreview } from "../../types";
import { useDispatch } from "react-redux";
import { setChampionData } from "../../state/championSlice";

interface Props {
  champions: ChampionPreview[];
}

const Searchbar = ({ champions }: Props) => {
  const [focus, setFocus] = useState(false);
  const [matches, setMatches] = useState<typeof champions>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;

    if (!input) {
      return;
    }

    input.addEventListener("keyup", () => {
      const _matches: typeof champions = [];

      const regex = new RegExp(`^\\D*?(${input.value.toLowerCase()})\\D*?$`);
      for (let c of champions) {
        if (input.value != "" && c.name.toLowerCase().match(regex)) {
          _matches.push(c);
        }
      }

      setMatches([..._matches]);
    });
  }, []);

  // useEffect(() => {
  //   console.log(matches);
  // }, [matches]);

  return (
    <div
      className="flex flex-col bg-league-dark w-full"
      onFocus={() => setFocus(true)}
      onMouseLeave={() => {
        if (focus && matches.length > 0) setFocus(false);
      }}>
      <Input
        label="Champion Name..."
        className={`border-league-primary focus:border-league-primary p-2 ${
          matches.length > 0 && focus
            ? "rounded-t-lg rounded-b-none"
            : "rounded-lg rounded-b-lg"
        }`}
        inputRef={inputRef}
        labelProps={{
          className:
            "peer-focus:before:!border-league-primary peer-focus:after:!border-league-primary peer-focus:text-white"
        }}
        icon={<FontAwesomeIcon icon={faSearch} />}
      />
      <div className="relative">
        {matches.length > 0 && focus ? (
          <SearchbarList
            matches={matches}
            inputRef={inputRef}
            setFocus={setFocus}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Searchbar;

interface SearchbarListProps {
  matches: ChampionPreview[];
  inputRef: RefObject<HTMLInputElement>;
  setFocus: (b: boolean) => void;
}

const SearchbarList = ({ matches, inputRef, setFocus }: SearchbarListProps) => {
  const dispatch = useDispatch();

  const selectChampion = async ({ name, id }: ChampionPreview) => {
    inputRef.current!.value = name;
    setFocus(false);

    const res = await fetch("/.netlify/functions/getChampion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    const data = (await res.json()) as ChampionData;
    dispatch(setChampionData(data));
  };

  return (
    <div className="absolute w-full border border-league-primary rounded-b-lg bg-league-dark">
      <List>
        {matches.map((champ, i) => (
          <ListItem
            className="rounded-none flex flex-row gap-3"
            key={i}
            onClick={async () => selectChampion(champ)}>
            <Avatar src={champ.avatar} alt={`${champ.name} icon`} size="sm" />
            <Typography
              className="text-league-primary font-beaufort"
              variant="lead">
              {champ.name}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
