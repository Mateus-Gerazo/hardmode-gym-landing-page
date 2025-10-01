// Substitua "SUA_PUBLIC_KEY" pela sua chave encontrada na aba "Account" do EmailJS
emailjs.init({
  publicKey: "tI2jFr5_VX_OVNDkc",
});

// O invólucro que garante que o HTML foi carregado
document.addEventListener("DOMContentLoaded", function () {
  console.log("🏋️ HARD MODE GYM - Sistema Carregado");

  // =========================== //
  // DECLARAÇÃO DE VARIÁVEIS
  // =========================== //
  const themeToggleBtn = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const navLinks = document.querySelectorAll(".nav-link, .nav-link-new");
  const body = document.body;
  const mainHeader = document.getElementById("main-header");

  let currentTheme = "dark";
  let hardmodeActive = false;
  let scrollTimeout;

  // Seletores do Modal de Email
  const emailModal = document.getElementById("emailModal");
  const comeceAgoraBtn = document.getElementById("comeceAgoraBtn");
  const closeEmailModal = document.getElementById("closeEmailModal");
  const emailForm = document.getElementById("emailForm");
  const emailInput = document.getElementById("emailInput");
  const emailError = document.getElementById("emailError");
  const emailModalBody = document.getElementById("emailModalBody");
  const emailSubmitBtn = emailForm
    ? emailForm.querySelector(".email-submit-btn")
    : null;

  const formContainer = emailModal?.querySelector(".form-container");
  const successMessage = emailModal?.querySelector(".success-message");
  const closeSuccessBtn = emailModal?.querySelector("#closeSuccessBtn");

  // Seletores dos Cards
  const cards = document.querySelectorAll(".interactive-cards-container .card");

  const sunIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
  const moonIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  // =========================== //
  // FUNÇÕES DA APLICAÇÃO
  // =========================== //

  // FUNÇÃO showSection CORRIGIDA E SIMPLIFICADA
  function showSection(targetId) {
    console.log("🔄 Navegando para seção:", targetId);

    // Remove a classe 'active' de todos os links do menu
    navLinks.forEach((link) => link.classList.remove("active"));

    // Esconde todas as seções da página
    document.querySelectorAll(".page-section").forEach((section) => {
      section.classList.remove("active");
      section.classList.add("hidden");
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      // Mostra a seção de destino
      targetSection.classList.remove("hidden");
      targetSection.classList.add("active");

      // Adiciona a classe 'active' APENAS ao link do menu correspondente
      const activeNavLink = document.querySelector(
        `.nav-link-new[data-section="${targetId}"]`
      );
      if (activeNavLink) {
        activeNavLink.classList.add("active");
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.warn("Seção não encontrada:", targetId);
    }
  }

  // =========================== //
  // FUNCIONALIDADE DO SCROLL HEADER
  // =========================== //

  function handleHeaderScroll() {
    if (!mainHeader) return;
    const scrollPercent = window.scrollY / window.innerHeight;

    if (scrollPercent > 0.05) {
      if (!mainHeader.classList.contains("stage-2")) {
        mainHeader.classList.remove("stage-1");
        mainHeader.classList.add("stage-2");
        console.log("🔄 Header: Estágio 2 Ativado (Logo H)");
      }
    } else {
      if (!mainHeader.classList.contains("stage-1")) {
        mainHeader.classList.remove("stage-2");
        mainHeader.classList.add("stage-1");
        console.log("🔄 Header: Estágio 1 Ativado (Logo Completa)");
      }
    }
  }

  window.addEventListener("scroll", () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(handleHeaderScroll, 10);
  });

  if (mainHeader) {
    mainHeader.classList.add("stage-1");
    handleHeaderScroll();
  }

  // =========================== //
  // FUNCIONALIDADE DE TEMA //
  // =========================== //

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme();
      this.style.transform = "scale(0.9)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
      localStorage.setItem("hardModeGymTheme", currentTheme);
    });
  }

  function applyTheme() {
    body.classList.remove("dark-mode", "light-mode");
    body.classList.add(currentTheme === "light" ? "light-mode" : "dark-mode");
    themeIcon.innerHTML = currentTheme === "dark" ? sunIconSVG : moonIconSVG;
    applyThemeContent();
  }

  function toggleHardmode() {
    hardmodeActive = !hardmodeActive;
    body.classList.toggle("hardmode-active", hardmodeActive);
    applyThemeContent();
    localStorage.setItem("hardModeActive", hardmodeActive.toString());
  }

  function applyThemeContent() {
    const elements = {
      heroTitle: document.querySelector(".hero-title"),
      heroDescription: document.querySelector(".hero-description"),
      comeceAgoraBtn: document.getElementById("comeceAgoraBtn"),
      vejaOsPlanosBtn: document.getElementById("vejaOsPlanosBtn"),
      featuresTitle: document.querySelector(".features-title"),
      ctaTitle: document.querySelector(".cta-title"),
      ctaDesc: document.querySelector(".cta-description"),
      ctaButton: document.querySelector(".cta-button"),
      institutionalText: document.querySelector("#home .about-cta-text"),
      navHome: document.querySelector('.nav-link-new[data-section="home"]'),
      navSobre: document.querySelector('.nav-link-new[data-section="sobre"]'),
      navVersoes: document.querySelector(
        '.nav-link-new[data-section="versoes"]'
      ),
      navContato: document.querySelector(
        '.nav-link-new[data-section="contato"]'
      ),
      aboutTitle: document.querySelector(".about-title"),
      versionsTitle: document.querySelector(".versions-title"),
      contactTitle: document.querySelector(".contact-title"),
    };

    const hardModeTexts = {
      heroTitle: 'VOCÊ ESTÁ<br><span class="hero-highlight">PRONTO</span>?',
      heroDescription:
        'Sistema bruto para academias que separam fracos de guerreiros.<br><strong class="hero-strong">SEM DESCULPAS. SEM DESCANSO. SÓ OS FORTES SOBREVIVEM.</strong>',
      comeceAgoraBtn: "ENTRE SE TIVER CORAGEM",
      vejaOsPlanosBtn: "ESCOLHA SUA ARMA",
      featuresTitle:
        'CONTROLE <span class="features-highlight">IMPLACÁVEL</span>',
      ctaTitle:
        'VOCÊ ESTÁ PRONTO OU <span class="cta-highlight">VAI CORRER</span>?',
      ctaDesc: "ENTRE PARA A ELITE. MEDÍOCRES NÃO PASSAM DA PORTA.",
      ctaButton: "LIBERAR O CAOS",
      institutionalText:
        "De um simples teste de programação para um sistema que separa fracos de guerreiros.<br><strong>Criado para donos de academias que não aceitam moleza, nosso software é mais que uma ferramenta — é um campo de guerra digital.</strong>",
      navHome: "Arena",
      navSobre: "A Origem da Batalha",
      navVersoes: "Escolha sua Arma",
      navContato: "Fale com o Quartel",
      aboutTitle:
        'CONHEÇA A <span class="about-highlight">ORIGEM DA BATALHA</span>',
      versionsTitle: 'ESCOLHA <span class="versions-highlight">SUA ARMA</span>',
      contactTitle: 'FALE COM O <span class="contact-highlight">QUARTEL</span>',
    };

    const normalTexts = {
      heroTitle: 'TREINO<br><span class="hero-highlight">HARDCORE</span>',
      heroDescription:
        'Sistema de controle de entrada para academias que levam o fitness a sério.<br><strong class="hero-strong">SEM FRESCURA. SEM LIMITES.</strong>',
      comeceAgoraBtn: "COMECE AGORA",
      vejaOsPlanosBtn: "VEJA OS PLANOS",
      featuresTitle: 'CONTROLE <span class="features-highlight">TOTAL</span>',
      ctaTitle: 'PRONTO PARA O <span class="cta-highlight">HARD MODE</span>?',
      ctaDesc: "Junte-se às academias que não aceitam mediocridade.",
      ctaButton: "ATIVAR HARD MODE",
      institutionalText:
        "Criado para donos de academias que querem controle, disciplina e segurança.<br><strong>Sem frescura. Sem enrolação. Apenas resultado.</strong>",
      navHome: "Início",
      navSobre: "Sobre",
      navVersoes: "Versões",
      navContato: "Contato",
      aboutTitle:
        'CONHEÇA O <span class="about-highlight">HARD MODE GYM</span>',
      versionsTitle:
        'ESCOLHA SUA <span class="versions-highlight">VERSÃO</span>',
      contactTitle:
        'FALE COM O <span class="contact-highlight">HARD MODE GYM</span>',
    };

    const texts = hardmodeActive ? hardModeTexts : normalTexts;
    const elementsWithHTML = [
      "heroTitle",
      "heroDescription",
      "featuresTitle",
      "ctaTitle",
      "institutionalText",
      "aboutTitle",
      "versionsTitle",
      "contactTitle",
    ];

    for (const key in elements) {
      if (elements[key] && texts[key]) {
        if (elementsWithHTML.includes(key)) {
          elements[key].innerHTML = texts[key];
        } else {
          elements[key].textContent = texts[key];
        }
      }
    }
  }

  const savedTheme = localStorage.getItem("hardModeGymTheme");
  if (savedTheme) currentTheme = savedTheme;
  const savedHardmode = localStorage.getItem("hardModeActive");
  if (savedHardmode === "true") hardmodeActive = true;

  applyTheme(); // Aplica o tema e textos na inicialização

  // =========================== //
  // FUNCIONALIDADE DOS BOTÕES //
  // =========================== //
  // Adiciona o listener APENAS no botão específico do Hard Mode
  const hardModeBtn = document.getElementById("hardModeBtn");
  if (hardModeBtn) {
    hardModeBtn.addEventListener("click", function () {
      toggleHardmode();
    });
  }

  document.querySelectorAll("button").forEach((button) => {
    if (button.id === "themeToggle") return;
    button.addEventListener("click", function () {
      const buttonText = this.textContent.trim();
      if (
        buttonText === "ATIVAR HARD MODE" ||
        buttonText === "LIBERAR O CAOS"
      ) {
        toggleHardmode();
      }
    });
  });

  // =========================== //
  // LÓGICA DO MODAL DE EMAIL //
  // =========================== //
  if (comeceAgoraBtn)
    comeceAgoraBtn.addEventListener("click", () =>
      emailModal?.classList.add("show")
    );
  if (closeEmailModal)
    closeEmailModal.addEventListener("click", () => {
      emailModal?.classList.remove("show");
      setTimeout(resetEmailForm, 300);
    });
  if (closeSuccessBtn)
    closeSuccessBtn.addEventListener("click", () => {
      emailModal?.classList.remove("show");
      setTimeout(resetEmailForm, 300);
    });
  emailModal?.addEventListener("click", (e) => {
    if (e.target === emailModal) {
      emailModal.classList.remove("show");
      setTimeout(resetEmailForm, 300);
    }
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
      ? { valid: true }
      : { valid: false, message: "⚠️ Por favor, insira um email válido." };
  }

  if (emailForm) {
    emailForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const validation = validateEmail(email);

      if (!validation.valid) {
        emailInput?.classList.add("error");
        if (emailError) emailError.textContent = validation.message;
        return;
      }

      emailInput?.classList.remove("error");
      if (emailError) emailError.textContent = "";

      if (emailSubmitBtn) {
        emailSubmitBtn.disabled = true;
        emailSubmitBtn.textContent = "ENVIANDO...";
      }

      emailjs
        .send("hardmode_gym_email_servi", "template_ozk73i2", { email: email })
        .then(
          () => {
            formContainer?.classList.add("hidden");
            if (successMessage) {
              successMessage.classList.remove("hidden");
              successMessage.style.display = "flex";
            }
          },
          () => {
            if (emailSubmitBtn) {
              emailSubmitBtn.disabled = false;
              emailSubmitBtn.textContent = "TENTAR NOVAMENTE";
            }
            if (emailError)
              emailError.textContent = "❌ Falha ao enviar. Tente novamente.";
          }
        );
    });
  }

  function resetEmailForm() {
    formContainer?.classList.remove("hidden");
    if (successMessage) {
      successMessage.classList.add("hidden");
      successMessage.style.display = "none";
    }
    if (emailForm) emailForm.reset();
    if (emailError) emailError.textContent = "";
    emailInput?.classList.remove("error");
    if (emailSubmitBtn) {
      emailSubmitBtn.disabled = false;
      emailSubmitBtn.textContent = "CONFIRMAR";
    }
  }

  if (vejaOsPlanosBtn)
    vejaOsPlanosBtn.addEventListener("click", () => showSection("versoes"));

  // =========================== //
  // NAVEGAÇÃO ENTRE SEÇÕES //
  // =========================== //
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("data-section");
      if (sectionId) showSection(sectionId);
    });
  });

  // =========================== //
  // ANIMAÇÕES DE ENTRADA AO ROLAR //
  // =========================== //
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".reveal-on-scroll")
    .forEach((el) => observer.observe(el));

  // =========================== //
  // MODAIS DE IMAGEM (MULTI-CARD) //
  // =========================== //
  document.querySelectorAll(".view-image-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute("data-modal");
      if (targetId) openModalById(targetId);
    });
  });

  document.querySelectorAll(".fullscreen-modal .modal-close").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".fullscreen-modal");
      if (modal) closeModal(modal);
    });
  });

  document.querySelectorAll(".fullscreen-modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".fullscreen-modal.active").forEach(closeModal);
    }
  });

  // =========================== //
  // CARDS INTERATIVOS (FLIP) //
  // =========================== //
  if (cards.length > 0) {
    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("a, button")) return;
        const isFlipped = card.classList.contains("is-flipped");
        cards.forEach((otherCard) => otherCard.classList.remove("is-flipped"));
        if (!isFlipped) card.classList.add("is-flipped");
      });
    });
  }

  // =========================== //
  // INICIALIZAÇÃO //
  // =========================== //
  // Define a seção inicial com base na classe 'active' do HTML
  const initialSection =
    document.querySelector(".page-section.active") ||
    document.getElementById("home");
  document
    .querySelectorAll(".page-section")
    .forEach((s) => s.classList.add("hidden")); // Garante que todas começam escondidas
  initialSection.classList.remove("hidden");
  initialSection.classList.add("active");

  console.log("✅ HARD MODE GYM - Todos os sistemas operacionais");
});

// =========================== //
// FUNÇÕES GLOBAIS DE MODAL //
// =========================== //
function openModalById(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalEl) {
  if (!modalEl) return;

  // Adiciona a classe que ativa a animação de fade-out
  modalEl.classList.add("closing");

  // Espera a animação terminar (300ms) para realmente esconder o modal
  setTimeout(() => {
    modalEl.classList.remove("active");
    modalEl.classList.remove("closing"); // Limpa a classe para a próxima vez
    document.body.style.overflow = "";
  }, 300);
}
