const catItems = [
    {
        photo: "assets/images/luna.webp",
        name: "Luna",
        status: "Adulta",
        description:
            "Una gatita muy juguetona y cariñosa que busca un hogar activo.",
        link: "#contact",
    },
    {
        photo: "assets/images/manchis.webp",
        name: "Manchis",
        status: "Adulta",
        description:
            "Una compañera tranquila e independiente, ideal para departamentos.",
        link: "#contact",
    },
    {
        photo: "assets/images/thomy.webp",
        name: "Thomy",
        status: "Joven",
        description:
            "Lleno de energía y curiosidad, listo para explorar su nuevo hogar.",
        link: "#contact",
    },
];

const curiosityItems = [
    {
        photo: "assets/icons/sleepers.png",
        title: "Grandes dormilones",
        color: "color-peach",
        description:
            "Los gatos pasan aproximadamente el <strong>70% de sus vidas durmiendo</strong>. Esto se debe a su naturaleza de depredadores, que les exige ahorrar energía para cazar.",
    },
    {
        photo: "assets/icons/nose.png",
        title: "Huellas en la nariz",
        color: "color-teal",
        description:
            "La nariz de cada gato tiene un <strong>patrón único de crestas</strong>. Al igual que nuestras huellas dactilares, no hay dos gatos con la misma nariz en el mundo.",
    },
    {
        photo: "assets/icons/purr.png",
        title: "Poder sanador",
        color: "color-lilac",
        description:
            "El ronroneo vibra a una frecuencia que ayuda a <strong>fortalecer los huesos y tejidos</strong>. ¡Tener un gato cerca realmente puede ayudarte a sanar más rápido!",
    },
];

const catsGrid = document.getElementById("cats-grid");
const curiositiesGrid = document.getElementById("curiosities-grid");

const renderCats = () => {
    catsGrid.innerHTML = "";

    catItems.forEach((cat) => {
        const card = document.createElement("div");
        card.className = "cat-card";

        card.innerHTML = `
                    <div class="image-wrapper">
                        <img src="${cat.photo}" class="cat-image" alt="${cat.name}">

                        <div class="cat-status-container">
                            <span class="cat-tag">${cat.status}</span>
                        </div>
                    </div>

                    <h3 class="cat-title">${cat.name}</h3>
                    <p class="cat-description">${cat.description}</p>

                    <div class="card-footer">
                        <a href="${cat.link}" class="btn-primary">
                            <i class="ri-heart-3-fill"></i> Conocer a ${cat.name}
                        </a>
                    </div>
        `;

        catsGrid.appendChild(card);
    });
};

const renderCuriosities = () => {
    curiositiesGrid.innerHTML = "";

    curiosityItems.forEach((curiosity) => {
        const card = document.createElement("article");
        card.className = "curiosity-card";

        card.innerHTML = `
            <div class="curiosity-icon-wrapper ${curiosity.color}">
                <img src="${curiosity.photo}" alt="${curiosity.title}" class="curiosity-image">
            </div>
            <div class="curiosity-content">
                <h3>${curiosity.title}</h3>
                <p>${curiosity.description}</p>
            </div>
        `;

        curiositiesGrid.appendChild(card);
    });
};

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderCats();
    renderCuriosities();
});
