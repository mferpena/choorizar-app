import { useState, useEffect } from "react";

const useWorkDetailHook = () => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {}, []);

  return state;
};

export default useWorkDetailHook;
