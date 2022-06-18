import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return [toggle, handleToggle];
};

export default useToggle;
