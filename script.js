const perguntas = [
    {
        pergunta: "Qual é o tempo máximo permitido para um time avançar com a bola no basquete?",
        respostas: [
            "4 segundos",
            "30 segundos",
            "35 segundos"
        ],
        correta: 0
    },
    {
        pergunta: "Quantos pontos vale uma cesta de três pontos no basquete?",
        respostas: [
            "2 pontos",
            "3 pontos",
            "4 pontos"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome do jogador que detém o recorde de pontos marcados em uma única partida da NBA?",
        respostas: [
            "Michael Jordan",
            "Kobe Bryant",
            "Wilt Chamberlain"
        ],
        correta: 2
    },
    {
        pergunta: "Quantos jogadores compõem um time de basquete em quadra durante uma partida?",
        respostas: [
            "4 jogadores",
            "5 jogadores",
            "6 jogadores"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a altura oficial da cesta de basquete na NBA?",
        respostas: [
            "3,05 metros",
            "3,35 metros",
            "3,60 metros"
        ],
        correta: 0
    },
    {
        pergunta: "Em que ano o basquete foi introduzido como esporte olímpico?",
        respostas: [
            "1896",
            "1900",
            "1936"
        ],
        correta: 1
    },
    {
        pergunta: "Qual jogador é conhecido como 'The Greek Freak' na NBA?",
        respostas: [
            "LeBron James",
            "Giannis Antetokounmpo",
            "Kevin Durant"
        ],
        correta: 1
    },
    {
        pergunta: "Quantos quartos compõem uma partida de basquete da NBA?",
        respostas: [
            "2 quartos",
            "3 quartos",
            "4 quartos"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome da bola oficial usada na NBA?",
        respostas: [
            "Spalding",
            "Nike",
            "Adidas"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o recorde de pontos marcados em uma única temporada da NBA?",
        respostas: [
            "2.832 pontos",
            "3.040 pontos",
            "4.029 pontos"
        ],
        correta: 1
    }
];
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new set()
const totalDePerguntas = pergunta.lenght
const motrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
      
    for(let respostas of item.resposta) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta 
        dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.resposta.indexOf(resposta)
        quizItem.querySelector('dl').appendChild(dt)
        dt.querySelector('input').onchange = (Event) => {const estaCorreta = Event.target.value == item.correta 
       corretas.delete(item)
       if(estaCorreta){correta.add(item)
     }
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }   
    quizItem.querySelector('dl dt').remove()
}
    
    
 
    quiz.appendChild(quizItem)
    
}