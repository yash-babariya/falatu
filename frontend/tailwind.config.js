/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    dark: '#0B2447',
                    DEFAULT: '#19376D',
                    light: '#576CBC',
                },
                secondary: '#A5D7E8',
            },
            borderRadius: {
                inherit: 'inherit',
            }
        },
    },
    plugins: [],
} 