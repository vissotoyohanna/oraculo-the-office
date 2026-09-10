const bancoDeFrases = [
    {
        en: "I'm not superstitious, but I am a little stitious.",
        pt: "Não sou supersticioso, mas sou um pouco 'sticioso'.",
        autor: "Michael Scott"
    },
    {
        en: "Bears, beets, Battlestar Galactica.",
        pt: "Ursos, beterrabas, Battlestar Galactica.",
        autor: "Jim Halpert"
    },
    {
        en: "Identity theft is not a joke, Jim! Millions of families suffer every year!",
        pt: "Roubo de identidade não é piada, Jim! Milhões de famílias sofrem todos os anos!",
        autor: "Dwight Schrute"
    },
    {
        en: "I talk a lot, so I've learned to just tune myself out.",
        pt: "Eu falo muito, então aprendi a simplesmente me ignorar.",
        autor: "Kelly Kapoor"
    }
];

function sortearFrase() {
    
    const indice = Math.floor(Math.random() * bancoDeFrases.length);
    const fraseSorteada = bancoDeFrases[indice];
    
    
    document.getElementById("frase-en").innerText = `"${fraseSorteada.en}"`;
    document.getElementById("frase-pt").innerText = `"${fraseSorteada.pt}"`;
    document.getElementById("autor").innerText = `- ${fraseSorteada.autor}`;
}