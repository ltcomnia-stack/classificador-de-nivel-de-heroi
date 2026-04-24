// Selecionando os elementos do DOM
const btn = document.getElementById('btnClassificar');
const campoNome = document.getElementById('nomeHeroi');
const campoXp = document.getElementById('xpHeroi');
const resultadoDiv = document.getElementById('resultado');

btn.addEventListener('click', function() {
    // Variáveis
    let nome = campoNome.value;
    let xp = parseInt(campoXp.value);
    let nivel = "";

    // Estrutura de decisão conforme a imagem
    if (isNaN(xp) || nome === "") {
        resultadoDiv.innerHTML = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Saída formatada
    resultadoDiv.innerHTML = `O Herói de nome <strong>${nome}</strong> está no nível de <strong>${nivel}</strong>`;
});
