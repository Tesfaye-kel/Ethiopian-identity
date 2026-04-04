/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
<<<<<<< HEAD
   theme: {
     extend: {},
=======
  theme: {
    extend: {
      height: {
        'dvh': '100dvh',
        'svh': '100svh',
        'lvh': '100lvh',
      },
      width: {
        'dvw': '100dvw',
        'svw': '100svw',
        'lvw': '100lvw',
      },
      minHeight: {
        'dvh': '100dvh',
      },
    },
>>>>>>> 6afcb46 ( added some thing and update)
  },
  plugins: [],
}
