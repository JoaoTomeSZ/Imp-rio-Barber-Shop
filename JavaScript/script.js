const phone = "71999999999"

function copiarParaClipboard() {
    const textoParaCopiar = "71999999999";
    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            alert("Texto copiado para a área de transferência!");
        })
        .catch(err => {
            console.error("Erro ao copiar texto: ", err);
        });
}

function mostrarMensagem(id) {
    let mensagem;

    switch(id) {
        case "1":
            mensagem = `Olá, gostaria de agendar um *Corte*`
            window.open(`https://wa.me/${phone}?text=${mensagem}`, "_blank");
            break;
        case "2":
            mensagem = `Olá, gostaria de agendar um *Corte, Barba e Sobrancelha*`
            window.open(`https://wa.me/${phone}?text=${mensagem}`, "_blank");
            break;
        case "3":
            mensagem = `Olá, gostaria de agendar uma *Selagem Masculina com Corte*`
            window.open(`https://wa.me/${phone}?text=${mensagem}`, "_blank");
            break;
        case "4":
            mensagem = `Olá, gostaria de agendar um *Relaxamento*`
            window.open(`https://wa.me/${phone}?text=${mensagem}`, "_blank");
            break;
        case "5":
            mensagem = `Olá, gostaria de agendar *Luzes*`
            window.open(`https://wa.me/${phone}?text=${mensagem}`, "_blank");
            break;
        case "6":
            mensagem = `Olá, gostaria de agendar um *Platinado*`
            window.open(`https://wa.me/${phone}?text=${mensagem}`, "_blank");
            break;
    }
}

function scrollCorte() {
    const elemento = document.getElementById("opcoes");
    elemento.scrollIntoView({ behavior: "smooth", block: "start" });
}
function scrollContacts() {
    const elemento = document.getElementById("contatos");
    elemento.scrollIntoView({ behavior: "smooth", block: "start" });
}
function up() {
    const elemento = document.getElementById("up");
    elemento.scrollIntoView({ behavior: "smooth", block: "start" });
}
