<<<<<<< HEAD
(() => {
  "use strict";

  // Las imágenes del carrusel se administran aquí; agrega o quita URLs de esta lista.
  const heroSlides = [
    "https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic1353290.webp?w=1600&h=1067&q=100",
    "https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic610489.webp?w=1600&h=1089&q=100",
    "https://www.purina.es/sites/default/files/styles/ttt_image_original/public/2026-07/img-header-cuantos-snacks-al-dia-1440x560.webp?itok=ifMujM50",
    "https://www.purina.es/sites/default/files/styles/ttt_image_original/public/2026-06/cabecera-1440x560px_0.webp?itok=xwb2c8EN",
  ];

  const heroCarouselImage = document.getElementById("hero-carousel-image");
  if (heroCarouselImage && heroSlides.length > 1) {
    let currentHeroSlide = 0;

    window.setInterval(() => {
      currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
      heroCarouselImage.src = heroSlides[currentHeroSlide];
    }, 5000);
  }

  // Menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const menuIcon = menuToggle.querySelector("i");

  // Tema claro/oscuro: conserva la elección del usuario.
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle?.querySelector("i");

  const updateThemeToggle = () => {
    if (!themeToggle || !themeIcon) return;
    const isDark = document.documentElement.dataset.theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro",
    );
    themeToggle.title = isDark
      ? "Cambiar a modo claro"
      : "Cambiar a modo oscuro";
    themeIcon.classList.toggle("ri-sun-line", isDark);
    themeIcon.classList.toggle("ri-moon-line", !isDark);
  };

  updateThemeToggle();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      try {
        localStorage.setItem("mewmory-theme", nextTheme);
      } catch {
        // El tema sigue funcionando aunque el navegador bloquee el almacenamiento.
      }
      updateThemeToggle();
    });
  }

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
      menuIcon.classList.replace("ri-menu-line", "ri-close-line");
    } else {
      menuIcon.classList.replace("ri-close-line", "ri-menu-line");
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuIcon.classList.replace("ri-close-line", "ri-menu-line");
    });
  });

  // Header shadow effect scrolled
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");

    if (window.scrollY > 20) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });

  // Mensaje de Emoji
  const catButton = document.getElementById("catButton");
  const catMessage = document.getElementById("catMessage");

  catButton.addEventListener("click", () => {
    if (
      catMessage.style.display === "none" ||
      catMessage.style.display === ""
    ) {
      catMessage.style.display = "block";
      catMessage.textContent = "¡Miau!";
      catButton.textContent = "😸";
      catMessage.classList.add("fade-in");
      catMessage.addEventListener(
        "animationend",
        () => {
          catMessage.classList.remove("fade-in");
        },
        { once: true },
      );
    } else {
      catMessage.style.display = "none";
    }
  });
})();
=======
(() => {
  "use strict";

  // Las imágenes del carrusel se administran aquí; agrega o quita URLs de esta lista.
  const heroSlides = [
    "https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic1353290.webp?w=1600&h=1067&q=100",
    "https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic610489.webp?w=1600&h=1089&q=100",
    "https://www.purina.es/sites/default/files/styles/ttt_image_original/public/2026-07/img-header-cuantos-snacks-al-dia-1440x560.webp?itok=ifMujM50",
    "https://www.purina.es/sites/default/files/styles/ttt_image_original/public/2026-06/cabecera-1440x560px_0.webp?itok=xwb2c8EN",
  ];

  const heroCarouselImage = document.getElementById("hero-carousel-image");
  if (heroCarouselImage && heroSlides.length > 1) {
    let currentHeroSlide = 0;

    window.setInterval(() => {
      currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
      heroCarouselImage.src = heroSlides[currentHeroSlide];
    }, 5000);
  }

  // Menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const menuIcon = menuToggle.querySelector("i");

  // Tema claro/oscuro: conserva la elección del usuario.
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle?.querySelector("i");

  const updateThemeToggle = () => {
    if (!themeToggle || !themeIcon) return;
    const isDark = document.documentElement.dataset.theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro",
    );
    themeToggle.title = isDark
      ? "Cambiar a modo claro"
      : "Cambiar a modo oscuro";
    themeIcon.classList.toggle("ri-sun-line", isDark);
    themeIcon.classList.toggle("ri-moon-line", !isDark);
  };

  updateThemeToggle();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      try {
        localStorage.setItem("mewmory-theme", nextTheme);
      } catch {
        // El tema sigue funcionando aunque el navegador bloquee el almacenamiento.
      }
      updateThemeToggle();
    });
  }

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
      menuIcon.classList.replace("ri-menu-line", "ri-close-line");
    } else {
      menuIcon.classList.replace("ri-close-line", "ri-menu-line");
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuIcon.classList.replace("ri-close-line", "ri-menu-line");
    });
  });

  // Header shadow effect scrolled
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");

    if (window.scrollY > 20) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });

  // Mensaje de Emoji
  const catButton = document.getElementById("catButton");
  const catMessage = document.getElementById("catMessage");

  catButton.addEventListener("click", () => {
    if (
      catMessage.style.display === "none" ||
      catMessage.style.display === ""
    ) {
      catMessage.style.display = "block";
      catMessage.textContent = "¡Miau!";
      catButton.textContent = "😸";
      catMessage.classList.add("fade-in");
      catMessage.addEventListener(
        "animationend",
        () => {
          catMessage.classList.remove("fade-in");
        },
        { once: true },
      );
    } else {
      catMessage.style.display = "none";
    }
  });
})();
>>>>>>> 3f259a2fd3ea77fbe86c280df0e5098db5e711fc
