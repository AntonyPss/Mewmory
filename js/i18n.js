(() => {
  "use strict";

  const english = {
    pageTitle: "Mewmory - Home",
    metaTitle: "Mewmory - A cozy corner for cat lovers",
    metaDescription: "A personal cat journal featuring my cats, feline facts, and basic care guides for anyone who wants to learn how to care for cats.",
    metaImageAlt: "Mewmory, a space for cat lovers",
    metaLocale: "en_US",
    navigationLabel: "Main navigation",
    home: "Home",
    catsNav: "My cats",
    communityNav: "Community",
    curiositiesNav: "Cat facts",
    careNav: "Care",
    foodNav: "Food",
    contactNav: "Contact me",
    aboutNav: "About Mewmory",
    contactFooter: "Contact",
    mainContentLabel: "Mewmory website",
    heroEyebrow: "🐾 A personal cat project",
    heroTitle: "A cozy corner for cat lovers",
    heroDescriptionStart: "Welcome to",
    heroDescriptionEnd: ", my space to share life with my cats, fun facts, and basic care guides for anyone who wants to learn how to care for them.",
    heroCats: "Meet my cats",
    heroCare: "Learn how to care for them",
    aboutTitle: "Who's behind Mewmory?",
    aboutPhotoAlt: "Antony, the creator of Mewmory",
    aboutDescriptionStart: "I'm",
    aboutDescriptionEnd: ", a web developer and cat lover. I created this space to document life with my cats and share what I've learned about caring for them with people who are just getting started. This isn't a shelter or an adoption site; it's my personal cat journal.",
    catsDescription: "These are the cats who share my life. Each has their own personality, quirks, and favorite moments.",
    communityTitle: "Cat community",
    communityDescription: "A place to meet other cats and discover their stories.",
    communityPhotosTitle: "Community photos",
    communityStoriesTitle: "Cat stories",
    communityInvitationStart: "Would you like to share a story about your cat?",
    communityInvitationLink: "Tell me here",
    curiositiesTitle: "Feline facts",
    curiositiesDescription: "Fascinating facts you may not know about our whiskered friends.",
    careTitle: "Basic cat care",
    careDescription: "The essentials every cat needs to live a healthy, safe, and happy life.",
    foodTitle: "Recommended foods",
    foodDescription: "What to feed, what to limit, and what to avoid. A basic guide to feeding your cat well.",
    foodYesTitle: "Good choices",
    foodYes1: "High-quality cat food suited to your cat's life stage.",
    foodYes2: "Wet food (canned or in a pouch) at least once a day.",
    foodYes3: "Cooked chicken without salt or bones as an occasional treat.",
    foodYes4: "Tuna in water, very occasionally and without oil.",
    foodYes5: "Chicken broth without salt or onion.",
    foodYes6: "Small amounts of catnip.",
    foodModerationTitle: "In moderation",
    foodModeration1: "Commercial treats (no more than 10% of the daily diet).",
    foodModeration2: "Cheese and dairy: many cats are lactose intolerant.",
    foodModeration3: "Cooked egg, at most once a week.",
    foodModeration4: "Cooked vegetables such as zucchini or carrot, cut into small pieces.",
    foodNeverTitle: "Never feed",
    foodNever1: "<strong>Onion and garlic</strong>: can damage red blood cells.",
    foodNever2: "<strong>Chocolate</strong>: toxic because of theobromine.",
    foodNever3: "<strong>Grapes and raisins</strong>: may cause kidney failure.",
    foodNever4: "<strong>Alcohol and caffeine</strong>: very dangerous.",
    foodNever5: "<strong>Cooked bones</strong>: can splinter and cause internal injuries.",
    foodNever6: "<strong>Too much dairy</strong>: can cause diarrhea and discomfort.",
    foodNever7: "<strong>Raw fish</strong>: risk of parasites and thiamine deficiency.",
    contactTitle: "Contact me",
    contactDescriptionStart: "Have questions or suggestions, or want to share photos of your cats?",
    contactDescriptionEnd: "Send me a message.",
    formNameLabel: "What's your name?",
    formNamePlaceholder: "Your name or your cat's name",
    formEmailLabel: "Your email",
    formEmailPlaceholder: "cat-lover@example.com",
    formSubjectLabel: "Cat-related topic",
    formSubjectOption1: "I have a new cat fact",
    formSubjectOption2: "I'm looking for advice",
    formSubjectOption3: "I want to share a story",
    formSubjectOption4: "I just want to say hello",
    formMessageLabel: "Tell me more...",
    formMessagePlaceholder: "Write your cat-related message here...",
    formSubmit: "Send message",
    formSuccess: "Thank you! Your message was sent successfully.",
    backToTop: "Back to top",
    constructionBanner: "This page is under construction: more cat updates coming soon",
    logoAlt: "Mewmory logo",
    footerDescription: "A personal cat journal where I share life with my cats, fun facts, and basic care guides.",
    footerFollow: "Follow me",
    footerExplore: "Explore",
    footerLearn: "Learn",
    footerResources: "External resources",
    footerCopyrightStart: "© 2026 Mewmory · Made with",
    footerCopyrightEnd: "by Antony · A personal project with no adoption services",
    closeModal: "Close dialog",
    catBreedLabel: "Breed:",
    catGenderLabel: "Gender:",
    catWeightLabel: "Weight:",
    catColorLabel: "Color:",
    catAgeLabel: "Age:",
    catAboutLabel: "About ",
    catHistoryLabel: "Story",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    switchToEnglish: "Change language to English",
    switchToSpanish: "Change language to Spanish",
    catDetailsButton: "View details",
    catMissingHistory: "A story hasn't been added for this cat yet.",
    catFactsFor: "Details for {name}",
    catDetailsFor: "View details for {name}",
    communityPhotosEmpty: "Photos of community cats will appear here soon.",
    communityStoriesEmpty: "Stories from their humans are coming soon.",
    communityPhotoAlt: "Photo of {name}",
    communityPhotoBy: "Photo shared by {name}",
    communityStoryBy: "Shared by {name}",
    meowMessage: "Meow!",
  };

  const spanishDynamic = {
    themeToDark: "Cambiar a modo oscuro",
    themeToLight: "Cambiar a modo claro",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    switchToEnglish: "Cambiar idioma a inglés",
    switchToSpanish: "Cambiar idioma a español",
    catDetailsButton: "Ver detalles",
    catMissingHistory: "Aún no se ha agregado una historia para este gato.",
    catFactsFor: "Datos de {name}",
    catDetailsFor: "Ver detalles de {name}",
    communityPhotosEmpty: "Pronto encontrarás aquí fotos de los gatos de la comunidad.",
    communityStoriesEmpty: "Las historias de sus compañeros humanos llegarán próximamente.",
    communityPhotoAlt: "Foto de {name}",
    communityPhotoBy: "Foto compartida por {name}",
    communityStoryBy: "Compartida por {name}",
    meowMessage: "¡Miau!",
  };

  const originalValues = new WeakMap();
  const storageKey = "mewmory-language";
  let language = "es";

  try {
    const savedLanguage = localStorage.getItem(storageKey);
    if (savedLanguage === "en" || savedLanguage === "es") language = savedLanguage;
  } catch {
    // Keep Spanish as the default when browser storage is unavailable.
  }

  const message = (key, params = {}) => {
    const catalog = language === "en" ? english : spanishDynamic;
    let value = catalog[key] ?? english[key] ?? key;
    for (const [name, replacement] of Object.entries(params)) {
      value = value.replaceAll(`{${name}}`, String(replacement));
    }
    return value;
  };

  const getOriginalValue = (element, kind, attribute) => {
    let values = originalValues.get(element);
    if (!values) {
      values = {};
      originalValues.set(element, values);
    }
    const key = attribute ? `${kind}:${attribute}` : kind;
    if (!(key in values)) {
      values[key] = attribute
        ? element.getAttribute(attribute)
        : kind === "html"
          ? element.innerHTML
          : element.textContent;
    }
    return values[key];
  };

  const translateTextElements = () => {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const original = getOriginalValue(element, "text");
      element.textContent = language === "en" ? (english[element.dataset.i18n] ?? original) : original;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const original = getOriginalValue(element, "html");
      element.innerHTML = language === "en" ? (english[element.dataset.i18nHtml] ?? original) : original;
    });

    const translatedAttributes = [
      ["data-i18n-content", "content"],
      ["data-i18n-placeholder", "placeholder"],
      ["data-i18n-aria-label", "aria-label"],
      ["data-i18n-title", "title"],
      ["data-i18n-alt", "alt"],
    ];

    for (const [dataAttribute, targetAttribute] of translatedAttributes) {
      document.querySelectorAll(`[${dataAttribute}]`).forEach((element) => {
        const key = element.getAttribute(dataAttribute);
        const original = getOriginalValue(element, "attribute", targetAttribute);
        const value = language === "en" ? (english[key] ?? original) : original;
        if (value !== null) element.setAttribute(targetAttribute, value);
      });
    }
  };

  const applyLanguage = () => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    translateTextElements();

    const languageToggle = document.getElementById("languageToggle");
    if (languageToggle) {
      const targetLanguageKey = language === "es" ? "switchToEnglish" : "switchToSpanish";
      languageToggle.textContent = language === "es" ? "EN" : "ES";
      languageToggle.setAttribute("aria-label", message(targetLanguageKey));
      languageToggle.title = message(targetLanguageKey);
    }

    document.dispatchEvent(
      new CustomEvent("mewmory:languagechange", { detail: { language } }),
    );
  };

  const setLanguage = (nextLanguage) => {
    if (nextLanguage !== "en" && nextLanguage !== "es") return;
    if (language === nextLanguage) return;
    language = nextLanguage;
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // The language can still be changed for the current page view.
    }
    applyLanguage();
  };

  document.getElementById("languageToggle")?.addEventListener("click", () => {
    setLanguage(language === "es" ? "en" : "es");
  });

  window.MewmoryI18n = {
    getLanguage: () => language,
    setLanguage,
    t: message,
  };

  applyLanguage();
})();
