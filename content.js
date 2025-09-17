function hideRestricao() {
  const el = document.querySelector("#ctl00_upRestricao");
  if (el && el.style.display !== "none") {
    el.style.display = "none";
    console.log("Div #ctl00_upRestricao foi escondida!");
  }
}

// Esconde imediatamente se já existir
hideRestricao();

// Observa mudanças no DOM e esconde caso apareça depois
const observer = new MutationObserver(() => hideRestricao());
observer.observe(document.body, { childList: true, subtree: true });
