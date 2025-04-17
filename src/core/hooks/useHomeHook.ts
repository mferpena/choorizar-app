import { useState, useEffect } from "react";

const useHomeHook = () => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {}, []);

  return state;
};

export default useHomeHook;
