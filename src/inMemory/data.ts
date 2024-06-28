// type answer = {
//     id: number,
//     description: string,
//     correct: boolean
// }

// type question = {
//     description: string,
//     answers: answer[],
//     correctAnswer: number
// }

// export const questions: question[] = [
//     {
//         description: 'Na Grécia Antiga, as principais cidades-estado foram?',
//         answers: [
//             { id: 1, description: 'Babilônia e Atenas.', correct: false },
//             { id: 2, description: 'Esparta e Roma.', correct: false },
//             { id: 3, description: 'Babilônia e Esparta.', correct: false },
//             { id: 4, description: 'Atenas e Esparta.', correct: true }
//         ],
//         correctAnswer: 4
//     },
//     {
//         description: 'A história da Grécia antiga está dividida em 4 períodos que se estende do século XX ao século IV a.C.. São eles:',
//         answers: [
//             { id: 1, description: 'pré-homérico, homérico, arcaico e clássico.', correct: true },
//             { id: 2, description: 'greco-romano, dórico, homérico, clássico.', correct: false },
//             { id: 3, description: 'dórico, ateniense, clássico e helenístico.', correct: false },
//             { id: 4, description: 'helenístico, homérico, ateniense e clássico.', correct: false }
//         ],
//         correctAnswer: 1
//     },
//     {
//         description: 'A Guerra do Peloponeso foi uma guerra civil que ocorreu na Grécia Antiga entre 431 e 404 a.C. Esse conflito militar durou 27 anos e terminou com a vitória de:',
//         answers: [
//             { id: 1, description: 'Creta', correct: false },
//             { id: 2, description: 'Esparta', correct: true },
//             { id: 3, description: 'Tebas', correct: false },
//             { id: 4, description: 'Atenas', correct: false }
//         ],
//         correctAnswer: 2
//     },
//     {
//         description: 'Preencha a lacuna: A __________ foi um regime político criado e adotado em Atenas, no período da Grécia Antiga.',
//         answers: [
//             { id: 1, description: 'Ática', correct: false },
//             { id: 2, description: 'Democracia', correct: true },
//             { id: 3, description: 'Ditadura', correct: false },
//             { id: 4, description: 'Monarquia', correct: false }
//         ],
//         correctAnswer: 2
//     },
//     {
//         description: '(UEMT) O enfraquecimento das cidades gregas, após a Guerra do Peloponeso (431-404 a. C.), possibilitou a conquista da Grécia pelos:',
//         answers: [
//             { id: 1, description: 'Bizantinos.', correct: false },
//             { id: 2, description: 'Assírios.', correct: false },
//             { id: 3, description: 'Hititas.', correct: false },
//             { id: 4, description: 'Macedônios.', correct: true }
//         ],
//         correctAnswer: 4
//     }
// ];

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

