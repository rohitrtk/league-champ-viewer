import { useRef, useEffect, useState } from "react";
import { Input, Menu, List, ListItem } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS, faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  const names = [
    "Nidalee",
    "Ahri",
    "Darius",
    "Evelynn",
    "Veigar",
    "Lee Sin"
  ].sort();

  const [focus, setFocus] = useState(false);
  const [matches, setMatches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;

    if (!input) {
      return;
    }

    input.addEventListener("keyup", () => {
      const _matches: string[] = [];

      const regex = new RegExp(`^\\D*?(${input.value.toLowerCase()})\\D*?$`);
      for (let n of names) {
        if (input.value != "" && n.toLowerCase().match(regex)) {
          _matches.push(n);
        }
      }

      setMatches([..._matches]);
    });

    //input.addEventListener("focusin", () => setFocus(true));
  }, []);

  // useEffect(() => {
  //   console.log(matches);
  // }, [matches]);

  return (
    <form
      tabIndex={0}
      className="flex flex-col bg-league-dark w-full"
      onFocus={() => setFocus(true)}
      onBlur={() => {
        //console.log("focus lost");
        //setFocus(false);
      }}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
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
          <div className="absolute w-full border border-league-primary rounded-b-lg bg-league-dark">
            <List>
              {matches.map((champ, i) => (
                <ListItem
                  className="rounded-none"
                  key={i}
                  onClick={(e) => {
                    console.log(champ);
                    inputRef.current!.value = champ;
                    setFocus(false);
                  }}>
                  {champ}
                </ListItem>
              ))}
            </List>
          </div>
        ) : (
          <></>
        )}
      </div>
    </form>
  );
};

export default Searchbar;
