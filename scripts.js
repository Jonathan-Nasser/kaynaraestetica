const carrossel = document.getElementById('carrossel');
const slides = document.querySelectorAll('.slide');
let index = 0; // Índice do slide atual

function mudarSlide(direcao) {
  index += direcao;

  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  carrossel.style.transform = `translateX(-${index * 100}%)`;
}


document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  // Captura os dados dos campos
  const nome = document.querySelector("#nome").value.trim();
  const email = document.querySelector("#email").value.trim();
  const telefone = document.querySelector("#telefone").value.trim();
  const servico = document.querySelector("#servico").value.trim();
  const mensagem = document.querySelector("#mensagem").value.trim();

  // Número do WhatsApp (incluindo DDI e DDD - sem espaços, parênteses ou traços)
  const numero = "5584998334395"; // Substitua pelo número real

  // Monta a mensagem
  let texto = `*Novo contato pelo formulário:*\n\n`;
  texto += `*Nome:* ${nome}\n`;
  texto += `*Email:* ${email}\n`;
  texto += `*Telefone:* ${telefone}\n`;
  if (servico) texto += `*Serviço de Interesse:* ${servico}\n`;
  texto += `*Mensagem:*\n${mensagem}`;

  // Codifica para URL
  const mensagemWhatsApp = encodeURIComponent(texto);

  // Redireciona para o WhatsApp
  const url = `https://wa.me/${numero}?text=${mensagemWhatsApp}`;
  window.open(url, "_blank");
});


const conteudos = {
  limpeza: {
    titulo: "Limpeza de Pele",
    subtitulo: "A pele mais saudável e radiante",
    texto: "Prepare-se para uma pele renovada! Nossa limpeza de pele vai além da higiene básica. Removemos cravos, espinhas e células mortas, desobstruindo os poros e controlando a oleosidade. O resultado é uma pele mais saudável, macia e com um brilho natural.",
    valor: "Valor: R$ 100,00"
  },
  epilacao: {
    titulo: "Epilação Facial",
    subtitulo: "Sua pele mais suave e lisa",
    texto: "Realçamos o seu olhar com simetria, leveza e harmonia através de um design personalizado que valoriza o formato natural do seu rosto.",
    valor: "Valor: R$ 40,00"
  },
  design: {
    titulo: "Design de Sobrancelhas",
    subtitulo: "A moldura do seu olhar",
    texto: "Uma sobrancelha bem-feita faz toda a diferença. Com o nosso design de sobrancelhas, valorizamos o seu olhar, corrigindo falhas e harmonizando o formato ao seu rosto. Usamos técnicas de medição e visagismo para garantir um resultado perfeito e natural.",
    valor: "Valor: R$ 30,00"
  },
  microsobrancelha: {
    titulo: "Micropigmentação de Sobrancelha",
    subtitulo: "Sobrancelhas perfeitas todos os dias",
    texto: "Imagine acordar com sobrancelhas impecáveis. A micropigmentação de sobrancelha é a solução para quem busca preencher falhas, corrigir assimetrias ou simplesmente ter sobrancelhas mais definidas. Criamos fios finos e delicados que se misturam aos seus, garantindo um resultado hiper-realista e duradouro.",
    valor: "Valor: R$ 450,00"
  },
  lifiting: {
    titulo: "Lifting de Cílios",
    subtitulo: "Crie o efeito de cílios postiços sem os postiços",
    texto: "Realce a beleza natural dos seus cílios. O lifting de cílios curva e alonga seus fios naturais desde a raiz, proporcionando um efeito de volume e extensão sem a necessidade de cílios postiços. É um procedimento rápido, indolor e com resultado que dura semanas.",
    valor: "Valor: R$ 80,00"
  },
  micropigmentacao: {
    titulo: "Micropigmentação Labial",
    subtitulo: "Dê um toque de cor aos seus lábios",
    texto: "Tenha lábios perfeitos sem precisar de batom! A micropigmentação labial define o contorno da boca e realça a cor, criando um efeito de volume e vitalidade. A técnica corrige assimetrias e deixa seus lábios com um aspecto saudável e naturalmente colorido.",
    valor: "Valor: R$ 550,00"
  },
  coloracao: {
    titulo: "Aplicação de Tintura/Henna",
    subtitulo: "Dê um toque especial ao seu olhar",
    texto: "Para um olhar mais marcante, a aplicação de tintura ou henna é a escolha ideal. Ideal para realçar sobrancelhas e cílios, a tintura cobre fios brancos e claros, enquanto a henna preenche e define o desenho. É uma forma rápida e eficaz de valorizar ainda mais o seu olhar.",
    // valor: "Valor: R$ 50,00"
  },
  // Adicione os demais serviços aqui
};

function abrirPopup(servico) {
  const data = conteudos[servico];
  if (data) {
    document.getElementById("popup-titulo").innerText = data.titulo;
    document.getElementById("popup-subtitulo").innerText = data.subtitulo;
    document.getElementById("popup-texto").innerText = data.texto;
    document.getElementById("popup-valor").innerText = data.valor;
    document.getElementById("popup").style.display = "block";
  }
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("popup").addEventListener("click", fecharPopup);

