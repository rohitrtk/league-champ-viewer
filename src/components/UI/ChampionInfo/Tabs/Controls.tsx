import { Typography, Slider } from "@material-tailwind/react";
import { useDispatch } from "react-redux";

import { RootState } from "./../../../../store";
import { setChampionRotation } from "./../../../../state/championSlice";

const Controls = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-3 gap-3 justify-center items-center">
      <Typography variant="lead" className="font-beaufort-light">
        Rotation
      </Typography>
      <Slider
        className="col-span-2"
        defaultValue={50}
        min={0}
        max={100}
        step={1}
        onChange={(e) => {
          const value =
            (((parseInt(e.target.value) - 50) * 3.6) / 180) * Math.PI;
          dispatch(setChampionRotation(value));
        }}
      />
    </div>
  );
};

export default Controls;
