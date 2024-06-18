const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector ('.caixa-perguntas');
const caixaAlternativas = document.querySelector ('.caixa-alternativas');
const caixaResultado = document.querySelector ('.caixa-resultedo');
const caixaResultado = document.querySelector ('.texto-resultado');


const perguntas= [
        {
            enunciado: " Qual o nome do famoso compositor brasileiro conhecido como O Poeta da Liva? ",
            alternativas: [ "Cartola",
            "Noel Rosa"
            ]
    },
        {
            enunciado: "Em qual cidade do Brasil se encontra a famosa escola de samba Mangueira",
            alternativas: [ "Rio de Janeiro",
            "São Paulo"
            ]
    },
        {
            enunciado: "Qual instrumento é fundamental para acompanhar uma roda de samba?",
            alternativas: [ "Cavaquinho",
            "Pandeiro"
            ]
    },
        {
            enunciado: "Quem é considerado o mestre responsável por difundir a capoeira pelo Brasil e pelo mundo?",
            alternativas: [ "Mestre Bimba",
            "Mestre Suassuna"
            ]
    },
        {
            enunciado: "Em que período histórico a capoeira foi oficialmente reconhecida como esporte no Brasil?",
            alternativas: [ "Década de 1970",
            "Décacda de 1930"
            ]
    } // fecha objeto de perguntas
]; //fecha lista de perguntas

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();