# Mewmory

Sitio estático personal para compartir fotos, datos y cuidados de gatos. Está hecho con HTML, CSS y JavaScript nativo; no necesita Node.js, un proceso de compilación ni dependencias locales.

## Estructura

```text
Mewmory Web/
├── index.html
├── css/
│   └── main.css
├── js/
│   ├── main.js       # Navegación, tema claro/oscuro y botón flotante
│   ├── cats.js       # Datos, tarjetas y modal de los gatos
│   ├── sections.js   # Curiosidades, cuidados y comunidad
│   └── i18n.js       # Selector y traducciones español/inglés
├── assets/
│   ├── icons/
│   └── images/
└── archive/          # Copia histórica, no forma parte del sitio activo
```

## Ejecutar localmente

Abre la carpeta en VS Code e inicia `index.html` con la extensión Live Server. El formulario usa Formspree por AJAX y necesita conexión a internet.

## Actualizar contenido

- **Gatos:** edita `catItems` en `js/cats.js`. Usa rutas de imagen relativas a la raíz, por ejemplo `assets/images/nombre.webp`.
- **Curiosidades y cuidados:** edita `curiosityItems` y `careItems` en `js/sections.js`.
- **Comunidad:** agrega fotos a `communityPhotoItems` e historias a `communityStoryItems` en `js/sections.js`. Solo incorpora aportes autorizados para publicación.
- **Estilos y temas:** `css/main.css` agrupa los estilos por sección; las variables de color definen los modos claro y oscuro.
- **Formulario:** el endpoint aparece en el atributo `action` del formulario y el ID se usa al iniciar `@formspree/ajax` al final de `index.html`. Si cambias de formulario en Formspree, actualiza ambos valores.
- **Idiomas:** el selector del encabezado cambia entre español e inglés y guarda la elección. Traduce los textos de la interfaz en `js/i18n.js`; agrega el contenido inglés de los gatos en `catEnglish` de `js/cats.js` y el de las tarjetas de curiosidades y cuidados en cada propiedad `en` de `js/sections.js`.

Las imágenes fuera de la primera pantalla usan carga diferida cuando se generan desde JavaScript. Las imágenes existentes ya usan formatos WebP donde están disponibles.
