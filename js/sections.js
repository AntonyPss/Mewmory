(() => {
  "use strict";
  const curiosityItems = [
    {
      icon: "ri-moon-line",
      title: "Duermen 16 horas al día",
      description:
        "Los gatos pasan alrededor del 70% de su vida durmiendo. Es parte de su instinto de ahorro de energía para la caza.",
      en: {
        title: "Cats sleep for about 16 hours a day",
        description:
          "Cats spend around 70% of their lives asleep. This is part of their instinct to save energy for hunting.",
      },
    },
    {
      icon: "ri-sound-module-line",
      title: "El ronroneo sana",
      description:
        "La vibración entre 25 y 150 Hz del ronroneo puede favorecer la regeneración de huesos y reducir el estrés.",
      en: {
        title: "A purr may help the body heal",
        description:
          "The 25–150 Hz vibrations of a purr may support bone repair and help reduce stress.",
      },
    },
    {
      icon: "ri-eye-line",
      title: "Ven en la oscuridad",
      description:
        "Sus ojos tienen una capa reflectante (tapetum lucidum) que les permite ver con solo 1/6 de la luz que necesita un humano.",
      en: {
        title: "They can see in low light",
        description:
          "A reflective layer in their eyes (the tapetum lucidum) helps cats see with just one-sixth of the light humans need.",
      },
    },
    {
      icon: "ri-fingerprint-line",
      title: "Huella nasal única",
      description:
        "El dibujo de su nariz es tan único como una huella dactilar humana. No hay dos gatos con el mismo patrón.",
      en: {
        title: "Every cat has a unique nose print",
        description:
          "A cat's nose pattern is as unique as a human fingerprint. No two cats have the same pattern.",
      },
    },
    {
      icon: "ri-heart-pulse-line",
      title: "Ronronean al sentir dolor",
      description:
        "No solo ronronean cuando están felices: también lo hacen para calmarse cuando están enfermos o estresados.",
      en: {
        title: "Cats may purr when they are in pain",
        description:
          "Cats don't purr only when they're happy. They may also purr to soothe themselves when ill or stressed.",
      },
    },
    {
      icon: "ri-microscope-line",
      title: "Sudan por las patas",
      description:
        "Las únicas glándulas sudoríparas de un gato están en sus almohadillas. Por eso dejan huellas húmedas al caminar.",
      en: {
        title: "Cats sweat through their paws",
        description:
          "A cat's sweat glands are on its paw pads. That's why cats may leave damp paw prints as they walk.",
      },
    },
  ];

  const careItems = [
    {
      icon: "ri-restaurant-line",
      title: "Alimentación",
      description:
        "Dieta equilibrada según su edad. Agua fresca siempre disponible y comida húmeda al menos una vez al día para hidratación.",
      en: {
        title: "Nutrition",
        description:
          "Choose a balanced diet for your cat's age. Keep fresh water available and offer wet food daily to support hydration.",
      },
    },
    {
      icon: "ri-heart-pulse-line",
      title: "Salud preventiva",
      description:
        "Vacunas al día, desparasitación periódica y revisiones veterinarias cada 6–12 meses. La prevención es más barata que el tratamiento.",
      en: {
        title: "Preventive healthcare",
        description:
          "Keep vaccinations current, deworm regularly, and schedule veterinary checkups every 6–12 months. Prevention is usually less costly than treatment.",
      },
    },
    {
      icon: "ri-sparkling-line",
      title: "Higiene",
      description:
        "Arenero limpio a diario, cepillado según el tipo de pelaje y corte de uñas cada 2–3 semanas. Un gato limpio es un gato tranquilo.",
      en: {
        title: "Grooming and hygiene",
        description:
          "Scoop the litter box daily, brush according to coat type, and trim nails every 2–3 weeks. A clean cat is a comfortable cat.",
      },
    },
    {
      icon: "ri-gamepad-line",
      title: "Juego y ejercicio",
      description:
        "Al menos 15 minutos de juego activo al día. Rascadores, juguetes y ventanas con vista previenen el aburrimiento y la ansiedad.",
      en: {
        title: "Play and exercise",
        description:
          "Aim for at least 15 minutes of active play each day. Scratching posts, toys, and a window view help prevent boredom and anxiety.",
      },
    },
    {
      icon: "ri-home-heart-line",
      title: "Espacio seguro",
      description:
        "Un rincón propio, escondites y zonas altas donde descansar. Los gatos necesitan sentir que controlan su territorio.",
      en: {
        title: "A safe space",
        description:
          "Give your cat a space of its own, hiding places, and high spots to rest. Cats need to feel secure in their territory.",
      },
    },
    {
      icon: "ri-user-heart-line",
      title: "Afecto y rutina",
      description:
        "Rutinas estables y contacto diario. Respetar su espacio cuando lo piden es tan importante como darles cariño.",
      en: {
        title: "Affection and routine",
        description:
          "Keep routines steady and spend time together every day. Respecting your cat's space when needed matters as much as showing affection.",
      },
    },
  ];

  // Agrega aquí fotos e historias que la comunidad haya autorizado publicar.
  const communityPhotoItems = [];
  const communityStoryItems = [];

  const renderList = (container, items, createCard) => {
    if (!container) return;
    container.replaceChildren(...items.map(createCard));
  };

  const getItemText = (item) => ({
    ...item,
    ...(window.MewmoryI18n?.getLanguage() === "en" ? item.en || {} : {}),
  });

  const renderCuriosities = () => {
    const grid = document.getElementById("curiosities-grid");
    renderList(grid, curiosityItems, (item) => {
      const curiosity = getItemText(item);
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
    renderList(grid, careItems, (item) => {
      const care = getItemText(item);
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
          <p>${window.MewmoryI18n.t("communityPhotosEmpty")}</p>
        </div>
      `;
      return;
    }

    renderList(grid, communityPhotoItems, (photo) => {
      const card = document.createElement("article");
      card.className = "community-photo-card";

      const image = document.createElement("img");
      image.src = photo.photo;
      image.alt = window.MewmoryI18n.t("communityPhotoAlt", { name: photo.catName });
      image.loading = "lazy";
      image.decoding = "async";

      const caption = document.createElement("div");
      caption.className = "community-card-caption";
      const catName = document.createElement("h4");
      catName.textContent = photo.catName;
      const author = document.createElement("p");
      author.textContent = window.MewmoryI18n.t("communityPhotoBy", { name: photo.author });
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
          <p>${window.MewmoryI18n.t("communityStoriesEmpty")}</p>
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
      author.textContent = window.MewmoryI18n.t("communityStoryBy", { name: story.author });
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

  document.addEventListener("mewmory:languagechange", () => {
    renderCuriosities();
    renderCare();
    renderCommunityPhotos();
    renderCommunityStories();
  });
})();
