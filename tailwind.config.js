/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "*.html"],
  theme: {
    extend: {
      colors: {
        "very-dark-gray": "var(--very-dark-gray)",
        "dark-gray": "var(--dark-gray)",
      },
      backgroundImage: {
        "header-pattern-desktop": "url('/images/pattern-bg-desktop.png')",
        "header-pattern-mobile": "url('/images/pattern-bg-mobile.png')",
      },
      plugins: [],
    }
  }
};