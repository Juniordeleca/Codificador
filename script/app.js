const mensagem = document.getElementById("mensagem");
const criptografarBtn = document.getElementById("criptografar");
const descriptografarBtn = document.getElementById("descriptografar");
const limparBtn = document.getElementById("limpar");
const copiarBtn = document.getElementById("copiar");
const textoCriptografado = document.getElementById("textoCriptografado");
const saidaDaCriptografia = document.getElementById("saida");
const originalContent = `
  <img id="lupa" src="images/lupa.png" alt="lupa">
  <h2>Nenhuma mensagem encontrada</h2>
  <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
  <p id="textoCriptografado"></p>
`;


// Adiciona evento de click ao botão criptografar
criptografarBtn.addEventListener("click", () => {
  let texto = mensagem.value;
  // Verifica se o texto contém letras maiúsculas, acentos e caracteres especiais
  const invalidChars = /[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛãõçáéíóúàèìòùâêîôû!@#$%^&*()_+-={}[]|;':"<>,.?\\]/g;
  if (invalidChars.test(texto)) {
    alert("O texto deve conter apenas letras minúsculas, sem acento ou caracteres especiais.");
    return;
  }

  // Criptografando o texto
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");
  // Atualiza o conteúdo da div textoCriptografado
  atualizarTextoCriptografado(texto);
});


// Adiciona o evento de click ao botão descriptografar
descriptografarBtn.addEventListener("click", () => {
  let texto = mensagem.value;
  // Verifica se o texto contém letras maiúsculas, acentos e caracteres especiais
  const invalidChars = /[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛãõçáéíóúàèìòùâêîôû!@#$%^&*()_+-={}[]|;':"<>,.?\\]/g;
  if (invalidChars.test(texto)) {
    alert("O texto deve conter apenas letras minúsculas, sem acento ou caracteres especiais.");
    return;
  }
  // Descriptografa o texto
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  textoCriptografado.innerText = texto;
  // exclui os elementos da <div class = "saidaDaCriptografia", exceto o <p id="textoCriptografado" //
  atualizarTextoCriptografado(texto);
});

// Adiciona evento de click ao botão limpar, também modifica a DOM para que o texto criptografado seja removido
limparBtn.addEventListener("click", () => {
  mensagem.value = "";
  // textoCriptografado.innerText = "";
  saidaDaCriptografia.innerText = "";
  saidaDaCriptografia.innerHTML = originalContent;
});

// Adiciona o evento de click ao botão copiar
copiarBtn.addEventListener("click", () => {
  let texto = textoCriptografado.innerText;
    // Copian o texto
    navigator.clipboard.writeText(texto).then(
        function () {
            console.log("Texto copiado com sucesso!");
            alert("Texto copiado com sucesso!");
        }
    );

});

// Função para atualizar o conteúdo da div saidaDaCriptografia
function atualizarTextoCriptografado(texto) {
  // Remove elementos da div saidaDaCriptografia
  const elementsToRemove = saidaDaCriptografia.querySelectorAll("img, h2, p:not(#textoCriptografado)");
  elementsToRemove.forEach(element => element.remove());
  
  saidaDaCriptografia.innerText = texto;
}


