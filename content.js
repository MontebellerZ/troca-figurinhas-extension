function hideRestricao() {
  const selectorRestricao = "#ctl00_upRestricao";

  const el = document.querySelector(selectorRestricao);
  if (el && el.style.display !== "none") {
    el.style.display = "none";
    console.log(`Div ${selectorRestricao} foi escondida!`);
  } else {
    console.log(`Não achei a div ${selectorRestricao}`);
  }
}

// Esconde imediatamente se já existir
hideRestricao();

// Observa mudanças no DOM e esconde caso apareça depois
const observer = new MutationObserver(() => hideRestricao());
observer.observe(document.body, { childList: true, subtree: true });
