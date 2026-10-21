const botaoTocar = document.getElementById("botao-tocar");
const botaoOuvirDnv = document.getElementById("ouvir-dnv");
const mensagem = document.getElementById("mensagem");
const botaoResposta = document.querySelectorAll(".butao-resposta");
const notas = ["Dó","Ré","Mi","Fá","Sol","Lá","Si"];
let notaSorteada,indiceAleatorio;
const audios = {
    "Dó" : new Audio("audios/do.ogg"),
    "Ré" : new Audio("audios/re.ogg"),
    "Mi" : new Audio("audios/mi.ogg"),
    "Fá" : new Audio("audios/fa.ogg"),
    "Sol" : new Audio("audios/sol.ogg"),
    "Lá" : new Audio("audios/la.ogg"),
    "Si" : new Audio("audios/si.ogg")
};

botaoTocar.addEventListener('click',function(){
    mensagem.textContent = "qual nota tocou???";
    indiceAleatorio = Math.floor(Math.random()*notas.length)
    notaSorteada = notas[indiceAleatorio]
    console.log(notaSorteada)

    audios[notaSorteada].currentTime = 0;
    audios[notaSorteada].play();
});

botaoOuvirDnv.addEventListener('click',function(){
    audios[notaSorteada].currentTime = 0;
    audios[notaSorteada].play();
    mensagem.textContent = "segunda chance kk"
})

for(let i = 0; i < botaoResposta.length; i++){
    botaoResposta[i].addEventListener('click',function(){
       let notaClicado = botaoResposta[i].textContent;

        if(notaClicado == notaSorteada){
            mensagem.textContent = "ACERTOUU!!"
        }else{
            mensagem.textContent = "ERROUUU!!"
        }
    })
}

