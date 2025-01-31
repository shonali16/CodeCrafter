import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#0a2444',
                'secondary': '#0a2444'
            },
            fontFamily: {
                'rubik-vinyl': ['Rubik Vinyl', 'serif'],
            },
        },
    },
    plugins: [],
}
