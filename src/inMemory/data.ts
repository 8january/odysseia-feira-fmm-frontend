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
        description: 'Na Grécia Antiga, as principais cidades-estado foram?',
        answers: [
            { id: 1, description: 'Babilônia e Atenas.', correct: false },
            { id: 2, description: 'Esparta e Roma.', correct: false },
            { id: 3, description: 'Babilônia e Esparta.', correct: false },
            { id: 4, description: 'Atenas e Esparta.', correct: true }
        ],
        correctAnswer: 4
    },
    {
        description: 'A história da Grécia antiga está dividida em 4 períodos que se estende do século XX ao século IV a.C.. São eles:',
        answers: [
            { id: 1, description: 'pré-homérico, homérico, arcaico e clássico.', correct: true },
            { id: 2, description: 'greco-romano, dórico, homérico, clássico.', correct: false },
            { id: 3, description: 'dórico, ateniense, clássico e helenístico.', correct: false },
            { id: 4, description: 'helenístico, homérico, ateniense e clássico.', correct: false }
        ],
        correctAnswer: 1
    },
    {
        description: 'A Guerra do Peloponeso foi uma guerra civil que ocorreu na Grécia Antiga entre 431 e 404 a.C. Esse conflito militar durou 27 anos e terminou com a vitória de:',
        answers: [
            { id: 1, description: 'Creta', correct: false },
            { id: 2, description: 'Esparta', correct: true },
            { id: 3, description: 'Tebas', correct: false },
            { id: 4, description: 'Atenas', correct: false }
        ],
        correctAnswer: 2
    },
    {
        description: 'Preencha a lacuna: A __________ foi um regime político criado e adotado em Atenas, no período da Grécia Antiga.',
        answers: [
            { id: 1, description: 'Ática', correct: false },
            { id: 2, description: 'Democracia', correct: true },
            { id: 3, description: 'Ditadura', correct: false },
            { id: 4, description: 'Monarquia', correct: false }
        ],
        correctAnswer: 2
    },
    {
        description: '(UEMT) O enfraquecimento das cidades gregas, após a Guerra do Peloponeso (431-404 a. C.), possibilitou a conquista da Grécia pelos:',
        answers: [
            { id: 1, description: 'Bizantinos.', correct: false },
            { id: 2, description: 'Assírios.', correct: false },
            { id: 3, description: 'Hititas.', correct: false },
            { id: 4, description: 'Macedônios.', correct: true }
        ],
        correctAnswer: 4
    }
];
