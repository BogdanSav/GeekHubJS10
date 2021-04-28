import { useCallback, useState } from 'react';

function useChangeFormat(dispatchFunc) {
  const [value, setValue] = useState(true);
  const onClick = useCallback(() => {
    setValue(!value);
    dispatchFunc(value);
  }, [value]);
  return [value, onClick];
}
export default useChangeFormat;