const allQuestions: question[] = [
    // Questões existentes
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
    },
    // Novas questões
    {
        description: 'Quem foi o famoso filósofo grego, considerado o pai da filosofia ocidental?',
        answers: [
            { id: 1, description: 'Platão', correct: false },
            { id: 2, description: 'Aristóteles', correct: false },
            { id: 3, description: 'Sócrates', correct: true },
            { id: 4, description: 'Pitágoras', correct: false }
        ],
        correctAnswer: 3
    },
    {
        description: 'Qual era a principal divindade do panteão grego, considerado o rei dos deuses?',
        answers: [
            { id: 1, description: 'Poseidon', correct: false },
            { id: 2, description: 'Zeus', correct: true },
            { id: 3, description: 'Ares', correct: false },
            { id: 4, description: 'Apolo', correct: false }
        ],
        correctAnswer: 2
    },
    {
        description: 'Qual foi o nome dado ao sistema de escrita utilizado na Grécia Antiga?',
        answers: [
            { id: 1, description: 'Hieróglifos', correct: false },
            { id: 2, description: 'Cuneiforme', correct: false },
            { id: 3, description: 'Alfabeto grego', correct: true },
            { id: 4, description: 'Linear B', correct: false }
        ],
        correctAnswer: 3
    },
    {
        description: 'Quem foi o famoso conquistador macedônio que expandiu seu império até a Índia?',
        answers: [
            { id: 1, description: 'Felipe II', correct: false },
            { id: 2, description: 'Péricles', correct: false },
            { id: 3, description: 'Alexandre, o Grande', correct: true },
            { id: 4, description: 'Leônidas', correct: false }
        ],
        correctAnswer: 3
    },
    {
        description: 'Qual era o nome do oráculo mais famoso da Grécia Antiga?',
        answers: [
            { id: 1, description: 'Oráculo de Delfos', correct: true },
            { id: 2, description: 'Oráculo de Atenas', correct: false },
            { id: 3, description: 'Oráculo de Esparta', correct: false },
            { id: 4, description: 'Oráculo de Olímpia', correct: false }
        ],
        correctAnswer: 1
    },
    // Adicione estas novas questões ao array allQuestions
    {
        description: 'Qual filósofo grego propôs a teoria das Formas ou Ideias?',
        answers: [
            { id: 1, description: 'Aristóteles', correct: false },
            { id: 2, description: 'Sócrates', correct: false },
            { id: 3, description: 'Platão', correct: true },
            { id: 4, description: 'Heráclito', correct: false }
        ],
        correctAnswer: 3
    },
    {
        description: 'Qual tragédia grega narra a história de um rei que mata seu pai e se casa com sua mãe?',
        answers: [
            { id: 1, description: 'Medeia', correct: false },
            { id: 2, description: 'Édipo Rei', correct: true },
            { id: 3, description: 'Antígona', correct: false },
            { id: 4, description: 'Prometeu Acorrentado', correct: false }
        ],
        correctAnswer: 2
    },
    {
        description: 'Qual escola filosófica, fundada por Zenão de Cítio, pregava a indiferença às emoções?',
        answers: [
            { id: 1, description: 'Epicurismo', correct: false },
            { id: 2, description: 'Cinismo', correct: false },
            { id: 3, description: 'Estoicismo', correct: true },
            { id: 4, description: 'Ceticismo', correct: false }
        ],
        correctAnswer: 3
    },
    {
        description: 'Que importante batalha naval, em 480 a.C., resultou na vitória grega sobre os persas?',
        answers: [
            { id: 1, description: 'Batalha de Maratona', correct: false },
            { id: 2, description: 'Batalha de Plateias', correct: false },
            { id: 3, description: 'Batalha de Salamina', correct: true },
            { id: 4, description: 'Batalha de Termópilas', correct: false }
        ],
        correctAnswer: 3
    },
    {
        description: 'Qual o nome do sistema político espartano que dividia o poder entre dois reis?',
        answers: [
            { id: 1, description: 'Oligarquia', correct: false },
            { id: 2, description: 'Diarquia', correct: true },
            { id: 3, description: 'Tirania', correct: false },
            { id: 4, description: 'Teocracia', correct: false }
        ],
        correctAnswer: 2
    },
    {
        description: 'Qual filósofo pré-socrático propôs que o princípio fundamental (arché) de todas as coisas era o "ápeiron" (o ilimitado)?',
        answers: [
            { id: 1, description: 'Anaximandro', correct: true },
            { id: 2, description: 'Tales de Mileto', correct: false },
            { id: 3, description: 'Anaxímenes', correct: false },
            { id: 4, description: 'Empédocles', correct: false }
        ],
        correctAnswer: 1
    },
    {
        description: 'Que importante reforma política, implementada por Clístenes em 508 a.C., é considerada fundamental para o desenvolvimento da democracia ateniense?',
        answers: [
            { id: 1, description: 'Criação do Areópago', correct: false },
            { id: 2, description: 'Instituição do ostracismo', correct: false },
            { id: 3, description: 'Reforma tribal e criação dos demos', correct: true },
            { id: 4, description: 'Estabelecimento da Bulé', correct: false }
        ],
        correctAnswer: 3
    },
    {
        description: 'Qual escola filosófica helenística, fundada por Pirro de Élis, questionava a possibilidade do conhecimento verdadeiro?',
        answers: [
            { id: 1, description: 'Estoicismo', correct: false },
            { id: 2, description: 'Epicurismo', correct: false },
            { id: 3, description: 'Cinismo', correct: false },
            { id: 4, description: 'Ceticismo', correct: true }
        ],
        correctAnswer: 4
    },
    {
        description: 'Que conceito na filosofia aristotélica se refere à realização plena da natureza essencial ou do propósito de algo?',
        answers: [
            { id: 1, description: 'Mimesis', correct: false },
            { id: 2, description: 'Entelequia', correct: true },
            { id: 3, description: 'Catarse', correct: false },
            { id: 4, description: 'Eudaimonia', correct: false }
        ],
        correctAnswer: 2
    },
    {
        description: 'Qual evento histórico marca tradicionalmente o fim do período clássico e o início do período helenístico na Grécia Antiga?',
        answers: [
            { id: 1, description: 'A morte de Alexandre, o Grande', correct: true },
            { id: 2, description: 'A Batalha de Queroneia', correct: false },
            { id: 3, description: 'O fim da Guerra do Peloponeso', correct: false },
            { id: 4, description: 'A fundação da Biblioteca de Alexandria', correct: false }
        ],
        correctAnswer: 1
    },
    {
        description: 'Quem era considerado o rei dos deuses na mitologia grega?',
        answers: [
            { id: 1, description: 'Poseidon', correct: false },
            { id: 2, description: 'Hades', correct: false },
            { id: 3, description: 'Zeus', correct: true },
            { id: 4, description: 'Ares', correct: false }
        ],
        correctAnswer: 3
    },
    {
        description: 'Qual filósofo grego é conhecido como o "pai da dialética" e foi mentor de Platão?',
        answers: [
            { id: 1, description: 'Aristóteles', correct: false },
            { id: 2, description: 'Sócrates', correct: true },
            { id: 3, description: 'Pitágoras', correct: false },
            { id: 4, description: 'Heráclito', correct: false }
        ],
        correctAnswer: 2
    },
    {
        description: 'Que importante batalha, ocorrida em 490 a.C., marcou a vitória ateniense sobre os persas?',
        answers: [
            { id: 1, description: 'Batalha de Salamina', correct: false },
            { id: 2, description: 'Batalha de Plateias', correct: false },
            { id: 3, description: 'Batalha de Maratona', correct: true },
            { id: 4, description: 'Batalha de Termópilas', correct: false }
        ],
        correctAnswer: 3
    },
    {
        description: 'Que famoso matemático e filósofo grego é conhecido pelo teorema que leva seu nome?',
        answers: [
            { id: 1, description: 'Euclides', correct: false },
            { id: 2, description: 'Arquimedes', correct: false },
            { id: 3, description: 'Pitágoras', correct: true },
            { id: 4, description: 'Tales', correct: false }
        ],
        correctAnswer: 3
    },
    {
        description: 'Qual era o nome do conselho de anciãos em Esparta?',
        answers: [
            { id: 1, description: 'Bulé', correct: false },
            { id: 2, description: 'Eclésia', correct: false },
            { id: 3, description: 'Gerúsia', correct: true },
            { id: 4, description: 'Areópago', correct: false }
        ],
        correctAnswer: 3
    },
    {
        description: 'Que festival religioso ateniense celebrava a deusa Atena?',
        answers: [
            { id: 1, description: 'Dionísias', correct: false },
            { id: 2, description: 'Panatenéias', correct: true },
            { id: 3, description: 'Eleusinas', correct: false },
            { id: 4, description: 'Leneias', correct: false }
        ],
        correctAnswer: 2
    },
    {
        description: 'Qual filósofo grego fundou a escola peripatética?',
        answers: [
            { id: 1, description: 'Platão', correct: false },
            { id: 2, description: 'Sócrates', correct: false },
            { id: 3, description: 'Aristóteles', correct: true },
            { id: 4, description: 'Epicuro', correct: false }
        ],
        correctAnswer: 3
    },
    {
        description: 'Que importante reforma de Sólon na Atenas antiga aboliu a escravidão por dívidas?',
        answers: [
            { id: 1, description: 'Seisachtheia', correct: true },
            { id: 2, description: 'Ostracismo', correct: false },
            { id: 3, description: 'Dracma', correct: false },
            { id: 4, description: 'Efebia', correct: false }
        ],
        correctAnswer: 1
    },
    {
        description: 'Qual heroína mitológica grega desafiou o decreto do rei Creonte e enterrou seu irmão?',
        answers: [
            { id: 1, description: 'Electra', correct: false },
            { id: 2, description: 'Ifigênia', correct: false },
            { id: 3, description: 'Antígona', correct: true },
            { id: 4, description: 'Cassandra', correct: false }
        ],
        correctAnswer: 3
    },
    {
        description: 'Quem escreveu a "Ilíada" e a "Odisseia"?',
        answers: [
            { id: 1, description: 'Sófocles', correct: false },
            { id: 2, description: 'Eurípides', correct: false },
            { id: 3, description: 'Homero', correct: true },
            { id: 4, description: 'Hesíodo', correct: false }
        ],
        correctAnswer: 3
    },
    {
        description: 'Qual deus grego era associado ao vinho e às festas?',
        answers: [
            { id: 1, description: 'Apolo', correct: false },
            { id: 2, description: 'Dionísio', correct: true },
            { id: 3, description: 'Hermes', correct: false },
            { id: 4, description: 'Hefesto', correct: false }
        ],
        correctAnswer: 2
    }
];

function shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function shuffleQuestionAndAnswers(question: question): question {
    const shuffledAnswers = shuffleArray(question.answers);
    const newCorrectAnswer = shuffledAnswers.findIndex(answer => answer.correct) + 1;

    return {
        ...question,
        answers: shuffledAnswers.map((answer, index) => ({
            ...answer,
            id: index + 1
        })),
        correctAnswer: newCorrectAnswer
    };
}

export const questions: question[] = shuffleArray(allQuestions)
    .slice(0, 5)
    .map(shuffleQuestionAndAnswers);