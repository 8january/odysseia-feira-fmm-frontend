/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useRef } from 'react'
import { useTimer } from 'react-timer-hook'
import { TimerSettings } from 'react-timer-hook'

import { questions } from './inMemory/data'

import './App.css'

function App() {
  const time = new Date()
  time.setSeconds(time.getSeconds() + (25 * 60) - 1)

  const timer: TimerSettings = {
    autoStart: false,
    expiryTimestamp: time,
    onExpire: () => { console.log('expired!') }
  };

  const [step, setStep] = useState(0)
  const [q, setQ] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nameRef = useRef<any>('')
  const correctAnswersRef = useRef<number>(0)

  const { seconds, minutes, start } = useTimer(timer)

  console.log(seconds, minutes)

  const user = () => {

    return (<>
      <div className='user'>
        <h2> Informe seu nome para começar! </h2>
        <input type='text' max={100} ref={nameRef} />
        <button onClick={() => {
          setStep(1)
          console.log(nameRef.current.value)
        }}> Próximo </button>
      </div>
    </>)
  }

  const init = () => {
    return (<>
      <h2>Vamos testar seus conhecimentos em história!</h2>
      <button onClick={() => {
        setStep(2)
        start()
      }}> Começar </button>
    </>)
  }

  const info = () => {
    return (<>
      <p id='timer'>{minutes}:{seconds < 10 ? "0" : ""}{seconds}</p>
      <div id='info'><p>Serão 5 questão na atividade valendo  <strong> 15 pontos cada questão acertada! </strong>
        Quando acumular o <strong>máximo de pontos</strong> poderá receber uma lembrancinha exclusiva para os ganhadores.</p>
        <button onClick={() => { setStep(3) }} id='iniciar'>Iniciar</button>
      </div>
    </>)
  }

  const question = () => {


    return (<>
      <div className='question-container'>
        <div className='question-image'>
          <img src={`/src/assets/il-${q % 3 + 1}.svg`} alt='question illustration' id='rs'/>
          <img src={`/src/assets/il-${q % 3 + 1}-mb.svg`} alt='question illustration' id='mb'/>
        </div>
        <div className='question-content'>
          <h3> Questão {q + 1} </h3>
          <p>{questions[q]?.description}</p>
          <div className='answers'>
            <button onClick={() => {
              // Check if answer is correct
              if (questions[q]?.answers[0]?.correct) {
                correctAnswersRef.current += 1
              }
              setQ(q + 1)
            }}>{questions[q]?.answers[0]?.description}</button>
            <button onClick={() => {
              // Check if answer is correct
              if (questions[q]?.answers[1]?.correct) {
                correctAnswersRef.current += 1
              }
              setQ(q + 1)
            }}>{questions[q].answers[1].description}</button>
            <button onClick={() => {
              // Check if answer is correct
              if (questions[q].answers[2].correct) {
                correctAnswersRef.current += 1
              }
              setQ(q + 1)
            }}>{questions[q].answers[2].description}</button>
            <button onClick={() => {
              // Check if answer is correct
              if (questions[q].answers[3].correct) {
                correctAnswersRef.current += 1
              }
              setQ(q + 1)
            }}>{questions[q].answers[3].description}</button>
          </div>
        </div>
      </div>

    </>)
  }

  const steps = [user, init, info, question]

  return (
    <>
      <div className='app'>
        {steps[step]()}
      </div>
    </>
  )
}

export default App