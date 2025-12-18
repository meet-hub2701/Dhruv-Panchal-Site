/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                marker: ['"Permanent Marker"', 'cursive'],
            },
            colors: {
                primary: '#FFC107', // Yellow-ish
                dark: '#111111',
            }
        },
    },
    plugins: [],
}
