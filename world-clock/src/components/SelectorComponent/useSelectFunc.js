import { useCallback, useState } from 'react';

function useSelectFunc(initState, dispatchFunc) {
  const [timezone, setTimezone] = useState(initState);
  const changeZone = useCallback((e) => {
    setTimezone(e.target.value);
    dispatchFunc(e.target.value);
  }, [timezone]);

  return [timezone, changeZone];
}
export default useSelectFunc;
