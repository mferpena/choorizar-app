import { useState, useEffect } from "react";

const useWorksHook = () => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {}, []);

  return state;
};

export default useWorksHook;
