const form = document.querySelector("#form-login");
const campoEmail = document.querySelector("#email");
const campoSenha = document.querySelector("#senha");
const toggleSenha = document.querySelector("#toggle-senha");
const aviso = document.querySelector("#aviso");

if (form && campoEmail && campoSenha && toggleSenha && aviso) {
  toggleSenha.addEventListener("click", () => {
    const estaOculta = campoSenha.type === "password";
    campoSenha.type = estaOculta ? "text" : "password";
    toggleSenha.textContent = estaOculta ? "Ocultar" : "Mostrar";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = campoEmail.value.trim();
    const senha = campoSenha.value.trim();

    if (!email || !senha) {
      aviso.textContent = "Preencha e-mail e senha para continuar.";
      aviso.classList.add("aviso--erro");
      return;
    }

    if (!email.includes("@")) {
      aviso.textContent = "Informe um e-mail válido.";
      aviso.classList.add("aviso--erro");
      return;
    }

    aviso.textContent = "Login realizado com sucesso!";
    aviso.classList.remove("aviso--erro");
    aviso.classList.add("aviso--sucesso");
  });
}
