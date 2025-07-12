import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import triggerConfetti from './confetti';

function App(){
  const [ time, setTime ] = useState<any>({});

  const getLastAnniversary = () => {
    //verify if we past day 28 of the month
    if(dayjs().date() >= 28){
      return dayjs().date(28).hour(0).minute(0).second(0).format('YYYY-MM-DD HH:mm:ss');
    }
    else{
      return dayjs().date(28).hour(0).minute(0).second(0).subtract(1, 'month').format('YYYY-MM-DD HH:mm:ss');
    }
  };

  function TmrRefresh(){

    let startDate = '2024-09-28 00:00:00';
    let lastAnniversary = getLastAnniversary();
    let remainingTime = dayjs().diff(lastAnniversary);

    let months = dayjs().diff(startDate, 'month');
    let days = Math.floor((remainingTime) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    setTime({
      months,
      days,
      hours,
      minutes,
      seconds
    });
  };

  setInterval(() => {
    TmrRefresh()
  }, 1000);

  useEffect(() => {
    TmrRefresh();
  }, []);

  return (
    <>
      <h1>Vinícius <span style={{ userSelect: 'none', WebkitUserSelect: 'none', cursor: 'pointer', position: 'relative', zIndex: '9999' }} onClick={triggerConfetti}>❤️</span>Ana</h1>
      <p>Estão juntos há exatamente</p>
      <p> {`${time.months} meses, ${time.days} dias, ${time.hours} horas, ${time.minutes} minutos e ${time.seconds} segundos`}</p>
    </>
  )
}
export default App;