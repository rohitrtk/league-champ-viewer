import { useEffect, useRef } from "react";
import { Typography } from "@material-tailwind/react";

const Loading = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
      if (!ref.current) {
        return;
      }

      ref.current.innerText = `Loading${".".repeat(i)}`;
      i = (i + 1) % 5;
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Typography
      ref={ref}
      className="text-league-primary font-beaufort-medium"
      variant="lead">
      Loading
    </Typography>
  );
};

export default Loading;
