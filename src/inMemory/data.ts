type answer = {
    id: number,
    description: string,
    correct: boolean
}

type question = {
    description: string,
    answers: answer[],
    correctAnswer: number
}

export const questions: question[] = [
    {
        description: 'Qual é a capital do Brasil?',
        answers: [
            { id: 1, description: 'São Paulo', correct: false },
            { id: 2, description: 'Rio de Janeiro', correct: false },
            { id: 3, description: 'Brasília', correct: true },
            { id: 4, description: 'Belo Horizonte', correct: false }
        ],
        correctAnswer: 3
    },
    {
        description: 'Qual é o maior país do mundo?',
        answers: [
            { id: 1, description: 'Rússia', correct: true },
            { id: 2, description: 'Canadá', correct: false },
            { id: 3, description: 'China', correct: false },
            { id: 4, description: 'Estados Unidos', correct: false }
        ],
        correctAnswer: 1
    },
    {
        description: 'Qual é a montanha mais alta do mundo?',
        answers: [
            { id: 1, description: 'Monte Everest', correct: true },
            { id: 2, description: 'K2', correct: false },
            { id: 3, description: 'Kangchenjunga', correct: false },
            { id: 4, description: 'Lhotse', correct: false }
        ],
        correctAnswer: 1
    },
    {
        description: 'Qual é o rio mais longo do mundo?',
        answers: [
            { id: 1, description: 'Nilo', correct: true },
            { id: 2, description: 'Amazonas', correct: false },
            { id: 3, description: 'Yangtze', correct: false },
            { id: 4, description: 'Mississippi', correct: false }
        ],
        correctAnswer: 1
    },
    {
        description: 'Qual é o maior oceano do mundo?',
        answers: [
            { id: 1, description: 'Pacífico', correct: true },
            { id: 2, description: 'Atlântico', correct: false },
            { id: 3, description: 'Índico', correct: false },
            { id: 4, description: 'Ártico', correct: false }
        ],
        correctAnswer: 1
    }
];
