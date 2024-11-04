import { LandingTranslations, TranslationSection } from "./types";

export const landingTranslations: TranslationSection<LandingTranslations> = {
  en: {
    hero: {
      welcome: "Welcome to",
      subtitle: "Challenge your vocabulary and deduction skills!",
    },
    buttons: {
      login: "Login",
      register: "Register",
      playNow: "Play Now",
    },
    about: {
      title: "About This Project",
      description:
        "This Wordle Clone is a web-based word guessing game inspired by the popular Wordle game. Players have six attempts to guess a five-letter word, with color-coded feedback for each guess.",
      techStack: {
        title: "Tech Stack:",
        items: [
          "React (UI library)",
          "Tailwind CSS (Styling)",
          "TypeScript (Type-safe JavaScript)",
          "Framer Motion (Animations)",
        ],
      },
      projectDescription:
        "This project showcases modern web development techniques, including responsive design, state management, and smooth animations to enhance user experience.",
      portfolio: "View My Portfolio",
    },
    footer: "© 2023 Wordle Clone. All rights reserved.",
  },
  es: {
    hero: {
      welcome: "Bienvenido a",
      subtitle: "¡Desafía tu vocabulario y habilidades de deducción!",
    },
    buttons: {
      login: "Iniciar Sesión",
      register: "Registrarse",
      playNow: "Jugar Ahora",
    },
    about: {
      title: "Sobre Este Proyecto",
      description:
        "Este clon de Wordle es un juego de adivinanzas de palabras basado en web inspirado en el popular juego Wordle. Los jugadores tienen seis intentos para adivinar una palabra de cinco letras, con retroalimentación codificada por colores para cada intento.",
      techStack: {
        title: "Tecnologías Utilizadas:",
        items: [
          "React (Biblioteca de UI)",
          "Tailwind CSS (Estilos)",
          "TypeScript (JavaScript con tipos)",
          "Framer Motion (Animaciones)",
        ],
      },
      projectDescription:
        "Este proyecto muestra técnicas modernas de desarrollo web, incluyendo diseño responsivo, gestión de estado y animaciones fluidas para mejorar la experiencia del usuario.",
      portfolio: "Ver Mi Portafolio",
    },
    footer: "© 2023 Wordle Clone. Todos los derechos reservados.",
  },
};
