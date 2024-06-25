/* eslint-disable @typescript-eslint/no-unused-vars */

import { TfiAlarmClock } from "react-icons/tfi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


import { useState, useRef } from 'react'
import { NavLink } from "react-router-dom";

import { useTimer, useStopwatch } from 'react-timer-hook'
import { TimerSettings } from 'react-timer-hook'

import { questions } from './inMemory/data'

import axios from 'axios';

import './App.css'



function App() {
  const time = new Date()
  time.setSeconds(time.getSeconds() + (25 * 60))

  const timer: TimerSettings = {
    autoStart: false,
    expiryTimestamp: time,
    onExpire: () => { console.log('expired!') }
  };

  const [step, setStep] = useState(0)
  const [q, setQ] = useState(0)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nameRef = useRef<any>('')

  const [correct, setCorrect] = useState(0)
  const { seconds: timerSeconds, minutes: timerMinutes, start: timerStart, pause: timerPause } = useTimer(timer)
  const { totalSeconds, seconds: watchSeconds, minutes: watchMinutes, start: watchStart, pause: watchPause } = useStopwatch({ autoStart: false })

  console.log(timerSeconds, timerMinutes)

  const sendData = async () => {
    const user_data = {
      name: nameRef?.current?.value,
      correctAnswers: correct,
      time: totalSeconds,
    };

    try {

      const response = await axios.get("https://5000-idx-odysseia-feira-fmm-1719166986551.cluster-vpxjqdstfzgs6qeiaf7rdlsqrc.cloudworkstations.dev/", {
        method: 'get',
        withCredentials: true
      })
      
      console.log(response.data)
      const { data } = await axios.post("https://5000-idx-odysseia-feira-fmm-1719166986551.cluster-vpxjqdstfzgs6qeiaf7rdlsqrc.cloudworkstations.dev/user", user_data, {
        method: 'POST',
        withCredentials: true
      })
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const user = () => {

    return (<>
      <div className='user'>
        <h2> Informe seu nome para começar! </h2>
        <input type='text' max={100} ref={nameRef} />
        <button onClick={() => {
          setStep(1)
          console.log(nameRef.current.value)
        }}> Próximo <MdOutlineKeyboardArrowRight /> </button>
      </div>
    </>)
  }

  const init = () => {
    return (<>
      <h2>Vamos testar seus conhecimentos em história!</h2>
      <button onClick={() => {
        setStep(2)
        timerStart()
        watchStart()
      }}> Começar </button>
    </>)
  }

  const info = () => {
    return (<>
      <p id='timer'><TfiAlarmClock />{timerMinutes}:{timerSeconds < 10 ? "0" : ""}{timerSeconds}</p>
      <div id='info'><p>Serão 5 questão na atividade valendo  <strong> 15 pontos cada questão acertada! </strong>
        Quando acumular o <strong>máximo de pontos</strong> poderá receber uma lembrancinha exclusiva para os ganhadores.</p>
        <button onClick={() => { setStep(3) }} id='iniciar'>Iniciar <MdOutlineKeyboardArrowRight /> </button>
      </div>
    </>)
  }

  const question = () => {

    if (q == 5) {
      timerPause()
      watchPause()
      setStep(4)
      sendData()
    }

    return (<>
      <div className='question-container'>
        <div className='question-image'>
          <img src={`/il-${q % 3 + 1}.svg`} alt='question illustration' id='rs' />
          <img src={`/il-${q % 3 + 1}-mb.svg`} alt='question illustration' id='mb' />
        </div>
        <div className='question-content'>
          <h3> Questão {q + 1} </h3>
          <p>{questions[q]?.description}</p>
          <div className='answers'>
            <button onClick={() => {
              // Check if answer is correct
              if (questions[q]?.answers[0]?.correct) {
                setCorrect(correct + 1)
              }
              setQ(q + 1)
            }}>{questions[q]?.answers[0]?.description}</button>
            <button onClick={() => {
              // Check if answer is correct
              if (questions[q]?.answers[1]?.correct) {
                setCorrect(correct + 1)
              }
              setQ(q + 1)
            }}>{questions[q]?.answers[1].description}</button>
            <button onClick={() => {
              // Check if answer is correct
              if (questions[q]?.answers[2].correct) {
                setCorrect(correct + 1)
              }
              setQ(q + 1)
            }}>{questions[q]?.answers[2].description}</button>
            <button onClick={() => {
              // Check if answer is correct
              if (questions[q]?.answers[3].correct) {
                setCorrect(correct + 1)
              }
              setQ(q + 1)
            }}>{questions[q]?.answers[3].description}</button>
          </div>
        </div>
      </div>

    </>)
  }

  const result = () => {

    return (<>
      <h1>Parabéns</h1>
      <div id='points'>
        <h2>Pontuação:</h2>
        <p id='points-p'><span id='points-f'>{(correct * 15)}</span>/75 pts.</p>
        <p id='time-p'>Tempo: {watchMinutes < 10 ? "0" : ""}{watchMinutes}:{watchSeconds < 10 ? "0" : ""}{watchSeconds}</p>
        <NavLink to={"/rank"}> Próximo <MdOutlineKeyboardArrowRight /> </NavLink>
      </div>
    </>)
  }

  const steps = [user, init, info, question, result]

  return (
    <>
      <img src='/a-1.svg' id='a-1' />
      <img src='/a-2.svg' id='a-3' />
      <img src='/a-3.svg' id='a-4' />
      <img src='/a-4.svg' id='a-2' />
      <div className={step === 4 ? 'points' : 'app'}>
        {steps[step]()}
      </div>
    </>
  )
}

export default App