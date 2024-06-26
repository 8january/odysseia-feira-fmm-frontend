/* eslint-disable @typescript-eslint/no-unused-vars */

import { TfiAlarmClock } from "react-icons/tfi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


import { useState, useRef, useEffect } from 'react'
import { NavLink } from "react-router-dom";

import { useStopwatch } from 'react-timer-hook'

import { questions } from './inMemory/data'

// import { useCookies } from 'react-cookie';

import axios from 'axios';

import './App.css'

function App() {
  // const [cookies, setCookie] = useCookies(['id']);
  // console.log(cookies['id'])

  const time = new Date()
  time.setSeconds(time.getSeconds() + (25 * 60))

  const [step, setStep] = useState(0)
  const [q, setQ] = useState(0)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nameRef = useRef<any>('')
  const [name, setName] = useState('user')

  const [correct, setCorrect] = useState(0)
  const [error, setError] = useState<string>("")
  const [visible, setVisible] = useState<boolean>(false)
  const [isC, setIsC] = useState<string>('')
  const [isC2, setIsC2] = useState<boolean>(false)

  const { totalSeconds, seconds: watchSeconds, minutes: watchMinutes, start: watchStart, pause: watchPause } = useStopwatch({ autoStart: false })
const colors = ["Azul", "Vermelho", "Verde", "Amarelo"]

  async function sendData() {
    const user_data = {
      name: name,
      correct: correct,
      time: totalSeconds,
      minutes: watchMinutes,
      seconds: watchSeconds
    };

    try {
      const { data } = await axios.post("https://odysseia-feira-fmm-backend.onrender.com/user", user_data, {
        method: 'POST',
        withCredentials: true,
      });

      localStorage.setItem('id', (data?.user?._id));
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const handleGameEnd = async () => {
    try {
      await sendData();
      // Aguarda 1 segundo para dar tempo ao servidor de processar os dados
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Busca o ranking atualizado
      const { data: rankData } = await axios.get("https://odysseia-feira-fmm-backend.onrender.com/rank", {
        method: 'GET',
        withCredentials: true
      });

      // Armazena o ranking atualizado no localStorage
      localStorage.setItem('users', JSON.stringify(rankData));

      // Redireciona para a página de ranking
      window.location.href = '/rank';
    } catch (error) {
      console.error("Erro ao finalizar o jogo:", error);
    }
  };

  useEffect(() => {
    if (visible) {
      isC2 ? setIsC('correct') : setIsC('incorrect')
    }
  }, [visible, isC2]);
  
  const showAnswer = () => {
    console.log(colors[questions[q-1]?.correctAnswer - 1])
    console.log(questions[q-1]?.correctAnswer)
    return (<div id='uli'>
    <h1 id="h1-answer">{isC2 ? "Você acertou!" : "Você errou!"}</h1>
    <p id='p-answer'>{isC2 ? "Ulisses está orgulhoso de você!" : `Resposta: alternativa ${colors[questions[q-1]?.correctAnswer - 1]}`}</p>
    <img src={`/ulisses-${isC2 ? 1 : 2}.svg`} className="uli"/>
      <button onClick={() => {
        setVisible(false);
        setIsC2(false);
      }}> PROXIMO</button>
      
    </div>);
  }

  const user = () => {

    return (<>
      <div className='user'>
        <h2> Informe seu nome para começar! </h2>
        <input type='text' max={100} ref={nameRef} required />
        {error && <p>{error}</p>}
        <button onClick={() => {

          if (nameRef?.current?.value != '') {
            setStep(2)
            watchStart()
            setName(nameRef?.current?.value)
            console.log(nameRef.current.value)
          } else setError('Preencha seu nome para continuar')
        }}> Próximo <MdOutlineKeyboardArrowRight /> </button>
      </div>
    </>)
  }

  const init = () => {
    return (<>
      <h2>Vamos testar seus conhecimentos em História e Mitologia da Grécia Antiga!</h2>
      <button onClick={() => {
        setStep(1)
      }}> Começar </button>
    </>)
  }

  const info = () => {
    return (<>
      <p id='timer'><TfiAlarmClock />{watchMinutes}:{watchSeconds < 10 ? "0" : ""}{watchSeconds}</p>
      <div id='info'><p>Serão 5 questão na atividade valendo  <strong> 15 pontos cada questão acertada! </strong>
        Quando acumular o <strong>máximo de pontos</strong> poderá receber uma lembrancinha exclusiva para os ganhadores.</p>
        <button onClick={() => { setStep(3) }} id='iniciar'>Iniciar <MdOutlineKeyboardArrowRight /> </button>
      </div>
    </>)
  }

  const question = () => {

    if (q == 5) {
      watchPause()
      setStep(4)
    }

    return (<>

      <div className='question-container'>
        <p id='timer-2'><TfiAlarmClock />{watchMinutes}:{watchSeconds < 10 ? "0" : ""}{watchSeconds}</p>
        <div className='question-image'>
          <img src={`/il-${q % 3 + 1}.svg`} alt='question illustration' id='rs' />
          <img src={`/il-${q % 3 + 1}-mb.svg`} alt='question illustration' id='mb' />
        </div>
        <div className='question-content'>
          <h3> Questão {q + 1} </h3>
          <p>{questions[q]?.description}</p>
          <div className='answers'>
            <button onClick={() => {
  setQ(prevQ => {
    const newQ = prevQ + 1;
    setVisible(true);
console.log("questao: ", prevQ, "resposta: ", questions[prevQ]?.answers[0]?.correct)
    if (questions[prevQ]?.answers[0]?.correct) {
      setCorrect(correct + 1);
      setIsC2(true);
    }
    return newQ;
  });
}}>{questions[q]?.answers[0]?.description}</button>
            <button onClick={() => {
  setQ(prevQ => {
    const newQ = prevQ + 1;
    setVisible(true);
    console.log("questao: ", prevQ, "resposta: ", questions[prevQ]?.answers[1]?.correct)
                if (questions[prevQ]?.answers[1]?.correct) {
      setCorrect(correct + 1);
      setIsC2(true);
    }
    return newQ;
  });
}}>{questions[q]?.answers[1].description}</button>
            <button onClick={() => {
  setQ(prevQ => {
    const newQ = prevQ + 1;
    setVisible(true);
    console.log("questao: ", prevQ, "resposta: ", questions[prevQ]?.answers[2]?.correct)
                if (questions[prevQ]?.answers[2]?.correct) {
      setCorrect(correct + 1);
      setIsC2(true);
    }
    return newQ;
  });
}}>{questions[q]?.answers[2].description}</button>
            <button onClick={() => {
  setQ(prevQ => {
    const newQ = prevQ + 1;
    setVisible(true);
    console.log("questao: ", prevQ, "resposta: ", questions[prevQ]?.answers[3]?.correct)
                if (questions[prevQ]?.answers[3]?.correct) {
      setCorrect(correct + 1);
      setIsC2(true);
    }
    return newQ;
  });
}}>{questions[q]?.answers[3].description}</button>
          </div>
        </div>
      </div>

    </>)
  }

  const result = () => {
    // sendData()

    return (<>
      <h1>Parabéns</h1>
      <div id='points'>
        <h2>Pontuação:</h2>
        <p id='points-p'><span id='points-f'>{(correct * 15)}</span>/75 pts.</p>
        <p id='time-p'>Tempo: {watchMinutes < 10 ? "0" : ""}{watchMinutes}:{watchSeconds < 10 ? "0" : ""}{watchSeconds}</p>
        <NavLink to={"/rank"} onClick={handleGameEnd}> Finalizar <MdOutlineKeyboardArrowRight /> </NavLink>
      </div>
    </>)
  }

  const steps = [init, user, info, question, result]

  return (
    <>
      <img src='/a-1.svg' id='a-1' />
      <img src='/a-2.svg' id='a-3' />
      <img src='/a-3.svg' id='a-4' />
      {step == 4 ? <img src='/il-x.svg' id='a-2' /> : <img src='/a-4.svg' id='a-2' />}
      <div className={(step === 4 ? 'points' : 'app') + ` ${isC}`}>
        {visible ? showAnswer() : steps[step]()}
      </div>
    </>
  )
}

export default App