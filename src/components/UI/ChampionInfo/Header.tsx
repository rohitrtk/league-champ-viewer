import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";

import { RootState } from "./../../../store";

const Header = () => {
  const championData = useSelector((state: RootState) => state.champion.data);

  return (
    <div className="text-center">
      <Typography variant="h1" className="font-beaufort-medium">
        {championData ? championData.name : "Select a Champion"}
      </Typography>
      <Typography variant="h5" className="font-beaufort-medium">
        {championData ? championData.title : "Search above"}
      </Typography>
    </div>
  );
};
export default Header;
