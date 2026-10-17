
/* =========================================
   ESTÉTICA DANIELE TRINCE
   JavaScript simples e funcional
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  // 1. MENU DO CELULAR

  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");

    menuToggle.addEventListener("click", function () {
      const menuAberto = menu.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", String(menuAberto));
      menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
      );
    });

    // Fecha o menu depois que a pessoa escolhe uma seção

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      });
    });

    // Fecha o menu ao clicar fora dele

    document.addEventListener("click", function (event) {
      const clicouNoMenu = menu.contains(event.target);
      const clicouNoBotao = menuToggle.contains(event.target);

      if (!clicouNoMenu && !clicouNoBotao) {
        menu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      }
    });

    // Fecha o menu ao voltar para a versão de computador

    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) {
        menu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      }
    });
  }


  // 2. BOTÕES DO WHATSAPP

  const numeroWhatsApp = "5543991565209";

  document.querySelectorAll("[data-whatsapp]").forEach(function (botao) {
    const mensagem =
      botao.getAttribute("data-message") ||
      "Olá, Daniele! Gostaria de saber mais sobre os tratamentos estéticos.";

    const linkWhatsApp =
      "https://wa.me/" +
      numeroWhatsApp +
      "?text=" +
      encodeURIComponent(mensagem);

    botao.setAttribute("href", linkWhatsApp);
    botao.setAttribute("target", "_blank");
    botao.setAttribute("rel", "noopener noreferrer");
  });


  // 3. ANO AUTOMÁTICO NO RODAPÉ

  const anoAtual = document.getElementById("currentYear");

  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }

});
