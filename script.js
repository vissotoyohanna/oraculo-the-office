const bancoDeFrases = [
    {
        en: "I'm not superstitious, but I am a little stitious.",
        pt: "Não sou supersticioso, mas sou um pouco 'sticioso'.",
        autor: "Michael Scott",
        imagem: "img/michael.jpg"
    },
    {
        en: "Bears, beets, Battlestar Galactica.",
        pt: "Ursos, beterrabas, Battlestar Galactica.",
        autor: "Jim Halpert",
        imagem: "img/jim.jpg"
    },
    {
        en: "The worst thing about prison was the dementors.",
        pt: "A pior coisa da prisão eram os dementadores.",
        autor: "Prison Mike",
        imagem: "img/michael.jpg" 
    },
    {
        en: "Identity theft is not a joke, Jim! Millions of families suffer every year!",
        pt: "Roubo de identidade não é piada, Jim! Milhões de famílias sofrem todos os anos!",
        autor: "Dwight Schrute",
        imagem: "img/dwight.jpg"
    },
    {
        en: "I feel God in this Chili's tonight.",
        pt: "Sinto a presença de Deus neste Chili's esta noite.",
        autor: "Pam Beesly",
        imagem: "img/pam.jpg"
    },
    {
        en: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
        pt: "Prefiro ser temido ou amado? Fácil. Os dois. Quero que as pessoas tenham medo do quanto me amam.",
        autor: "Michael Scott",
        imagem: "img/michael.jpg"
    },
    {
        en: "Guess what, I have flaws. What are they? Oh, I don't know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car. So sue me.",
        pt: "Adivinha só, eu tenho defeitos. Quais são? Ah, não sei. Eu canto no chuveiro. Às vezes, passo tempo demais fazendo trabalho voluntário. De vez em quando, atropelo alguém com meu carro. Então, me processem.",
        autor: "Michael Scott",
        imagem: "img/michael.jpg"
    },
    {
        en: "Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but it's not like this compulsive need to be liked, like my need to be praised.",
        pt: "Preciso ser querido? Absolutamente não. Gosto de ser querido. Aprecio ser querido. Preciso ser querido, mas não é como essa necessidade compulsiva de ser querido, como a minha necessidade de ser elogiado.",
        autor: "Michael Scott",
        imagem: "img/michael.jpg"
    },
    {
        en: "I am running away from my responsibilities. And it feels good.",
        pt: "Estou fugindo das minhas responsabilidades. E me sinto bem.",
        autor: "Michael Scott",
        imagem: "img/michael.jpg"
    },
    {
        en: "If I don't have some cake soon, I might die.",
        pt: "Se eu não comer um bolo logo, posso morrer.",
        autor: "Stanley Hudson",
        imagem: "img/stanley.jpg"
    },
    {
        en: "My philosophy is basically this, and this is something that I live by, and I always have, and I always will: Don't ever, for any reason, do anything, to anyone, for any reason, ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been, ever, for any reason whatsoever.",
        pt: "Minha filosofia é basicamente esta, e é algo que eu sigo, sempre segui e sempre seguirei. Nunca, por nenhum motivo, faça nada a ninguém, por nenhum motivo, não importa o quê, não importa onde, ou quem, ou com quem você esteja ou... ou para onde você esteja indo, ou de onde você veio, nunca, por nenhum motivo que seja.",
        autor: "Michael Scott",
        imagem: "img/michael.jpg"
    },
    {
        en: "When you're a kid, you assume your parents are soulmates. My kids are gonna be right about that.",
        pt: "Quando você é criança, presume que seus pais são almas gêmeas. Meus filhos vão estar certos sobre isso.",
        autor: "Pam Beesly",
        imagem: "img/pam.jpg"
    },
    {
        en: "I talk a lot, so I've learned to just tune myself out.",
        pt: "Eu falo muito, então aprendi a me desligar.",
        autor: "Kelly Kapoor",
        imagem: "img/kelly.jpg"
    },
    {
        en: "I think I've been working so hard I forgot what it's like to hardly work.",
        pt: "Acho que tenho trabalhado tanto que me esqueci de como é não trabalhar quase nada.",
        autor: "Michael Scott",
        imagem: "img/michael.jpg"
    },
    {
        en: "Why waste time say lot word when few word do trick?",
        pt: "Por que perder tempo usando muitas palavras quando poucas resolvem o problema?",
        autor: "Kevin Malone",
        imagem: "img/kevin.jpg"
    },
    {
        en: "Sometimes I get so bored I just want to scream, and then sometimes I actually do scream. I just sort out what the situation calls for.",
        pt: "Às vezes fico tão entediada que dá vontade de gritar, e às vezes eu realmente grito. Eu simplesmente sinto o que a situação exige.",
        autor: "Kelly Kapoor",
        imagem: "img/kelly.jpg"
    },
    {
        en: "That's what she said!",
        pt: "Foi o que ela disse!",
        autor: "Michael Scott",
        imagem: "img/michael.jpg"
    }
];

function sortearFrase() {
    const indice = Math.floor(Math.random() * bancoDeFrases.length);
    const fraseSorteada = bancoDeFrases[indice];
    
    const elementoEn = document.getElementById("frase-en");
    const elementoPt = document.getElementById("frase-pt");
    const elementoFoto = document.getElementById("foto-personagem");
    const placeholder = document.getElementById("placeholder-carta"); 
    
    
    placeholder.style.display = "none";
    elementoFoto.style.display = "block";
    
    elementoEn.innerText = `"${fraseSorteada.en}"`;
    elementoPt.innerText = `"${fraseSorteada.pt}"`;
    document.getElementById("autor").innerText = `- ${fraseSorteada.autor}`;
    
    elementoFoto.src = fraseSorteada.imagem;
    elementoFoto.alt = `Foto de ${fraseSorteada.autor}`;


    if (fraseSorteada.pt === "Foi o que ela disse!") {
        elementoEn.classList.add("texto-ouro");
        elementoPt.classList.add("texto-ouro");
        elementoFoto.classList.add("carta-ouro"); 
    } else {
        elementoEn.classList.remove("texto-ouro");
        elementoPt.classList.remove("texto-ouro");
        elementoFoto.classList.remove("carta-ouro"); 
    }
}