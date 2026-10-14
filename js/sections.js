(() => {
  "use strict";
  const curiosityItems = [
    {
      icon: "ri-moon-line",
      title: "Duermen 16 horas al día",
      description:
        "Los gatos pasan alrededor del 70% de su vida durmiendo. Es parte de su instinto de ahorro de energía para la caza.",
    },
    {
      icon: "ri-sound-module-line",
      title: "El ronroneo sana",
      description:
        "La vibración entre 25 y 150 Hz del ronroneo puede favorecer la regeneración de huesos y reducir el estrés.",
    },
    {
      icon: "ri-eye-line",
      title: "Ven en la oscuridad",
      description:
        "Sus ojos tienen una capa reflectante (tapetum lucidum) que les permite ver con solo 1/6 de la luz que necesita un humano.",
    },
    {
      icon: "ri-fingerprint-line",
      title: "Huella nasal única",
      description:
        "El dibujo de su nariz es tan único como una huella dactilar humana. No hay dos gatos con el mismo patrón.",
    },
    {
      icon: "ri-heart-pulse-line",
      title: "Ronronean al sentir dolor",
      description:
        "No solo ronronean cuando están felices: también lo hacen para calmarse cuando están enfermos o estresados.",
    },
    {
      icon: "ri-microscope-line",
      title: "Sudan por las patas",
      description:
        "Las únicas glándulas sudoríparas de un gato están en sus almohadillas. Por eso dejan huellas húmedas al caminar.",
    },
  ];

  const careItems = [
    {
      icon: "ri-restaurant-line",
      title: "Alimentación",
      description:
        "Dieta equilibrada según su edad. Agua fresca siempre disponible y comida húmeda al menos una vez al día para hidratación.",
    },
    {
      icon: "ri-heart-pulse-line",
      title: "Salud preventiva",
      description:
        "Vacunas al día, desparasitación periódica y revisiones veterinarias cada 6–12 meses. La prevención es más barata que el tratamiento.",
    },
    {
      icon: "ri-sparkling-line",
      title: "Higiene",
      description:
        "Arenero limpio a diario, cepillado según el tipo de pelaje y corte de uñas cada 2–3 semanas. Un gato limpio es un gato tranquilo.",
    },
    {
      icon: "ri-gamepad-line",
      title: "Juego y ejercicio",
      description:
        "Al menos 15 minutos de juego activo al día. Rascadores, juguetes y ventanas con vista previenen el aburrimiento y la ansiedad.",
    },
    {
      icon: "ri-home-heart-line",
      title: "Espacio seguro",
      description:
        "Un rincón propio, escondites y zonas altas donde descansar. Los gatos necesitan sentir que controlan su territorio.",
    },
    {
      icon: "ri-user-heart-line",
      title: "Afecto y rutina",
      description:
        "Rutinas estables y contacto diario. Respetar su espacio cuando lo piden es tan importante como darles cariño.",
    },
  ];

  // Agrega aquí fotos e historias que la comunidad haya autorizado publicar.
  const communityPhotoItems = [];
  const communityStoryItems = [];

  const renderList = (container, items, createCard) => {
    if (!container) return;
    container.replaceChildren(...items.map(createCard));
  };

  const renderCuriosities = () => {
    const grid = document.getElementById("curiosities-grid");
    renderList(grid, curiosityItems, (curiosity) => {
      const card = document.createElement("article");
      card.className = "curiosity-card";
      card.innerHTML = `
        <div class="curiosity-icon-wrapper"><i class="${curiosity.icon}" aria-hidden="true"></i></div>
        <h3>${curiosity.title}</h3>
        <p>${curiosity.description}</p>
      `;
      return card;
    });
  };

  const renderCare = () => {
    const grid = document.getElementById("care-grid");
    renderList(grid, careItems, (care) => {
      const card = document.createElement("article");
      card.className = "care-card";
      card.innerHTML = `
        <div class="care-icon-container"><i class="${care.icon}" aria-hidden="true"></i></div>
        <h3>${care.title}</h3>
        <p>${care.description}</p>
      `;
      return card;
    });
  };

  const renderCommunityPhotos = () => {
    const grid = document.getElementById("community-photo-grid");
    if (!grid) return;

    if (!communityPhotoItems.length) {
      grid.innerHTML = `
        <div class="community-empty-state">
          <i class="ri-camera-line" aria-hidden="true"></i>
          <p>Pronto encontrarás aquí fotos de los gatos de la comunidad.</p>
        </div>
      `;
      return;
    }

    renderList(grid, communityPhotoItems, (photo) => {
      const card = document.createElement("article");
      card.className = "community-photo-card";

      const image = document.createElement("img");
      image.src = photo.photo;
      image.alt = `Foto de ${photo.catName}`;
      image.loading = "lazy";
      image.decoding = "async";

      const caption = document.createElement("div");
      caption.className = "community-card-caption";
      const catName = document.createElement("h4");
      catName.textContent = photo.catName;
      const author = document.createElement("p");
      author.textContent = `Foto compartida por ${photo.author}`;
      caption.append(catName, author);
      card.append(image, caption);
      return card;
    });
  };

  const renderCommunityStories = () => {
    const list = document.getElementById("community-story-list");
    if (!list) return;

    if (!communityStoryItems.length) {
      list.innerHTML = `
        <div class="community-empty-state">
          <i class="ri-chat-heart-line" aria-hidden="true"></i>
          <p>Las historias de sus compañeros humanos llegarán próximamente.</p>
        </div>
      `;
      return;
    }

    renderList(list, communityStoryItems, (story) => {
      const card = document.createElement("article");
      card.className = "community-story-card";
      const title = document.createElement("h4");
      title.textContent = story.title;
      const body = document.createElement("p");
      body.textContent = story.story;
      const author = document.createElement("p");
      author.className = "community-story-author";
      author.textContent = `Compartida por ${story.author}`;
      card.append(title, body, author);
      return card;
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    renderCuriosities();
    renderCare();
    renderCommunityPhotos();
    renderCommunityStories();
  });
})();
