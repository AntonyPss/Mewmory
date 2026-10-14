(() => {
  "use strict";
  const catItems = [
    {
      photo: "assets/images/manchas.webp",
      name: "Manchas",
      breed: "Mestizo",
      gender: "Macho",
      weight: "1.1kg",
      color: "Blanco con manchas grises atigradas",
      status: "Joven",
      age: "7 meses",
      description:
        "Le encanta tirarse panza arriba y estirar las patas para pedir juego. Un gatito lleno de energía y muy seguro de sí mismo.",
      history: "Rescatado de la calle.",
    },
    {
      photo: "assets/images/linux.webp",
      name: "Linux",
      breed: "Mestizo",
      gender: "Macho",
      weight: "1.1kg",
      color: "Blanco con manchas grises atigradas",
      status: "Joven",
      age: "4 meses",
      description:
        "Le encanta dormir panza arriba y estirar las patas. Un gatito muy tranquilo y seguro de sí mismo.",
    },
    {
      photo: "assets/images/tabbis-gris.webp",
      name: "No registrado",
      breed: "Mestiza",
      gender: "Hembra",
      weight: "No registrado",
      color: "Tabbis Gris",
      status: "Joven",
      age: "9 meses",
      description: "Silenciosa, pero juguetona.",
    },
    {
      photo: "assets/images/luna.webp",
      name: "Luna",
      breed: "Mestiza",
      gender: "Hembra",
      weight: "No registrado",
      color: "Blanco y naranja",
      status: "Adulta",
      age: "3 años",
      description: "Una gatita muy juguetona y cariñosa.",
    },
    {
      photo: "assets/images/manchis.webp",
      name: "Manchis",
      breed: "Mestiza",
      gender: "Hembra",
      weight: "No registrado",
      color: "Café atigrado",
      status: "Adulta",
      age: "4 años",
      description: "Una compañera tranquila e independiente.",
    },
    {
      photo: "assets/images/thomy.webp",
      name: "Thomy",
      breed: "Mestizo",
      gender: "Macho",
      weight: "No registrado",
      color: "Gris atigrado",
      status: "Joven",
      age: "1 año",
      description:
        "Lleno de energía y curiosidad, siempre listo para explorar.",
    },
  ];

  const catEnglish = {
    Manchas: {
      name: "Manchas",
      breed: "Mixed-breed",
      gender: "Male",
      weight: "1.1 kg",
      color: "White with gray tabby patches",
      status: "Young",
      age: "7 months",
      description:
        "He loves flopping onto his back and stretching his paws to ask for playtime. He's an energetic kitten full of confidence.",
      history: "Rescued from the street.",
    },
    Linux: {
      name: "Linux",
      breed: "Mixed-breed",
      gender: "Male",
      weight: "1.1 kg",
      color: "White with gray tabby patches",
      status: "Young",
      age: "4 months",
      description:
        "He loves sleeping on his back and stretching his paws. He's a calm, confident kitten.",
    },
    "No registrado": {
      name: "Unregistered",
      breed: "Mixed-breed",
      gender: "Female",
      weight: "Not recorded",
      color: "Gray tabby",
      status: "Young",
      age: "9 months",
      description: "Quiet, but playful.",
    },
    Luna: {
      name: "Luna",
      breed: "Mixed-breed",
      gender: "Female",
      weight: "Not recorded",
      color: "White and orange",
      status: "Adult",
      age: "3 years",
      description: "A very playful and affectionate cat.",
    },
    Manchis: {
      name: "Manchis",
      breed: "Mixed-breed",
      gender: "Female",
      weight: "Not recorded",
      color: "Brown tabby",
      status: "Adult",
      age: "4 years",
      description: "A calm and independent companion.",
    },
    Thomy: {
      name: "Thomy",
      breed: "Mixed-breed",
      gender: "Male",
      weight: "Not recorded",
      color: "Gray tabby",
      status: "Young",
      age: "1 year",
      description: "Full of energy and curiosity, always ready to explore.",
    },
  };

  const getCatText = (cat) => ({
    ...cat,
    ...(window.MewmoryI18n?.getLanguage() === "en"
      ? catEnglish[cat.name] || {}
      : {}),
  });

  const catsGrid = document.getElementById("cats-grid");

  const renderCats = () => {
    catsGrid.innerHTML = "";

    catItems.forEach((cat) => {
      const details = getCatText(cat);
      const t = window.MewmoryI18n.t;
      const card = document.createElement("article");
      card.className = "cat-card";

      card.innerHTML = `
      <div class="cat-image-wrapper">
        <img src="${details.photo}" class="cat-image" alt="${details.name}" loading="lazy" decoding="async">
      </div>
      <div class="cat-card-content">
        <div class="cat-info">
          <h3 class="cat-title">${details.name}</h3>
          <p class="cat-breed">${details.breed}</p>
        </div>
        <div class="cat-tag-container" aria-label="${t("catFactsFor", { name: details.name })}">
          <span class="cat-tag-item"><i class="ri-user-line" aria-hidden="true"></i> ${details.gender}</span>
          <span class="cat-tag-item"><i class="ri-scales-3-line" aria-hidden="true"></i> ${details.weight}</span>
          <span class="cat-tag-item"><i class="ri-palette-line" aria-hidden="true"></i> ${details.color}</span>
        </div>
        <div class="cat-age">
          <i class="ri-calendar-line" aria-hidden="true"></i>
          <span>${details.age}</span>
        </div>
        <p class="cat-description">${details.description}</p>
        <button type="button" class="btn-primary cat-details-button"
          data-cat-key="${cat.name}"
          aria-label="${t("catDetailsFor", { name: details.name })}">
          <i class="ri-heart-3-fill" aria-hidden="true"></i> ${t("catDetailsButton")}
        </button>
      </div>
    `;

      catsGrid.appendChild(card);
    });
  };

  const catModalOverlay = document.getElementById("cat-modal-overlay");
  const catModalClose = document.getElementById("cat-modal-close");
  const catModalImage = document.getElementById("cat-modal-image");
  const catModalTitle = document.getElementById("cat-modal-title");
  const catModalName = document.querySelector(".cat-modal-name");
  const catModal = document.querySelector(".cat-modal");
  const catModalAge = document.getElementById("cat-modal-age");
  const catModalDescription = document.getElementById("cat-modal-description");
  const catModalHistory = document.getElementById("cat-modal-history");
  const catModalStatus = document.getElementById("cat-modal-status");
  const catModalBreed = document.getElementById("cat-modal-breed");
  const catModalGender = document.getElementById("cat-modal-gender");
  const catModalWeight = document.getElementById("cat-modal-weight");
  const catModalColor = document.getElementById("cat-modal-color");
  let modalPreviousFocus = null;
  let pageScrollPosition = 0;
  let activeCat = null;

  const fillCatModal = (cat) => {
    const details = getCatText(cat);
    const t = window.MewmoryI18n.t;
    catModalImage.src = details.photo;
    catModalImage.alt = details.name;
    catModalTitle.textContent = details.name;
    catModalName.textContent = details.name;
    catModalAge.textContent = details.age;
    catModalDescription.textContent = details.description;
    catModalHistory.textContent = details.history || t("catMissingHistory");
    catModalStatus.textContent = details.status;
    catModalBreed.textContent = details.breed;
    catModalGender.textContent = details.gender;
    catModalWeight.textContent = details.weight;
    catModalColor.textContent = details.color;
  };

  const openCatModal = (cat) => {
    activeCat = cat;
    modalPreviousFocus = document.activeElement;
    pageScrollPosition = window.scrollY;
    document.body.style.top = `-${pageScrollPosition}px`;
    document.body.classList.add("modal-open");

    fillCatModal(cat);
    catModal.scrollTop = 0;
    catModalOverlay.classList.remove("closing");
    catModalOverlay.classList.add("active");
    catModalOverlay.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => catModalClose.focus());
  };

  const closeCatModal = () => {
    if (
      !catModalOverlay.classList.contains("active") ||
      catModalOverlay.classList.contains("closing")
    )
      return;
    catModalOverlay.classList.add("closing");
  };

  const finishCloseCatModal = () => {
    catModalOverlay.classList.remove("active");
    catModalOverlay.classList.remove("closing");
    catModalOverlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.body.style.removeProperty("top");
    const previousScrollBehavior =
      document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, pageScrollPosition);
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
    activeCat = null;
    modalPreviousFocus?.focus({ preventScroll: true });
  };

  catModalOverlay.addEventListener("animationend", (event) => {
    if (
      event.target === catModalOverlay &&
      catModalOverlay.classList.contains("closing")
    ) {
      finishCloseCatModal();
    }
  });

  catsGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".cat-details-button");
    if (!button) return;
    event.preventDefault();

    const cat = catItems.find((item) => item.name === button.dataset.catKey);
    if (cat) openCatModal(cat);
  });

  catModalClose.addEventListener("click", closeCatModal);
  catModalOverlay.addEventListener("click", (event) => {
    if (event.target === catModalOverlay) {
      closeCatModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!catModalOverlay.classList.contains("active")) return;

    if (event.key === "Escape") {
      closeCatModal();
      return;
    }

    if (event.key === "Tab") {
      const focusableElements = catModal.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  });

  // Ejecutar al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
    renderCats();
  });

  document.addEventListener("mewmory:languagechange", () => {
    renderCats();
    if (activeCat && catModalOverlay.classList.contains("active")) {
      fillCatModal(activeCat);
    }
  });
})();
