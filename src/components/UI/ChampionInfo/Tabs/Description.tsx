import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";

import { RootState } from "./../../../../store";

const Description = () => {
  const championData = useSelector((state: RootState) => state.champion.data);

  return (
    <Typography className="font-beaufort text-league-primary" variant="lead">
      {championData?.description}
    </Typography>
  );
};

export default Description;
