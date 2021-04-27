import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';

export default function useClock() {
  const timezone = useSelector((state) => state.timezone);
  const format = useSelector((state) => state.format);
  const [localFormat, setLocalFormat] = useState('HH:mm:ss');
  const [time, setTime] = useState(moment.tz(timezone).format(localFormat));
  const timer = setInterval(() => setTime(moment.tz(timezone).format(localFormat)), 1000);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    format ? setLocalFormat('LTS') : setLocalFormat('HH:mm:ss');
  }, [format]);
  useEffect(() => function clear() {
    clearInterval(timer);
  }, [timer]);

  return time;
}
