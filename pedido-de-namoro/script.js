function sim(){
    alert("Você aceitou namorar comigo :)")
    location.href = "https://i.pinimg.com/originals/77/14/ff/7714ffe1b7a2ba01370af7678dc75cb2.gif";
}

function desvia(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("Opa... desvie");
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}