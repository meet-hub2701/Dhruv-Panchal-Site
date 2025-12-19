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
            screens: {
                'esm': '400px',
                'em': '480px',
                'sm': '640px',
                'md': '768px',
                'emd': '992px',
                'lg': '1024px',
                'xl': '1280px',
                '1xl': '1440px',
                '4xl': '1920px',
            },
            colors: {
                primary: '#FFC107', // Yellow-ish
                dark: '#111111',
            }
        },
    },
    plugins: [],
}
