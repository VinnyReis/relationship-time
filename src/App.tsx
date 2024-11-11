import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

function App(){
  const [ time, setTime ] = useState<any>({});

  function TmrRefresh(){

    let StartDate = '2024-09-28 16:40:25';
    let remainingTime = dayjs(StartDate).diff(dayjs(new Date));

    let days = Math.abs(Math.floor(remainingTime / (1000 * 60 * 60 * 24)));
    let hours = Math.abs(Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let minutes = Math.abs(Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)));
    let seconds = Math.abs(Math.floor((remainingTime % (1000 * 60)) / 1000));

    setTime({
      days,
      hours,
      minutes,
      seconds
    });

    remainingTime -= 1000;
  };

  setInterval(() => {
    TmrRefresh()
  }, 1000);

  useEffect(() => {
    TmrRefresh();
  }, []);

  return (
    <>
      <h1>Vinícius ❤️ Ana</h1>
      <p>Estão juntos há exatamente</p>
      <p> {`${time.days} dias, ${time.hours} horas, ${time.minutes} minutos e ${time.seconds} segundos`}</p>
    </>
  )
}
export default App;