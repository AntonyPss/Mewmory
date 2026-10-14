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
    description: "Lleno de energía y curiosidad, siempre listo para explorar.",
  },
];

const catsGrid = document.getElementById("cats-grid");

const renderCats = () => {
  catsGrid.innerHTML = "";

  catItems.forEach((cat) => {
    const card = document.createElement("article");
    card.className = "cat-card";

    card.innerHTML = `
      <div class="cat-image-wrapper">
        <img src="${cat.photo}" class="cat-image" alt="${cat.name}" loading="lazy" decoding="async">
      </div>
      <div class="cat-card-content">
        <div class="cat-info">
          <h3 class="cat-title">${cat.name}</h3>
          <p class="cat-breed">${cat.breed}</p>
        </div>
        <div class="cat-tag-container" aria-label="Datos de ${cat.name}">
          <span class="cat-tag-item"><i class="ri-user-line" aria-hidden="true"></i> ${cat.gender}</span>
          <span class="cat-tag-item"><i class="ri-scales-3-line" aria-hidden="true"></i> ${cat.weight}</span>
          <span class="cat-tag-item"><i class="ri-palette-line" aria-hidden="true"></i> ${cat.color}</span>
        </div>
        <div class="cat-age">
          <i class="ri-calendar-line" aria-hidden="true"></i>
          <span>${cat.age}</span>
        </div>
        <p class="cat-description">${cat.description}</p>
        <button type="button" class="btn-primary cat-details-button"
          data-name="${cat.name}"
          data-photo="${cat.photo}"
          data-breed="${cat.breed}"
          data-gender="${cat.gender}"
          data-weight="${cat.weight}"
          data-color="${cat.color}"
          data-status="${cat.status}"
          data-age="${cat.age}"
          data-description="${cat.description}"
          aria-label="Ver detalles de ${cat.name}">
          <i class="ri-heart-3-fill" aria-hidden="true"></i> Ver detalles
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
const catModalStatus = document.getElementById("cat-modal-status");
const catModalBreed = document.getElementById("cat-modal-breed");
const catModalGender = document.getElementById("cat-modal-gender");
const catModalWeight = document.getElementById("cat-modal-weight");
const catModalColor = document.getElementById("cat-modal-color");
let modalPreviousFocus = null;
let pageScrollPosition = 0;

const openCatModal = (cat) => {
  modalPreviousFocus = document.activeElement;
  pageScrollPosition = window.scrollY;
  document.body.style.top = `-${pageScrollPosition}px`;
  document.body.classList.add("modal-open");

  catModalImage.src = cat.photo;
  catModalImage.alt = cat.name;
  catModalTitle.textContent = cat.name;
  catModalName.textContent = cat.name;
  catModalAge.textContent = cat.age;
  catModalDescription.textContent = cat.description;
  catModalStatus.textContent = cat.status;
  catModalBreed.textContent = cat.breed;
  catModalGender.textContent = cat.gender;
  catModalWeight.textContent = cat.weight;
  catModalColor.textContent = cat.color;
  catModal.scrollTop = 0;
  catModalOverlay.classList.remove("closing");
  catModalOverlay.classList.add("active");
  catModalOverlay.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => catModalClose.focus());
};

const closeCatModal = () => {
  if (!catModalOverlay.classList.contains("active") || catModalOverlay.classList.contains("closing")) return;
  catModalOverlay.classList.add("closing");
};

const finishCloseCatModal = () => {
  catModalOverlay.classList.remove("active");
  catModalOverlay.classList.remove("closing");
  catModalOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  document.body.style.removeProperty("top");
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, pageScrollPosition);
  document.documentElement.style.scrollBehavior = previousScrollBehavior;
  modalPreviousFocus?.focus({ preventScroll: true });
};

catModalOverlay.addEventListener("animationend", (event) => {
  if (event.target === catModalOverlay && catModalOverlay.classList.contains("closing")) {
    finishCloseCatModal();
  }
});

catsGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".cat-details-button");
  if (!button) return;
  event.preventDefault();

  openCatModal({
    photo: button.dataset.photo,
    name: button.dataset.name,
    breed: button.dataset.breed,
    gender: button.dataset.gender,
    weight: button.dataset.weight,
    color: button.dataset.color,
    status: button.dataset.status,
    age: button.dataset.age,
    description: button.dataset.description,
  });
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
})();
